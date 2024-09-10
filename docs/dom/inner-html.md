---
title: InnerHTML | JS DOM
---

# InnerHTML

Jika `innerText` dan `textContent` hanya mengambil text saja, pada `innerHTML` akan mengambil seluruh isi koten termasuk tag HTML sebagai text. Penggunaan `innerHTML` sangat cocok apabila ingin merubah isi dari element menggunakan text yang berisi tag HTML.

## Kode: InnerHTML

::: code-group
```html [HTML]
<p id="content">
   <script>
      console.log('Hello World')
   </script>

   <b>Ini</b> contoh <i>text</i>
</p>

<script>
   const content = document.getElementById('content')
   console.log(content.innerHTML) // [!code ++]
</script>
```

```[Console]
<script>
   console.log('Hello World')
</script>
<b>Ini</b> contoh <i>text</i>
```
:::

## Mengubah element dengan `innerHTML`

Salah satu kemampuan dari `innerHTML` adalah bisa mengubah isi dari children sebuah element hanya dengan menggunakan `string`. Tag yang terdapat didalam `string` secara otomatis akan dirender menjadi child element pada DOM-nya.

### Kode: Mengubah element dengan `InnerHTML`

```html
<div id="insertContent"></div>

<script>
   const insertContent = document.getElementById('insertContent')

   insertContent.innerHTML = `
      <h3>Heading dirender menggunakan innerHTML</h3>
      <p>Text dirender menggunakan innerHTML</p>
   `
</script>
```

Pada contoh diatas, `string` yang terdapat tag HTML, secara otomatis akan dirender oleh innerHTML ke browser sebagai element HTML yang utuh. 

**Berikut ini adalah outputnya:**

---
<h3>Heading dirender menggunakan innerHTML</h3>
<p>Text dirender menggunakan innerHTML</p>

---

Apabila kode diatas diganti menggunakan `innerText` atau `textContent` output pada halaman webnya akan dirender menjadi text beserta tagnya:

::: code-group
```js [JavaScript]
const insertContent = document.getElementById('insertContent')

insertTextContent.textContent = `
   <h3>Heading dirender menggunakan innerText atau textContent</h3>
   <p>Text dirender menggunakan innerText atau textContent</p>
`
```

``` [Web Output]
<h3>Heading dirender menggunakan innerText atau textContent</h3><p>Text dirender menggunakan innerText atau textContent</p>
```
:::