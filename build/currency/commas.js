"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commas = void 0;
exports.commas = (num, currency, cents) => {
    const numString = num.toString() || '';
    const numCharacters = numString.split('');
    const withCommas = numCharacters.reduce((prev, cur, i) => {
        if (i === 0) {
            return prev + cur;
        }
        else {
            return i % 3 === numString.length % 3 ? prev + ',' + cur : prev + cur;
        }
    }, '');
    return withCommas;
};
//# sourceMappingURL=../../src/dist/currency/commas.js.map