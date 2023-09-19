const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 0;

setTimeout(() => console.log('Zamanlayıcı 1 bitti'), 0);
setImmediate(() => console.log('Immdaieate 1 bitti'));

fs.readFile('test.txt', (err, data) => {
  console.log('I/O > Input Output bitti', data);
  console.log('--------------------');

  setTimeout(() => console.log('Zamanlayıcı 2 bitti'), 0);
  setTimeout(() => console.log('Zamanlayıcı 3 bitti'), 3000);
  setImmediate(() => console.log('Immdaieate 2 bitti'));

  process.nextTick(() => console.log('process.nextTick'));

  crypto.pbkdf2('password', 'salt', 10000, 1024, 'sha512', () => {
    console.log(Date.now() - start, 'Şifre');
  });
  crypto.pbkdf2('password', 'salt', 10000, 1024, 'sha512', () => {
    console.log(Date.now() - start, 'Şifre');
  });
  crypto.pbkdf2('password', 'salt', 10000, 1024, 'sha512', () => {
    console.log(Date.now() - start, 'Şifre');
  });
  crypto.pbkdf2('password', 'salt', 10000, 1024, 'sha512', () => {
    console.log(Date.now() - start, 'Şifre');
  });
  crypto.pbkdf2('password', 'salt', 10000, 1024, 'sha512', () => {
    console.log(Date.now() - start, 'Şifre');
  });
});

console.log("Üst Level 'TOP LEVEL' Koddan Merhaba");
