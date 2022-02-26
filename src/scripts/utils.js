export const domEl = selector => document.querySelector(selector);

export const addEvt = (el, type, cb, capture = false) => el.addEventListener(type, cb, capture);

export const addClass = (elem, classN) => elem.classList.add(classN);

export const toggleClass = (elem, classN, cond) => elem.classList.toggle(classN, cond);

export const hasClass = (elem, classN) => elem.classList.contains(classN);