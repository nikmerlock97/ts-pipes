export declare type types = 'arr' | 'str';
export default function Pipe(type: types): {
    match: typeof import("./string/match").default;
    repeat: typeof import("./string/repeat").default;
} | {
    flatten: typeof import("./array/flatten").default;
};
//# sourceMappingURL=main.d.ts.map