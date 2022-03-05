"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commas = void 0;
exports.commas = function (num, currency, cents) {
    var numString = num.toString() || '';
    var numCharacters = numString.split('');
    var withCommas = numCharacters.reduce(function (prev, cur, i) {
        if (i === 0) {
            return prev + cur;
        }
        else {
            return i % 3 === numString.length % 3 ? prev + ',' + cur : prev + cur;
        }
    }, '');
    return withCommas;
};
