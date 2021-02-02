"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var index_1 = tslib_1.__importDefault(require("./string/index"));
var index_2 = tslib_1.__importDefault(require("./array/index"));
var handleType = {
    str: index_1.default,
    // 'date': str
    arr: index_2.default,
};
function Pipe(type) {
    return handleType[type]();
}
exports.default = Pipe;
