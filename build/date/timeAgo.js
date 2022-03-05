"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diffYears = void 0;
exports.diffYears = (dateold, datenew) => {
    const ynew = datenew.getFullYear();
    const mnew = datenew.getMonth();
    const dnew = datenew.getDate();
    const yold = dateold.getFullYear();
    const mold = dateold.getMonth();
    const dold = dateold.getDate();
    let diff = ynew - yold;
    if (mold > mnew)
        diff--;
    else {
        if (mold == mnew) {
            if (dold > dnew)
                diff--;
        }
    }
    return diff;
};
//# sourceMappingURL=../../src/dist/date/timeAgo.js.map