---
title: Text Node | JS DOM
---

# Text Node

Didalam document HTML, terkadang membuat text tanpa menggunakan tag. Didalam [DOM](/docs/dom/document-object-model) text tanpa tag bukanlah sebuah [Element](/docs/dom/element), melainkan [Node](/docs/dom/node) atau lebih tepatnya Text Node.

> :memo: **Baca selengkapnya:** [Text Node](https://developer.mozilla.org/en-US/docs/Web/API/Text)

::: info Text turunan dari text Node dalam DOM Tree
| `EventTarget` | <- | `Node` | <- | `CharacterData` | <- | `Text` |
| --- | --- | --- | --- | --- | --- | --- |
:::

## Memahami Text Node

Untuk memahami apa itu Text Node, perhatikan document berikut:

```html
<html class="e"><head><title>The Title</title></head>
<body>This is Text Node.
</body></html>
```

Perhatikan text `This is Text Node.`, text tersebut langsung ditulis tanpa tag seperti paragraph, header, dll. Maka, text yang dimaksud tersebut adalah Text Node.

::: tip :bulb: PENTING DIKETAHUI
Penggunaan Text Node tidak disarankan, karena sulit untuk mengambil data dalam Text Node. Hal ini karena tidak memiliki sebuah id. Diakarenakan tidak memiliki id, maka untuk mengambil datanya perlu melakukan iterasi.
:::

## Kode: Text Node

Untuk mengambil data Text Node bisa menggunakan iterasi

```html
<body>
   Lorem ipsum dolor sit amet.
</body>
```

Pada contoh diatas, untuk mengambil data text didalam body, maka bisa menggunakan cara seperti berikut:

```js
const text = document.body.firstChild
```

Kode diatas akan menelusuri document mulai dari `body` lalu menggunakan property `firstChild`, hal ini kebetulan pada contoh diatas, Text Node berada di poisi paling pertama.

Lalu untuk mendapatkan isi dari Text Node nya bisa menggunakan property `wholeText`, berikut contohnya:

::: code-group
```js [Javascript]
console.log(text.wholeText)
```

```log [Console]
Lorem ipsum dolor sit amet.
```
:::

## Membuat Text Node

Selain mendapatkan data Text Node, di JavaScript juga bisa membuat Text Node jika diperlukan. 

Untuk membuat Text Node bisa menggunakan method `document.createTextNode(string)`, hasilnya berupa Text yang bisa ditambahkan ke node lain.

### Kode: createTextNode()

```html
<body>
   <script>
      const text = document.createTextNode('Ini adalah text node.')
      // document.body.prepend(text)
      document.body.appendChild(text)
   </script>
</body>
```