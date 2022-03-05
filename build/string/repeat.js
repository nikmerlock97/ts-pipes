"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repeat = void 0;
function transform(str, n, separator) {
    return str
        ? n === 0
            ? str
            : str + separator + transform(str, n - 1, separator)
        : str;
}
exports.repeat = (str, n = 1, separator = '') => {
    if (n <= 0) {
        throw new RangeError();
    }
    return n === 1 ? str : transform(str, n - 1, separator);
};
//# sourceMappingURL=../../src/dist/string/repeat.js.map