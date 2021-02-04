"use strict";
// import { isString } from './../helpers';
Object.defineProperty(exports, "__esModule", { value: true });
function commas(num, currency, cents) {
    var numString = num.toString() || '';
    var numCharacters = [numString];
    var withCommas = numCharacters.reduce(function (prev, cur, i) {
        if (i === 0) {
            return prev + cur;
        }
        else {
            return i % 3 === numString.length % 3 ? prev + ',' + cur : prev + cur;
        }
    }, '');
    return withCommas;
}
exports.default = commas;
