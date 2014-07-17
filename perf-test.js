var shitty = require('./');
var queryString = require('query-string');
var qs = require('qs');

var shittyStuff = 'sid1=t728%F590&sid2=8518224&sid3=RU&sid4=188.19.169.249.';
var normalStuff = 'sid1=aaa&sid2=8518224&sid3=RU&sid4=188.19.169.249.';
var bigNumber = 100000;

console.time('shitty-qs shittyStuff');
for (var i = 0; i < bigNumber; ++i) {
	shitty(shittyStuff);
}
console.timeEnd('shitty-qs shittyStuff');

console.time('shitty-qs normalStuff');
for (var i = 0; i < bigNumber; ++i) {
	shitty(normalStuff);
}
console.timeEnd('shitty-qs normalStuff');

console.log();

console.time('qs normalStuff');
for (var i = 0; i < bigNumber; ++i) {
	qs.parse(normalStuff);
}
console.timeEnd('qs normalStuff');

console.time('qs shittyStuff');
for (var i = 0; i < bigNumber; ++i) {
	qs.parse(shittyStuff);
}
console.timeEnd('qs shittyStuff');

console.log();

console.time('query-string normalStuff');
for (var i = 0; i < bigNumber; ++i) {
	queryString.parse(normalStuff);
}
console.timeEnd('query-string normalStuff');

console.time('query-string shittyStuff');
for (var i = 0; i < bigNumber; ++i) {
	queryString.parse(shittyStuff);
}
console.timeEnd('query-string shittyStuff');
