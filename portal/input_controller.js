
class GamePadState {

    constructor(buttonNum, keyName) {
        this.buttonDown = false;
        this.buttonNum = -1;
        this.buttonTimer = 0;
        this.keyName = '';
        this.buttonNum = buttonNum;
        this.keyName = keyName;
    }

}

class KeyMappings {

    constructor() {
        this.Mapping_Left = null;
        this.Mapping_Right = null;
        this.Mapping_Up = null;
        this.Mapping_Down = null;
        this.Mapping_Action_Start = null;
        this.Mapping_Action_CUP = null;
        this.Mapping_Action_CDOWN = null;
        this.Mapping_Action_CLEFT = null;
        this.Mapping_Action_CRIGHT = null;
        this.Mapping_Action_Analog_Up = null;
        this.Mapping_Action_Analog_Down = null;
        this.Mapping_Action_Analog_Left = null;
        this.Mapping_Action_Analog_Right = null;
        this.Mapping_Action_Z = null;
        this.Mapping_Action_L = null;
        this.Mapping_Action_R = null;
        this.Mapping_Action_B = null;
        this.Mapping_Action_A = null;
        this.Mapping_Menu = null;
        this.Joy_Mapping_Left = null;
        this.Joy_Mapping_Right = null;
        this.Joy_Mapping_Up = null;
        this.Joy_Mapping_Down = null;
        this.Joy_Mapping_Action_Start = null;
        this.Joy_Mapping_Action_Z = null;
        this.Joy_Mapping_Action_L = null;
        this.Joy_Mapping_Action_R = null;
        this.Joy_Mapping_Action_B = null;
        this.Joy_Mapping_Action_A = null;
        this.Joy_Mapping_Menu = null;
        this.Joy_Mapping_Action_CLEFT = null;
        this.Joy_Mapping_Action_CRIGHT = null;
        this.Joy_Mapping_Action_CUP = null;
        this.Joy_Mapping_Action_CDOWN = null;
    }
}

class InputController {

    constructor() {
        
        this.gamepadButtons = [];
        this.DebugKeycodes = false;

        //for remapping
        this.Key_Last = '';
        this.Joy_Last = null;
        this.Remap_Check = false;

        //controller 1
        this.Key_Up = false;
        this.Key_Down = false;
        this.Key_Left = false;
        this.Key_Right = false;
        this.Key_Action_Start = false;
        this.Key_Action_CUP = false;
        this.Key_Action_CDOWN = false;
        this.Key_Action_CLEFT = false;
        this.Key_Action_CRIGHT = false;
        this.Key_Action_Z = false;
        this.Key_Action_L = false;
        this.Key_Action_R = false;
        this.Key_Action_B = false;
        this.Key_Action_A = false;
        this.Key_Menu = false;
        this.VectorX = 0;
        this.VectorY = 0;

        //touch
        this.touchX_Start = 0;
        this.touchY_Start = 0;
        this.touch_tap_counter = 0;
        this.nippleDirection = 'none';

        this.KeyMappings = this.defaultKeymappings();
        document.onkeydown = this.keyDown.bind(this);
        document.onkeyup = this.keyUp.bind(this);

        this.setGamePadButtons();
    }

    defaultKeymappings() {
        return {
            Mapping_Left: 'b',
            Mapping_Right: 'n',
            Mapping_Up: 'y',
            Mapping_Down: 'h',
            Mapping_Action_A: 'z',
            Mapping_Action_B: 'x',
            Mapping_Action_Start: 'Enter',
            Mapping_Action_CUP: 'w',
            Mapping_Action_CDOWN: 's',
            Mapping_Action_CLEFT: 'a',
            Mapping_Action_CRIGHT: 'd',
            Mapping_Action_Analog_Up: 'ArrowUp',
            Mapping_Action_Analog_Down: 'ArrowDown',
            Mapping_Action_Analog_Left: 'ArrowLeft',
            Mapping_Action_Analog_Right: 'ArrowRight',
            Mapping_Action_Z: ' ',
            Mapping_Action_L: 'Shift',
            Mapping_Action_R: 'r',
            Mapping_Menu: '`',
            Joy_Mapping_Left: 14,
            Joy_Mapping_Right: 15,
            Joy_Mapping_Down: 13,
            Joy_Mapping_Up: 12,
            Joy_Mapping_Action_A: 0,
            Joy_Mapping_Action_B: 2,
            Joy_Mapping_Action_Start: 9,
            Joy_Mapping_Action_Z: 4,
            Joy_Mapping_Action_L: 6,
            Joy_Mapping_Action_R: 5,
            Joy_Mapping_Menu: 11,
            Joy_Mapping_Action_CLEFT: -1,
            Joy_Mapping_Action_CRIGHT: -1,
            Joy_Mapping_Action_CUP: -1,
            Joy_Mapping_Action_CDOWN: -1,
        };
    }

    setupGamePad() {
        window.addEventListener("gamepadconnected", this.initGamePad.bind(this));
    }

    setGamePadButtons() {
        this.gamepadButtons = [];
    }

