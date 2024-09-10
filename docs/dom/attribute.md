---
title: Attribute | JS DOM
---

# Attr / Attribute

Attr atau Attribute merupakan representasi attribute sebuah element, atau singkatnya terdiri dari pasangan _key-value_.
_Key_ merupakan nama dari attributenya, sedangkan _Value_ merupakan value atau isi dari attribute.

> :memo: **Baca selengkapnya:** [Attr/ Attribute](https://developer.mozilla.org/en-US/docs/Web/API/Attr)

## Attribute Property

| Property | Keterangan |
| -------- | ---------- |
| `name` <Badge type="tip" text="Readonly" /> | Nama suatu attribute |
| `value` | Value suatu attribute |


## Kode: Attribute

Sebagai contoh pada element `<img>` terdapat beberapa attribute yang sering atau wajib digunakan, diantaranya `src`, `alt`, `width`, `height`, dll. berikut kodenya:

```html
<img src="https://imageurl.com/img-1.jpg" id="img" alt="example img" width="200">
```

Untuk mendapatkan attribute berupa _key-value_ nya, bisa menggunakan `Element.getAttributeNode()`, berikut contoh untuk mendapatkan name dan value dari attribute `src`:

::: code-group
```js [JavaScript]
const image = document.getElementById('img')
const attr = image.getAttributeNode('src') // [!code ++]

console.log(attr.name)
console.log(attr.value)
```

``` [Console]
src
https://imageurl.com/img-1.jpg
```
:::


## Attribute Value

Terkadang kebanyakan programmer hanya ingin langsung mendapatkan value Attr-nya saja. Jarang sekali menggunakan object Attr, hal ini bisa dilakukan menggunakan method `Element.getAttribute('attr_name')`.

### Kode: Attribute Value

Berikut contoh untuk mendapatkan value dari attribute `alt`:

```js
const image = document.getElementById('img')
const alt = image.getAttribute('alt') // [!code ++]

console.log(alt) // Mengambil valuenya saja
```

## Membuat Attribute

Di Javascript memungkinkan untuk bisa membuat attribute secara manual mengunakan `document.createAttribute(name)`. Lalu untuk menambahkannya ke Element, menggunakan `element.setAttributeNode(attr)`.

Cara lain untuk membuat attribute dengan lebih mudah bisa menggunakan `Element.setAttribute(name, value)`.

### Kode: Membuat Attribute

Berikut contoh menambahkan atau membuat attribute baru pada element `<img>`:

```html
<img id="img">

<script>
   const image = document.getElementById('img')

   // Membuat attribute src
   const src = document.createAttribute('src') // [!code ++]
   src.value = 'https://imageurl.com/img-1.jpg' // [!code ++]

   // Menerapkan attribute src ke element image
   image.setAttributeNode(src) // [!code ++]
</script>
```

Kebanyakan programmer jarang menggunakan cara diatas. Cara lain untuk membuat attribute menjadi lebih mudah, bisa menggunakan `Element.setAttribute(name, value)`, berikut contohnya:

```html
<img id="img">

<script>
   const image = document.getElementById('img')
   image.setAttribute('src', 'https://imageurl.com/img-1.jpg') // [!code ++]
</script>
```