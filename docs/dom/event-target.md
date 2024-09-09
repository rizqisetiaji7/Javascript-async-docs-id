---
title: Event Target | JS DOM
---

# Event Target

Event Target merupakan sebuah kontrak yang bisa di implementasikan pada [Element](/docs/dom/element), [Document](/docs/dom/document), dan Window Object. Event target juga merupakan parent class dari [Node](/docs/dom/node), yang artinya semua Node memiliki kemampuan dari Event Target.

> :memo: **Baca selengkapnya:** [Event Target](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)

## Method

Pada Event Target terdapat method yang banyak atau sering digunakan seperti:

| Event Target Method | Keterangan |
| ------------------- | ---------- |
| `EventTarget.addEventListener()` | Mendaftarkan event handler baru berdasarkan tipe event yang spesifik pada Event Target. |
| `EventTarget.removeEventListener()` | Menghapus kejadian atau event pada Event Target. |

## Syntax

Pada Event Target, bisa dengan menggunakan method `addEventListener(type, callback)` untuk menambahkan event handler, berikut syntaxnya:

```js
EventTarget.addEventListener('click', function(event) {
   // Lakukan sesuatu...
})
```

Terdapat dua parameter, parameter pertama merupakan tipe event atau Event Type, yang ditulis sebagai string case sensitive. Terdapat banyak sekali tipe event, contohnya Mouse Event seperti `'click'`, `'drag'`, `'scroll'`, dll. Parameter kedua adalah callback, untuk menjalankan sesuatu atau proses logika setelah event dijalankan.

## Kode: Event Listener

Sebagai contoh penggunaan Event Type `'click'`, yang berfungsi ketika mengklik sesuatu di dalam DOM:

```html
<input type="button" id="clickMe" value="Click Me">

<script>
   const button = document.getElementById('clickMe')

   button.addEventListener('click', function() { // [!code ++]
      button.setAttribute('You already click me!') // [!code ++]
   }) // [!code ++]
</script>
```

Pada contoh diatas Event Listener ditambahkan ketika user melakukan klik pada tombol, lalu event akan menjalankan callback yang mengubah value dari tombol tersebut.