
const list = new Proxy([], {
  set: (target, key, value) => {
    if (key !== 'length') {
      console.log('set', target, key, value);
    }
    target[key] = value;
    return true;
  },
  get: (target, key) => {
    if (!Number.isNaN(Number(key))) {
      console.log('get', target[key]);
    }
    return target[key];
  }
});

list.push(1);
list[0];
