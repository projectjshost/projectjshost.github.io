const canvas = document.getElementById('glCanvas');
const gl = canvas.getContext('webgl');
let scale = 2.0;
let centerX = -0.5;
let centerY = 0.0;
let lastRenderTime = 0;
let frameCount = 0;
let maxIterations = 500;
let isMobile = /Mobi|Android/i.test(navigator.userAgent);
// Flag to track if a render is needed
let renderNeeded = true;

// DOM cache
const infoPosition = document.querySelector('#info .position');
const infoScale = document.querySelector('#info .scale');
const infoCanvasSize = document.querySelector('#info .canvasSize');
const infoFps = document.querySelector('#info .fps');

// Shader optimization: split center into high and low parts for precision
const vsSource = `
attribute vec4 aVertexPosition;
void main() {
    gl_Position = aVertexPosition;
}
`;

const fsSource = `
precision highp float;
uniform vec2 uCenterHigh;
uniform vec2 uCenterLow;
uniform float uScale;
uniform vec2 uResolution;
uniform float uMinResolutionInverse;
uniform int uMaxIterations;

vec3 hueToRGB(float h) {
    vec3 rgb = abs(mod(h * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0;
    return clamp(rgb, 0.0, 1.0);
}

void main() {
    vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution) * uMinResolutionInverse;
    vec2 c = uCenterHigh + uCenterLow + uv * uScale;
    vec2 z = vec2(0.0);
    int iter = 0;
    
    for(int i = 0; i < 500; i++) {
        if(i >= uMaxIterations) break;
        if(z.x*z.x + z.y*z.y > 4.0) break;
        
        float x = z.x*z.x - z.y*z.y + c.x;
        float y = 2.0*z.x*z.y + c.y;
        z = vec2(x, y);
        iter++;
    }
    
    if(iter == uMaxIterations) {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    } else {
        float t = float(iter) / float(uMaxIterations);
        vec3 color = hueToRGB(t) * t;
        gl_FragColor = vec4(color, 1.0);
    }
}
`;

function initWebGL() {
    if (!gl) {
        alert('WebGL not supported!');
        return null;
    }
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    return gl;
}

function loadShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }
    return shader;
}

function initShaderProgram(gl, vsSource, fsSource) {
    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        console.error('Shader program error:', gl.getProgramInfoLog(shaderProgram));
        return null;
    }
    return shaderProgram;
}

function initBuffers(gl) {
    const vertices = new Float32Array([-1.0, 1.0, 1.0, 1.0, -1.0, -1.0, 1.0, -1.0]);
    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    return { vertexBuffer, numVertices: 4 };
}

function splitDouble(x) {
    const float32 = new Float32Array(1);
    float32[0] = x;
    const high = float32[0];
    const low = x - high;
    return { high, low };
}

function drawScene(gl, programInfo, buffers) {
    gl.useProgram(programInfo.program);
    const centerXSplit = splitDouble(centerX);
    const centerYSplit = splitDouble(centerY);
    gl.uniform2f(programInfo.uniformLocations.uCenterHigh, centerXSplit.high, centerYSplit.high);
    gl.uniform2f(programInfo.uniformLocations.uCenterLow, centerXSplit.low, centerYSplit.low);
    gl.uniform1f(programInfo.uniformLocations.uScale, scale);
    gl.uniform2f(programInfo.uniformLocations.uResolution, canvas.width, canvas.height);
    gl.uniform1f(programInfo.uniformLocations.uMinResolutionInverse,
        1.0 / Math.min(canvas.width, canvas.height));
    gl.uniform1i(programInfo.uniformLocations.uMaxIterations, maxIterations);

    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.vertexBuffer);
    gl.vertexAttribPointer(
        programInfo.attribLocations.aVertexPosition,
        2,
        gl.FLOAT,
        false,
        0,
        0
    );
    gl.enableVertexAttribArray(programInfo.attribLocations.aVertexPosition);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, buffers.numVertices);
}