    initGamePad(e) {
        try {
            if (e.gamepad.buttons.length > 0) {
                // this.message = '<b>Gamepad Detected:</b><br>' + e.gamepad.id;
            }
        }
        catch (_a) { }
        console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.", e.gamepad.index, e.gamepad.id, e.gamepad.buttons.length, e.gamepad.axes.length);
    }

    processGamepad() {
        try {
            var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
            if (!gamepads)
                return;
            var gp = null;
            for (let i = 0; i < gamepads.length; i++) {
                if (gamepads[i] && gamepads[i].buttons.length > 0)
                    gp = gamepads[i];
            }
            if (gp) {
                for (let i = 0; i < gp.buttons.length; i++) {
                    if (this.DebugKeycodes) {
                        if (gp.buttons[i].pressed)
                            console.log(i);
                    }
                    if (gp.buttons[i].pressed)
                        this.Joy_Last = i;
                }
                //process axes
                if (this.Gamepad_Process_Axis) {
                    try {
                        let horiz_axis = gp.axes[0];
                        let vertical_axis = gp.axes[1];
                        if (horiz_axis < -.5) {
                            if (!this.Key_Left) {
                                this.sendKeyDownEvent(this.KeyMappings.Mapping_Left);
                            }
                        }
                        else {
                            if (this.Key_Left) {
                                this.sendKeyUpEvent(this.KeyMappings.Mapping_Left);
                            }
                        }
                        if (horiz_axis > .5) {
                            if (!this.Key_Right) {
                                this.sendKeyDownEvent(this.KeyMappings.Mapping_Right);
                            }
                        }
                        else {
                            if (this.Key_Right) {
                                this.sendKeyUpEvent(this.KeyMappings.Mapping_Right);
                            }
                        }
                        if (vertical_axis > .5) {
                            if (!this.Key_Down) {
                                this.sendKeyDownEvent(this.KeyMappings.Mapping_Down);
                            }
                        }
                        else {
                            if (this.Key_Down) {
                                this.sendKeyUpEvent(this.KeyMappings.Mapping_Down);
                            }
                        }
                        if (vertical_axis < -.5) {
                            if (!this.Key_Up) {
                                this.sendKeyDownEvent(this.KeyMappings.Mapping_Up);
                            }
                        }
                        else {
                            if (this.Key_Up) {
                                this.sendKeyUpEvent(this.KeyMappings.Mapping_Up);
                            }
                        }
                    }
                    catch (error) { }
                }
            }
        }
        catch (_a) { }
    }

    sendKeyDownEvent(key) {
        let keyEvent = new KeyboardEvent('Gamepad Event Down', { key: key });
        this.keyDown(keyEvent);
    }

    sendKeyUpEvent(key) {
        let keyEvent = new KeyboardEvent('Gamepad Event Up', { key: key });
        this.keyUp(keyEvent);
    }

    keyDown(event) {
        let input_controller = this;
        input_controller.Key_Last = event.key;
        if (input_controller.DebugKeycodes)
            console.log(event);
        
        //handle certain keyboards that use Left instead of ArrowLeft
        if (event.key == 'Left' && input_controller.KeyMappings.Mapping_Left == 'ArrowLeft')
            event = new KeyboardEvent('', { key: 'ArrowLeft' });
        if (event.key == 'Right' && input_controller.KeyMappings.Mapping_Right == 'ArrowRight')
            event = new KeyboardEvent('', { key: 'ArrowRight' });
        if (event.key == 'Up' && input_controller.KeyMappings.Mapping_Up == 'ArrowUp')
            event = new KeyboardEvent('', { key: 'ArrowUp' });
        if (event.key == 'Down' && input_controller.KeyMappings.Mapping_Down == 'ArrowDown')
            event = new KeyboardEvent('', { key: 'ArrowDown' });
        let arrowkey = false;

        //player 1
        if (event.key == input_controller.KeyMappings.Mapping_Down) {
            input_controller.Key_Down = true;
            arrowkey = true;
        }
        if (event.key == input_controller.KeyMappings.Mapping_Up) {
            input_controller.Key_Up = true;
            arrowkey = true;
        }
        if (event.key == input_controller.KeyMappings.Mapping_Left) {
            input_controller.Key_Left = true;
            arrowkey = true;
        }
        if (event.key == input_controller.KeyMappings.Mapping_Right) {
            input_controller.Key_Right = true;
            arrowkey = true;
        }
        if (event.key == input_controller.KeyMappings.Mapping_Action_Start) {
            input_controller.Key_Action_Start = true;
        }
        if (event.key == input_controller.KeyMappings.Mapping_Action_CUP) {
            input_controller.Key_Action_CUP = true;
        }
        if (event.key == input_controller.KeyMappings.Mapping_Action_CDOWN) {
            input_controller.Key_Action_CDOWN = true;
        }
        if (event.key == input_controller.KeyMappings.Mapping_Action_CLEFT) {
            input_controller.Key_Action_CLEFT = true;
        }
        if (event.key == input_controller.KeyMappings.Mapping_Action_CRIGHT) {
            input_controller.Key_Action_CRIGHT = true;
        }
        if (event.key == input_controller.KeyMappings.Mapping_Action_B) {
            input_controller.Key_Action_B = true;
        }
        if (event.key == input_controller.KeyMappings.Mapping_Action_Z) {
            input_controller.Key_Action_Z = true;
        }
        if (event.key == input_controller.KeyMappings.Mapping_Action_L) {
            input_controller.Key_Action_L = true;
        }
        if (event.key == input_controller.KeyMappings.Mapping_Action_R) {
            input_controller.Key_Action_R = true;
        }
        if (event.key == input_controller.KeyMappings.Mapping_Action_A) {
            input_controller.Key_Action_A = true;
        }
        if (event.key == input_controller.KeyMappings.Mapping_Menu) {
            input_controller.Key_Menu = true;
        }
        
    }

