const test = require('node:test');
const assert = require('node:assert/strict');
const { add } = require('./app');

test('adds 2 and 3 to give 5', () => {
    assert.equal(add(2, 3), 5);
});

test('adds 5 and -2 to give 3', () => {
    assert.equal(add(5, -2), 3);
});
