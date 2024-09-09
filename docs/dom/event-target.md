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

```js
EventTarget.addEventListener('click', function(event) {
   // do something here
})
```

Terdapat dua parameter, parameter pertama merupakan tipe dari event, yang ditulis sebagai string case sensitive. Terdapat banyak sekali tipe event, contohnya Mouse event terdapat event seperti `'click'`, `'drag'`, `'scroll'`, dll. Parameter kedua adalah callback, untuk menjalankan sesuatu setelah event dijalankan.