/**
 * Helper to perform a fade-in animation using the Web Animations API.
 * @param {HTMLElement} element 
 * @param {number} duration 
 */
export const fadeIn = (element, duration = 200) => {
	element.animate([{ opacity: 0 }, { opacity: 1 }], {
		duration,
		easing: "ease-out",
		fill: "forwards",
	});
};

/**
 * Helper to perform a fade-out animation.
 * @param {HTMLElement} element 
 * @param {number} duration 
 * @returns {Promise<void>}
 */
export const fadeOut = (element, duration = 200) => {
	const animation = element.animate([{ opacity: 1 }, { opacity: 0 }], {
		duration,
		easing: "ease-in",
		fill: "forwards",
	});
	return animation.finished;
};

/**
 * Helper to perform a slide-down animation.
 * @param {HTMLElement} element 
 * @param {number} duration 
 */
export const slideDown = (element, duration = 200) => {
	const height = element.offsetHeight;
	element.animate(
		[
			{ height: "0px", opacity: 0, overflow: "hidden" },
			{ height: `${height}px`, opacity: 1, overflow: "hidden" },
		],
		{
			duration,
			easing: "ease-out",
		}
	);
};

/**
 * Helper to perform a slide-up animation.
 * @param {HTMLElement} element 
 * @param {number} duration 
 * @returns {Promise<void>}
 */
export const slideUp = (element, duration = 200) => {
	const height = element.offsetHeight;
	const animation = element.animate(
		[
			{ height: `${height}px`, opacity: 1, overflow: "hidden" },
			{ height: "0px", opacity: 0, overflow: "hidden" },
		],
		{
			duration,
			easing: "ease-in",
		}
	);
	return animation.finished;
};