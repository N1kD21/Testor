'use strict';

const fs = require('fs');

const buffer = fs.readFileSync('1-readFileSync.js', 'utf8');
const src = buffer.toString(); // toString() - это метод перевода екземпляра касса буфер в строчку

console.log('Buffer length: ' + buffer.length); // Выведет текст + длинну строки.  buffer.length - определяет длинну строки
console.log(buffer); // Выводит в консоль buffer
console.log(src);  // Выводит в консоль идентификатор src

console.lines = src.split('\n').filter(line => !!line);
console.dir(lines);
