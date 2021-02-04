import arr from './array/index';
import cur from './currency/index';
import str from './string/index';

const handleType = {
  // 'date': str
  // obj: obj
  arr: arr,
  cur: cur,
  str: str,
};

export type types = 'arr' | 'str' | 'cur';

export default function Pipe(type: types = 'str') {
  return handleType[type]();
}