function main() {
    const gl = initWebGL();
    if (!gl) return;

    maxIterations = isMobile ? 200 : 500;
    const shaderProgram = initShaderProgram(gl, vsSource, fsSource);
    const programInfo = {
        program: shaderProgram,
        attribLocations: {
            aVertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
        },
        uniformLocations: {
            uCenterHigh: gl.getUniformLocation(shaderProgram, 'uCenterHigh'),
            uCenterLow: gl.getUniformLocation(shaderProgram, 'uCenterLow'),
            uScale: gl.getUniformLocation(shaderProgram, 'uScale'),
            uResolution: gl.getUniformLocation(shaderProgram, 'uResolution'),
            uMinResolutionInverse: gl.getUniformLocation(shaderProgram, 'uMinResolutionInverse'),
            uMaxIterations: gl.getUniformLocation(shaderProgram, 'uMaxIterations'),
        },
    };

    const buffers = initBuffers(gl);
    let lastWidth = 0, lastHeight = 0;

    function handleResize() {
        const dpr = isMobile ? (window.devicePixelRatio || 1) * 0.5 : window.devicePixelRatio || 1;
        const newWidth = Math.floor(window.innerWidth * dpr);
        const newHeight = Math.floor(window.innerHeight * dpr) - 45;

        if (newWidth !== lastWidth || newHeight !== lastHeight) {
            canvas.width = newWidth;
            canvas.height = newHeight;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            lastWidth = newWidth;
            lastHeight = newHeight;
            renderNeeded = true; // Mark that render is needed after resize
        }
    }

    function updateInfoDisplay() {
        // Update DOM elements
        infoPosition.textContent = `(${centerX.toFixed(5)}, ${centerY.toFixed(5)})`;
        infoScale.textContent = scale.toExponential(2);
        infoCanvasSize.textContent = `${canvas.width}x${canvas.height}`;
    }

    function render(timestamp) {
        if (renderNeeded) {
            handleResize();
            gl.viewport(0, 0, canvas.width, canvas.height);
            drawScene(gl, programInfo, buffers);
            updateInfoDisplay();
            renderNeeded = false; // Reset the flag after rendering
            
            // Update frame counter
            frameCount++;
        }

        // Update FPS once per second regardless of rendering
        if (timestamp - lastRenderTime > 1000) {
            const fps = frameCount / ((timestamp - lastRenderTime) / 1000);
            infoFps.textContent = fps.toFixed(2);
            lastRenderTime = timestamp;
            frameCount = 0;
        }
        
        requestAnimationFrame(render);
    }

    // Event Handlers
    canvas.addEventListener('wheel', e => {
        e.preventDefault();
        const rect = canvas.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        const minRes = Math.min(canvas.width, canvas.height);
        const oldScale = scale;
        scale *= e.deltaY < 0 ? 0.9 : 1.1;
        centerX += ((e.clientX - rect.left) * dpr - canvas.width / 2) / minRes * (oldScale - scale);
        centerY += (canvas.height / 2 - (e.clientY - rect.top) * dpr) / minRes * (oldScale - scale);
        renderNeeded = true; // Mark that render is needed after zoom
    }, { passive: false });

    canvas.addEventListener('mousedown', e => {
        const dpr = window.devicePixelRatio || 1;
        const invMinRes = 1 / Math.min(canvas.width, canvas.height);
        const startX = e.clientX * dpr;
        const startY = e.clientY * dpr;
        const [initialX, initialY] = [centerX, centerY];

        const moveHandler = e => {
            const dx = (e.clientX * dpr - startX) * invMinRes * scale;
            const dy = (e.clientY * dpr - startY) * invMinRes * scale;
            centerX = initialX - dx;
            centerY = initialY + dy;
            renderNeeded = true; // Mark that render is needed during drag
        };

        const endHandler = () => window.removeEventListener('mousemove', moveHandler);

        window.addEventListener('mousemove', moveHandler);
        window.addEventListener('mouseup', endHandler, { once: true });
    });

    window.addEventListener('resize', handleResize);
    
    // Force initial render
    renderNeeded = true;
    lastRenderTime = performance.now();
    requestAnimationFrame(render);
}

main();