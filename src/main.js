"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleType = void 0;
var tslib_1 = require("tslib");
var arr = tslib_1.__importStar(require("./array/index"));
var cur = tslib_1.__importStar(require("./currency/index"));
var str = tslib_1.__importStar(require("./string/index"));
var helpers = tslib_1.__importStar(require("./helpers"));
exports.handleType = {
    // 'date': date,
    // obj: obj,
    arr: arr,
    bool: helpers,
    cur: cur,
    str: str,
};
function Pipe(type) {
    if (type === void 0) { type = 'str'; }
    return exports.handleType[type];
}
exports.default = Pipe;
