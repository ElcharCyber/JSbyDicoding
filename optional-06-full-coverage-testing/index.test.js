import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('sum mengembalikan hasil penjumlahan yang benar ketika kedua argumen adalah bilangan positif', () => {
  assert.strictEqual(sum(1, 2), 3);
  assert.strictEqual(sum(10, 25), 35);
});

test('sum mengembalikan hasil yang benar ketika melibatkan angka 0', () => {
  assert.strictEqual(sum(0, 0), 0);
  assert.strictEqual(sum(0, 5), 5);
  assert.strictEqual(sum(5, 0), 5);
});

test('sum mengembalikan hasil yang benar untuk bilangan desimal positif', () => {
  assert.strictEqual(sum(1.5, 2.5), 4);
  assert.strictEqual(sum(0.1, 0.2), 0.30000000000000004);
});

test('sum mengembalikan 0 jika argumen pertama adalah bilangan negatif', () => {
  assert.strictEqual(sum(-1, 5), 0);
  assert.strictEqual(sum(-10, 0), 0);
});

test('sum mengembalikan 0 jika argumen kedua adalah bilangan negatif', () => {
  assert.strictEqual(sum(5, -1), 0);
  assert.strictEqual(sum(0, -10), 0);
});

test('sum mengembalikan 0 jika kedua argumen adalah bilangan negatif', () => {
  assert.strictEqual(sum(-1, -1), 0);
  assert.strictEqual(sum(-5, -10), 0);
});

test('sum mengembalikan 0 jika argumen pertama bukan berupa tipe data number', () => {
  assert.strictEqual(sum('5', 5), 0);
  assert.strictEqual(sum(null, 5), 0);
  assert.strictEqual(sum(undefined, 5), 0);
  assert.strictEqual(sum(true, 5), 0);
  assert.strictEqual(sum(false, 5), 0);
  assert.strictEqual(sum({}, 5), 0);
  assert.strictEqual(sum([], 5), 0);
  assert.strictEqual(sum(Symbol('test'), 5), 0);
  assert.strictEqual(sum(() => {}, 5), 0);
});

test('sum mengembalikan 0 jika argumen kedua bukan berupa tipe data number', () => {
  assert.strictEqual(sum(5, '5'), 0);
  assert.strictEqual(sum(5, null), 0);
  assert.strictEqual(sum(5, undefined), 0);
  assert.strictEqual(sum(5, true), 0);
  assert.strictEqual(sum(5, false), 0);
  assert.strictEqual(sum(5, {}), 0);
  assert.strictEqual(sum(5, []), 0);
  assert.strictEqual(sum(5, Symbol('test')), 0);
  assert.strictEqual(sum(5, () => {}), 0);
});

test('sum mengembalikan 0 jika kedua argumen bukan berupa tipe data number', () => {
  assert.strictEqual(sum('5', '5'), 0);
  assert.strictEqual(sum(null, null), 0);
  assert.strictEqual(sum(undefined, undefined), 0);
  assert.strictEqual(sum(true, false), 0);
  assert.strictEqual(sum({}, {}), 0);
  assert.strictEqual(sum([], []), 0);
  assert.strictEqual(sum(), 0);
});
