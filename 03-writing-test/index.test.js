import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('fungsi sum harus mengembalikan hasil penjumlahan yang benar untuk angka positif', () => {
  assert.strictEqual(sum(1, 2), 3);
  assert.strictEqual(sum(10, 20), 30);
});

test('fungsi sum harus mengembalikan hasil penjumlahan yang benar untuk angka negatif', () => {
  assert.strictEqual(sum(-1, -2), -3);
  assert.strictEqual(sum(-5, 10), 5);
});

test('fungsi sum harus mengembalikan hasil penjumlahan yang benar ketika ditambahkan dengan 0', () => {
  assert.strictEqual(sum(0, 0), 0);
  assert.strictEqual(sum(0, 5), 5);
  assert.strictEqual(sum(5, 0), 5);
});

test('fungsi sum harus mengembalikan hasil penjumlahan yang benar untuk angka desimal', () => {
  assert.strictEqual(sum(1.5, 2.5), 4);
});
