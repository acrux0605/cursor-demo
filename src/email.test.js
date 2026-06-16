import { test } from 'node:test';
import assert from 'node:assert/strict';
import { extractEmails, isValidEmail, getValidEmails } from './email.js';

test('extractEmails returns emails from member array', () => {
    const members = [
        { name: 'Alice', email: 'alice@example.com' },
        { name: 'Bob', email: 'bob@test.org' },
    ];
    assert.deepEqual(extractEmails(members), ['alice@example.com', 'bob@test.org']);
});

test('extractEmails returns empty array for non-array input', () => {
    assert.deepEqual(extractEmails(null), []);
    assert.deepEqual(extractEmails(undefined), []);
});

test('isValidEmail validates email format', () => {
    assert.equal(isValidEmail('user@example.com'), true);
    assert.equal(isValidEmail('invalid'), false);
    assert.equal(isValidEmail(''), false);
    assert.equal(isValidEmail(null), false);
});

test('getValidEmails returns only valid emails', () => {
    const members = [
        { name: 'Alice', email: 'alice@example.com' },
        { name: 'Bob', email: 'not-an-email' },
        { name: 'Carol', email: 'carol@test.org' },
    ];
    assert.deepEqual(getValidEmails(members), ['alice@example.com', 'carol@test.org']);
});

test('getValidEmails returns empty array for non-array input', () => {
    assert.deepEqual(getValidEmails('invalid'), []);
});
