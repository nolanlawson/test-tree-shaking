import a from './a';
import b from './b';
import c from './c';

function builder(opts) {
  var obj = {};

  if (opts.a) {
    obj.a = a;
  }
  if (opts.b) {
    obj.b = b;
  }
  if (opts.c) {
    obj.c = c;
  }

  return obj;
}

export default builder;
