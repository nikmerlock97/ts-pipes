"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.match = void 0;
var helpers_1 = require("./../helpers");
function transform(text, pattern, flags) {
    if (!helpers_1.isString(text)) {
        return text;
    }
    return text.match(new RegExp(pattern, flags));
}
exports.match = function (text, pattern, flags) {
    return !!flags ? transform(text, pattern, flags) : transform(text, pattern);
};
