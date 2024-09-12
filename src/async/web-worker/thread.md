---
title: Thread di JavaScript
---

# Thread di JavaScript

JavaScript adalah Single Thread (Single Process) atau hanya ada satu proses, yang artinya walaupun proses yang dibuat adalah menggunakan [Async](/docs/async-await/async), tapi proses tetap dijalankan dalam Threan (Proses) yang sama berkali-kali.

Kemampuan satu Thread dalam mengelola beberapa pekerjaan yang lebih dari satu, dinamakan `Concurrent`. Atau bisa menghandle beberapa pekerjaan dalam single Thread yang sama.

Kemampuan untuk menjalankan beberapa Thread untuk mengelola satu atau lebih pekerjaan, dinamakan `Pararel`. Dan untuk menjalankan proses secara Pararel, kita bisa menggunakan Web Worker.

Jika kode terasa sangat lambat dengan menggunakan default Thread secara Concurrent, otomatis browser tidak akan mampu untuk load data (ngeblank). Namun hal tersebut bisa diatasi menggunakan Web Worker agar proses bisa berjalan secara Pararel.