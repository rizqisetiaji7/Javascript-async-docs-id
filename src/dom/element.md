---
title: ELement | JS DOM
---

# Element

Element merupakan turunan dari [Node](/docs/dom/node) yang berbentuk element, sebagai contoh element HTML, seperti `<html>`, `<head>`, `<body>`, `<div>`, `<table>`, dan lain-lain.

> :memo: **Baca selengkapnya:** [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)

::: info Element turunan dari Node

| `EventTarget` | <- | `Node` | <- | `Element` |
| --- | --- | --- | --- | --- |
:::

## Kode: Element

Berikut contoh kode penggunaan Element dalam menyeleksi element html:

```html
<h1 id="title"></h1>
<p id="description"></p>

<script>
   const title = document.getElementById('title') // [!code ++]
   title.textContent = 'Belajar JavaScript DOM'

   const description = document.getElementById('description') // [!code ++]
   description.textContent = 'Selamat Belajar JavaScript DOM'
</script>
```

## Element Property

Terdapat banyak property pada suatu element. Hal ini dikarenakan Element merupakan turunan dari Node, sehingga semua property pada Node pun bisa digunakan pada element.

> :memo: **Baca selengkapnya:** [Element Property](https://developer.mozilla.org/en-US/docs/Web/API/Element#properties)

### Daftar Element Property

| Element Property | Keterangan |
| ---------------- | ---------- |
| `Element.id` | Mengembalikan `DOMString` pada id yang terdapat dari suatu element. |
| `Element.attributes` | Mengembalikan object `NamedNodeMap` berupa daftar attribute yang terdapat pada element html. |
| `Element.children` | Mengembalikan daftar child elements berupa `HTMLCollection` dari suatu element. |
| `Element.classList` | Mengembalikan daftar nama class berupa `DOMTokenList` dari suatu element. |
| `Element.className` | Mengembalikan `string` daftar nama class pada suatu element. |
| `Element.innerHTML` | Merupakan `DOMString` yang merepresentasikan konten markup HTML element. |

### Kode: Element Property

```html
<div id="content" class="content">
   <h1 id="title" class="title">Ini Judul</h1>
   <p id="description" class="description">Ini detail deskripsi</p>
</div>

<script>
   const content = document.getElementById('content')
   console.log(content.id) // Mendapatkan id
   console.log(content.attributes) // Mendapatkan daftar attribute
   console.log(content.children) // Mendapatkan semua element child
   console.log(content.classList) // Mendapatkan daftar class `DOMTokenList`
   console.log(content.className) // Mendapatakan string daftar nama class
   console.log(content.tagName) // Mendapatkan nama tag element
</script>
```

## Element Method

Method pada element memungkinkan dapat memanipulasi data pada element tertentu. Semua method yang ada pada Node juga bisa digunakan pada element.

> :memo: **Baca selengkapnya:** [Element Method](https://developer.mozilla.org/en-US/docs/Web/API/Element#methods)

### Daftar Element Method

| Element Method | Keterangan |
| ---------------- | ---------- |
| `Element.remove()` | Digunakan untuk menghapus element. |
| `Element.after('DOMString/Node')` | Memasukkan kumpulan `Node` atau `DOMString` object didalam children pada daftar suatu parent element, hanya _SETELAH_ element-nya. |
| `Element.before('DOMString/Node')` | Memasukkan kumpulan `Node` atau `DOMString` object didalam children pada daftar suatu parent element, hanya _SEBELUM_ element-nya. |
| `Element.addEventListener()` | Menambahkan event handle dengan type event tertentu secara spesific pada suatu element. Contoh event seperti `'click'`, `'submit'`, `'load'`, dll. |
| `Element.append('Node/DOMString')` | Menambahkan element berupa `Node` atau `DOMString` setelah element terakhir pada child element. |
| `Element.getAttribute('attributeName')` | Mengambil nilai atau value dari attribute suatu element. |
| `Element.getAttributeNames()` | Mengembalikan `array` berupa daftar attribute yang terdapat pada suatu element. |
| `Element.setAttribute('attrName', 'attrValue')` | Menambahkan attribute pada suatu element dengan mendaftarkan nama attribute dan valuenya. |
| `Element.hasAttribute('attrName')` | Mengembalikan boolean `true` atau `false` yang mengindikasikan dan mengecek jika suatu element memiliki atau tidaknya attribute tertentu. |

Serta masih terdapat banyak Element Method lainnya yang bisa digunakan untuk memanipulasi Element.

### Kode: Element Method

```html
<div id="content" class="content">
   <h1 id="title" class="title">Ini Judul</h1>
   <p id="description" class="description">Ini detail deskripsi</p>
</div>

<script>
   const title = document.getElementById('title')
   const description = document.getElementById('description')

   // Element Method remove()
   title.remove() // [!code ++]
   description.remove() // [!code ++]
</script>
```