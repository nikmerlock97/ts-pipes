"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flatten = void 0;
function transform(input, shallow) {
    if (shallow === void 0) { shallow = false; }
    if (!Array.isArray(input)) {
        return input;
    }
    return shallow ? [].concat.apply([], input) : exports.flatten(input);
}
exports.flatten = function (array) {
    return array.reduce(function (arr, elm) {
        if (Array.isArray(elm)) {
            return arr.concat(exports.flatten(elm));
        }
        return arr.concat(elm);
    }, []);
};
