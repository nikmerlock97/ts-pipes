import str from './string/index';
import arr from './array/index';

const handleType = {
  str: str,
  // 'date': str
  arr: arr,
};

export type types = 'arr' | 'str';

export default function Pipe(type: types = 'str') {
  return handleType[type]();
}
