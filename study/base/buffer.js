var buf = new Buffer(256);
var len = buf.write("hello world");
console.log(len);

var buf2 = new Buffer(26);
for (var i = 0; i < 26; i++) {
	buf2[i] = i+97;
}
console.log(buf2.toString('ascii'));
console.log(buf2.toString('ascii',0,5));
console.log(buf2.toString('utf8',0,6));
console.log(buf2.toString(undefined,0,7));

var buf3 = new Buffer('hello world2');
var json = buf3.toJSON(buf3);
console.log(json);

var buf4_1 = new Buffer("cyc");
var buf4_2 = new Buffer("chy");
var buf4_3 = Buffer.concat([buf4_1,buf4_2]);
console.log(buf4_3.toString());

var buf5_1 = new Buffer("abc");
var buf5_2 = new Buffer("abcdefghigklmnopqrstuvwxyz");
var result = buf5_1.compare(buf5_2);
console.log(result);

var buf6_1 = new Buffer("cyc");
var buf6_2 = new Buffer(3);
buf6_1.copy(buf6_2);
console.log(buf6_2.toString());

var buf7_1 = new Buffer("hello world!");
var buf7_2 = buf7_1.slice(0,5);
console.log(buf7_2.toString());
