---
title: Create Element | JS DOM
---

# Create Element / Membuat Element

DOM di Javascript, memungkinkan untuk membuat element. Pada materi sebelumnya element HTML sudah di tulis terlebih dahulu menggunakan tag HTML, dan mengambil elementnya menggunakan selector attribute id. 

Namun, kali ini di Javascript bisa membuat element dan juga dapat menambahkan konten beserta attributenya secara langsung menggunakan method `createElement(tag)`

> :memo: **Baca selengkapnya:** [Create Element](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)

**Syntax membuat element:**

```js
const element = document.createElement(tagName[, options])
```

## Kode: Create Element

```html
<div id="content" class="content"></div>

<script>
   const content = document.getElementById('content')

   // Membuat element tag `h1`
   const title = document.createElement('h1') // [!code ++]
   title.textContent = 'JavaScript DOM'
   content.appendChild(title)

   // Membuat element tag `p`
   const description = document.createElement('p') // [!code ++]
   description.textContent = 'Selamat Belajar JavaScript DOM'
   content.appendChild(description)
</script>
```

Pada contoh kode di atas, element `<div id="content">` yang sebelumnya kosong, sekarang sudah terdapat dua element yang disisipkan pada child node nya, yaitu element title `<h1>` dan description `<p>`.