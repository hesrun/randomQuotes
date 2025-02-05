import Typed from '../node_modules/typed.js/dist/typed.module.js';

const getYearPrefics = (year) => (year <= 0 ? 'BC' : 'AD');

const typeEffect = (element, text, speed = 10) => {
    return new Promise((resolve) => {
        new Typed(element, {
            strings: [text],
            typeSpeed: speed,
            showCursor: false,
            onComplete: () => resolve(),
        });
    });
};
export { getYearPrefics, typeEffect };
