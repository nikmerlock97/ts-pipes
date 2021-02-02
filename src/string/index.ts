import match from './match';
import repeat from './repeat';

// const STRING_PIPES = { match, repeat };

export default function str() {
  return {
    match: match,
    repeat: repeat,
  };
}
