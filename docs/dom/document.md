---
title: Document | JS DOM
---

# Document

Document merupakan representasi object dari halaman web. Dalam halaman web terdapat satu document yang tidak perlu dibuat secara manual, hal ini karena secara otomatis ada didalam browser. Untuk mengakses Document, bisa dengan menggunakan object document.

> :memo: **Baca selengkapnya:** [Document Object](https://developer.mozilla.org/en-US/docs/Web/API/Document)

## Document Object

Document secara otomatis dibuat dalam browser ketika membuka halaman web, jadi tidak perlu membuat object Document secara manual. Untuk mengaksesnya bisa menggunakan kata kunci `document`.

Contoh melihat isi dari Document object di console:

```js
console.log(document)
```

Jika menjalankan kode diatas, maka akan terlihat seluruh kode html pada halaman web yang diakses.

## Document Property

Document memiliki banyak property. Property pada Document bisa digunakan untuk melihat seluruh data yang terdapat dalam document halaman web.

> :memo: **Baca selengkapnya:** [Document Property](https://developer.mozilla.org/en-US/docs/Web/API/Document#properties)

Berikut beberapa document yang biasa atau sering digunakan:

| Property | Keterangan |
| -------- | ---------- |
| `document.body` | Mengembalikan element `<body>` |
| `document.children` | Mengembalikan semua detail element yang berada didalam suatu Document-nya |
| `document.title` | Mengembalikan element `<title>` |
| `document.head` | Mengembalikan element `<head>` |
| `document.images` | Menampilkan daftar/list gambar dalam bentuk `HTMLCollection` pada document web |
| `document.contentType` | Mengembalikan Content-Type dari MIME header, contohnya halaman web content typenya adalah `text/html` |

Dan masih banyak property lain yang bisa digunakan untuk mendapatkan detail informasi element pada halaman web. 

```js
console.log(document.body)
console.log(document.children)
console.log(document.title)
console.log(document.head)
console.log(document.images)
console.log(document.contentType)
```

## Document Method

Method didalam document digunakan untuk memanipulasi data DOM, misalnya membuat `Node`, `Element`, `Attribute`, atau mengambil dan menyeleksi Node didalam document.

> :memo: **Baca selengkapnya:** [Document Method](https://developer.mozilla.org/en-US/docs/Web/API/Document#methods)

Berikut contoh beberapa document method yang sering digunakan:

| Method | Keterangan |
| -------- | ---------- |
| `document.append()` | Menyisipkan `Node` atau `DOMString` object pada akhir didalam suatu element atau document |
| `document.createElement()` | Membuat element baru dengan mengisi nama tag pada parameternya |
| `document.createAttribute()` | Membuat `Attr` object dan mengembalikan nilainya |
| `document.createEvent()` | Membuat suatu object event. |
| `document.getElementById()` | Menyeleksi dan mengembalikan object berdasarkan identified (id) suatu element |
| `document.getElementByClassName()` | Menyeleksi dan mengembalikan daftar list element berdasarkan nama class |

Serta masih banyak lagi document method yang bisa dimanfaatkan.

Berikut contoh penggunaan document method untuk menyeleksi element berdasarkan id:

::: code-group
```html [index.html]
<p id="text">Test seleksi element.</p>

<script>
   const text = document.getElementById('text') // [!code ++]
   console.log(text)
</script>
```
:::