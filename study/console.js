var test = {
    a : '1',
    b : 2
}

console.warn('%s',test.a);
console.error('%d',test.a);
console.dir(test);

console.time('time1');
var t = 0;
for (let i = 0; i < 10000; i++) {
    t++;
}
console.timeEnd('time1');

console.time('time2');
var t = 0;
for (let i = 0; i < 10000; i++) {
    t++;
}
console.timeEnd('time2');

console.trace(t);
