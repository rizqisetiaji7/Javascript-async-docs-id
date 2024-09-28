---
title: Prototype
---

# Prototype

JavaScript sebelumnya dikenal dengan pemrograman berbasis Prototype. Konsep Prototype di JavaScript memang sedikit membingungkan tertutama ketika baru mempelajari tentang konsep tersebut. Akan tetapi pada meteri kali ini akan dibahas seputar detail konsep Prototype.

## Prototype Inheritance

Saat membuat object dari Constructor function, object tersebut disebut instance, semua property (baik itu value, atau method) akan berada di dalam instance objectnya.

Setiap membuat constructor function, secara otomatis akan dibuatkan prototype-nya, misalnya ketika membuat constructor function `Person`, makan terdapat `Person.prototype`.

Saat membuat sebuah object instance, secara otomatis object tersebut adalah turunan dari `Constructor.prototype` nya. Untuk mengakses prototype milik sebuah instance, bisa dengan menggunakan `__proto__`.