
const p = Proxy.revocable({}, {
  set: (target, key, value) => {
    console.log('set');
  }
});

const proxy =  p.proxy;

proxy.i = 1;

p.revoke();

try {
  proxy.i = 2;
} catch (error) {
  console.log('error after revoke')
}
