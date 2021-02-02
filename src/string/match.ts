import { isString } from './../helpers';

function transform<T>(
  text: string | T | any,
  pattern: string,
  flags?: string
): RegExpMatchArray | null | T {
  if (!isString(text)) {
    return text;
  }

  return text.match(new RegExp(pattern, flags));
}

export default function match(text: any, pattern: string, flags?: string): any {
  return !!flags ? transform(text, pattern, flags) : transform(text, pattern);
}
