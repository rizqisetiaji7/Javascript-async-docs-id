---
title: Membuat Object
---

# Membuat Object

Pada materi JavaScript sebelumnya sudah mempelajari tipe data `Object`, dengan cara membuat variable dengan tipe data object. Namun pembuatan object menggunakan tipe data object, akan membuat object tersebut selalu unik, maksunya setiap object bisa berbeda-beda. Sedangkan dalam OOP, biasanya akan membuat Class terlebuh dahulut sebagai cetakan (Blueprint), sehingga bisa membuat object dengan karakteristik yang sama berkali-kali, tanpa harus mendeklarasikan object berkali-kali seperti saat menggunakan tipe data object. 

## Kode: Tipe Data Object

Berikut contoh kode membuat object menggunakan tipe data object:

```js
const john = {
   firstName: 'John',
   lastName: 'Doe'
}

const evanson = {
   firstName: 'Vince',
   lastName: 'Evanson'
}
```