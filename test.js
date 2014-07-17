// Stolen from https://github.com/sindresorhus/query-string/blob/master/test.js
'use strict';
var assert = require('assert');
var qs = require('./');

describe('parse', function () {
	it('should handle query strings starting with a `?`', function () {
		assert.deepEqual(qs('?foo=bar'), {foo: 'bar'});
	});

	it('should parse a qseter', function () {
		assert.deepEqual(qs('foo=bar'), {foo: 'bar'});
	});

	it('should parse multiple qseters', function () {
		assert.deepEqual(qs('foo=bar&key=val'), {foo: 'bar', key: 'val'});
	});

	it('should parse qseters without a value', function () {
		assert.deepEqual(qs('foo'), {foo: null});
		assert.deepEqual(qs('foo&key'), {foo: null, key: null});
		assert.deepEqual(qs('foo=bar&key'), {foo: 'bar', key: null});
	});

	it('should return empty object if no qss can be found', function () {
		assert.deepEqual(qs('?'), {});
		assert.deepEqual(qs(' '), {});
	});

	it('should handle `+` correctly', function () {
		assert.deepEqual(qs('foo+faz=bar+baz++'), {'foo faz': 'bar baz  '});
	});

	it('should handle multiple of the same key', function () {
		assert.deepEqual(qs('foo=bar&foo=baz'), {foo: ['bar', 'baz']});
	});
});
