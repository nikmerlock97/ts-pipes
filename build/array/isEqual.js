"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEqual = void 0;
exports.isEqual = (a, b) => {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
};
//# sourceMappingURL=../../src/dist/array/isEqual.js.map