    keyUp(event) {
        let input_controller = this;
        
        //handle certain keyboards that use Left instead of ArrowLeft
        if (event.key == 'Left' && input_controller.KeyMappings.Mapping_Left == 'ArrowLeft')
            event = new KeyboardEvent('', { key: 'ArrowLeft' });
        if (event.key == 'Right' && input_controller.KeyMappings.Mapping_Right == 'ArrowRight')
            event = new KeyboardEvent('', { key: 'ArrowRight' });
        if (event.key == 'Up' && input_controller.KeyMappings.Mapping_Up == 'ArrowUp')
            event = new KeyboardEvent('', { key: 'ArrowUp' });
        if (event.key == 'Down' && input_controller.KeyMappings.Mapping_Down == 'ArrowDown')
            event = new KeyboardEvent('', { key: 'ArrowDown' });
        
        //player 1
        if (event.key == input_controller.KeyMappings.Mapping_Down) {
            input_controller.Key_Down = false;
        }
        if (event.key == input_controller.KeyMappings.Mapping_Up) {
            input_controller.Key_Up = false;
        }
        if (event.key == input_controller.KeyMappings.Mapping_Left) {
            input_controller.Key_Left = false;
        }
        if (event.key == input_controller.KeyMappings.Mapping_Right) {
            input_controller.Key_Right = false;
        }
        if (event.key == input_controller.KeyMappings.Mapping_Action_Start) {
            input_controller.Key_Action_Start = false;
        }
        if (event.key == input_controller.KeyMappings.Mapping_Action_CUP) {
            input_controller.Key_Action_CUP = false;
        }
        if (event.key == input_controller.KeyMappings.Mapping_Action_CDOWN) {
            input_controller.Key_Action_CDOWN = false;
        }
        if (event.key == input_controller.KeyMappings.Mapping_Action_CLEFT) {
            input_controller.Key_Action_CLEFT = false;
        }
        if (event.key == input_controller.KeyMappings.Mapping_Action_CRIGHT) {
            input_controller.Key_Action_CRIGHT = false;
        }
        if (event.key == input_controller.KeyMappings.Mapping_Action_B) {
            input_controller.Key_Action_B = false;
        }
        if (event.key == input_controller.KeyMappings.Mapping_Action_Z) {
            input_controller.Key_Action_Z = false;
        }
        if (event.key == input_controller.KeyMappings.Mapping_Action_L) {
            input_controller.Key_Action_L = false;
        }
        if (event.key == input_controller.KeyMappings.Mapping_Action_R) {
            input_controller.Key_Action_R = false;
        }
        if (event.key == input_controller.KeyMappings.Mapping_Action_A) {
            input_controller.Key_Action_A = false;
        }
        if (event.key == input_controller.KeyMappings.Mapping_Menu) {
            input_controller.Key_Menu = false;
        }
        
    }

    update() {
        this.processGamepad();
       
        //a hack - need to refactor
        if (this.Remap_Check) {
            if (this.Key_Last != '' || this.Joy_Last) {
                window["myApp"].remapPressed();
                this.Remap_Check = false;
            }
        }
    }

    updateMobileControls(){
        let mobileString = '';
        mobileString += '0'; //UP
        mobileString += '0'; //DOWN
        mobileString += '0'; //LEFT
        mobileString += '0'; //RIGHT
        if (this.Key_Action_A) mobileString += '1'; else mobileString += '0';
        if (this.Key_Action_B) mobileString += '1'; else mobileString += '0';
        if (this.Key_Action_Start) mobileString += '1'; else mobileString += '0';
        if (this.Key_Action_Z && !window["myApp"].rivetsData.useZasCMobile) mobileString += '1'; else mobileString += '0';
        mobileString += '0'; //L
        mobileString += '0'; //R
        if (this.Key_Action_CUP) mobileString += '1'; else mobileString += '0'; //CUP
        if (this.Key_Action_CDOWN) mobileString += '1'; else mobileString += '0'; //CDOWN
        if (this.Key_Action_CLEFT) mobileString += '1'; else mobileString += '0'; //CLEFT
        if (this.Key_Action_CRIGHT) mobileString += '1'; else mobileString += '0'; //CRIGHT

        window["myApp"].sendMobileControls(mobileString, this.VectorX.toString(), this.VectorY.toString());
    }
}

window["myApp"].setupInputController();

var script = document.createElement('script');
script.src = 'n64wasm.js'
document.getElementsByTagName('head')[0].appendChild(script);