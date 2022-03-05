"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEqual = void 0;
exports.isEqual = function (a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every(function (val, index) { return val === b[index]; });
};
