## Shitty query strings parser

Did you ever meet `URIError: URI malformed`? Nice.

Dedicated to do not fail when `decodeURIComponent` fails (just return undecoded val).   
(and fast)
It uses `try {} catch (e) {}` while decoding tokens.

## Usage

```javascript
var qs = require('shitty-qs');
var q = qs('sid1=t728%F590&sid2=8518224&sid3=LA&sid4=188.19');

// ->

{
	sid1: 't728%F590',
	sid2: '8518224',
	sid3: 'LA',
	sid4: '188.19'
}
```

## Performance

Performance is roughly the same as without try-catch for valid query string

```
➜  node perf-test.js
shitty-qs normalStuff: 683ms
shitty-qs shittyStuff: 1782ms

qs normalStuff: 1244ms
qs shittyStuff: 2455ms

query-string normalStuff: 742ms
query-string shittyStuff: URIError: URI malformed
```

## FAQ

Q: Is it ready for production?   
A: YES!!!

## License
MIT
