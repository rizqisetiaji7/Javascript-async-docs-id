---
title: InnerText | JS DOM
---

## InnerText

## TextContent & InnerText

Selain `textContent`, terdapat property lain yang disebut `innerText` untuk mendapatkan isi text dari suatu element. Keduannya memiliki tujuan yang sama yaitu mengambil isi text content dari suatu element.

Perbedaan antara `innerText` dan `textContent` ada pada konten yang dikembalikan. 

- `textContent` akan mengambil semua isi text content dari sebuah element. 
- `innerText` bisa lebih spesifik, hanya pada bagian text saja yang akan diambil.

## Kode: TextContent & InnerText

```html
<p id="content">
   <script>
      console.log('Hello World')
   </script>

   <b>Ini</b> contoh <i>text</i>
</p>

<script>
   const content = document.getElementById('content')

   console.log(content.textContent) // [!code ++]
   console.log(content.innerText) // [!code ++]
</script>
```

### Output: TextContent

Tag `<script>` didalam element content tidak akan diambil kecuali isinya, beserta text lainnya termasuk `spasi`, `enter`, dan `tab`.

```
   console.log('Hello World')
Ini contoh text
```

### Output: InnerText

Tag `<script>` beserta isinya tidak akan diambil, kecuali hanya text saja didalam element content.

```
Ini contoh text
```