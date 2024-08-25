---
title: 'Introduction Js Async'
---

# Pengenalan Asynchronous

Sebelum masuk ke materi `Asynchronous`, maka tidak ada salahnya untuk mengetahui proses `Synchronous` terlebih dahulu.

## Apa itu Synchronous?

Dalam program JavaScript, secara default akan dieksekusi secara baris per-baris. Artinya proses selanjutnya hanya akan dieksekusi jika proses sebelumnya telah selesai dikerjakan. Proses pada Synchronous merupakan proses yang juga disebut Blocking, karena harus menunggu tiap proses selesai, baru proses selanjutnya akan dilakukan.

## Apa itu Asynchronous?

Pada proses Asynchronous, proses di JavaScript tidak akan menunggu proses tersebut hingga selesai, melainkan JavaScript akan melanjutkan ke proses atau ke baris selanjutnya, tanpa harus menunggu proses Asynchronous selesai dikerjakan. Proses pada Asynchronous disebut Non-Blocking.

## Apa itu Callback?

Callback merupakan mekanisme pemanggilan kembali kode yang ada didalam program dari proses Async. Callback biasanya dibuat dalam bentuk function as parameter, dan parameter function tersebut akan dieksekusi saat proses async telah selesai.

## Async Method

Terdapat banyak Async method di JavaScript, berikut dua contoh Async method bawaan dari JavaScript:

+ `setTimeout` : Digunakan untuk menjalankan proses Async sekali dalam waktu tertentu.

``` js
// Syntax
setTimeout(callback, timeMilis)
```

+ `setInterval` : Digunakan untuk menjalankan proses Async secara periodik dalam waktu tertentu.

``` js
// Syntax
setInterval(callback, timeMilis)
```