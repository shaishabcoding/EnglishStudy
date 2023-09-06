const $$ = (selector) => document.querySelectorAll(selector);
const $ = (selector) => $$(selector)[0];
const _$ = (selector) => $(selector).value;
const _ = (selector) => $(selector).innerHTML;

const find = (text) => window.find(text);
