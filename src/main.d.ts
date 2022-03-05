import * as arr from './array/index';
import * as cur from './currency/index';
import * as str from './string/index';
import * as helpers from './helpers';
export declare const handleType: {
    arr: typeof arr;
    bool: typeof helpers;
    cur: typeof cur;
    str: typeof str;
};
export declare type types = 'arr' | 'str' | 'cur' | 'bool';
export default function Pipe(type?: types): typeof arr | typeof cur | typeof str | typeof helpers;
//# sourceMappingURL=main.d.ts.map