test-tree-shaking
=======

Just messing around with Rollup and tree-shaking.

Output of `rollup index.js`:

```js
function a() {
  console.log('a');
}

function b() {
  console.log('b');
}

function c() {
  console.log('c');
}

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

var result = builder({
  a: true,
  b: true
});
```