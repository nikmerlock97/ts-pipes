const $$ = require('../build');

const result = $$.$Array.flatten(['test', ['test1', 'test2']])

console.log(result)

// "use strict";
// var __read = (this && this.__read) || function (o, n) {
//     var m = typeof Symbol === "function" && o[Symbol.iterator];
//     if (!m) return o;
//     var i = m.call(o), r, ar = [], e;
//     try {
//         while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
//     }
//     catch (error) { e = { error: error }; }
//     finally {
//         try {
//             if (r && !r.done && (m = i["return"])) m.call(i);
//         }
//         finally { if (e) throw e.error; }
//     }
//     return ar;
// };
// var __spread = (this && this.__spread) || function () {
//     for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
//     return ar;
// };
// var assert = require('assert');
// var howLongTillLunch = require('..');
// var MockDate = /** @class */ (function () {
//     function MockDate() {
//         this.date = 0;
//         this.hours = 0;
//         this.minutes = 0;
//         this.seconds = 0;
//         this.milliseconds = 0;
//     }
//     MockDate.prototype.getDate = function () { return this.date; };
//     MockDate.prototype.setDate = function (date) { this.date = date; };
//     MockDate.prototype.setHours = function (h) { this.hours = h; };
//     MockDate.prototype.setMinutes = function (m) { this.minutes = m; };
//     MockDate.prototype.setSeconds = function (s) { this.seconds = s; };
//     MockDate.prototype.setMilliseconds = function (ms) { this.milliseconds = ms; };
//     MockDate.prototype.getTime = function () { return this.valueOf(); };
//     MockDate.prototype.valueOf = function () {
//         return (this.milliseconds +
//             this.seconds * 1e3 +
//             this.minutes * 1e3 * 60 +
//             this.hours * 1e3 * 60 * 60 +
//             this.date * 1e3 * 60 * 60 * 24);
//     };
//     MockDate.now = function () { return now.valueOf(); };
//     return MockDate;
// }());
// var now = new MockDate();
// global.Date = MockDate;
// function test(hours, minutes, seconds, expected) {
//     now.setHours(hours);
//     now.setMinutes(minutes);
//     now.setSeconds(seconds);
//     assert.equal(howLongTillLunch.apply(void 0, __spread(lunchtime)), expected);
//     console.log("\u001B[32m\u2713\u001B[39m " + expected);
// }
// var lunchtime = [12, 30];
// test(11, 30, 0, '1 hour');
// test(10, 30, 0, '2 hours');
// test(12, 25, 0, '5 minutes');
// test(12, 29, 15, '45 seconds');
// test(13, 30, 0, '23 hours');
// // some of us like an early lunch
// lunchtime = [11, 0];
// test(10, 30, 0, '30 minutes');
