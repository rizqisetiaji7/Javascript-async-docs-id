---
title: Node | JS DOM
---

# Node

Node merupakan base class dari `Document`, `Element`, dan `Attribute`. Yang berarti semua fitur yang dimiliki Node juga dimiliki oleh turunannya. 

Node didalam DOM berbentuk seperti Tree (Pohon), artinya Node memiliki sebuah _**Parent**_ (Node diatasnya), _**Children**_ (Node dibawahnya), _**Sibling**_ (Node disebelahnya, kanan/kiri). 

Berikut salah satu method yang bisa digunakan untuk mendapatkan node:

```js
document.getElementById('id')
```

## Kode: Node

Berikut contoh kode dengan menggunakan list

```html
<ul id="menu">
   <li id="first">First</li>
   <li id="second">Second</li>
   <li id="third">Third</li>
</ul>

<script>
   const menu = document.getElementById('menu')
   console.log(menu)

   const second = document.getElementById('second')
   console.log(second)
</script>
```

Pada contoh diatas, ketika mengambil element dengan id `menu`, maka akan mendapatkan element `<ul>` beserta seluruh isi block element didalamnya. Sedangkan untuk element berikutnya seperti contoh diatas, hanya akan mengambil element `<li>` yang memiliki id `second` saja.

## Node Property

Node memiliki banyak property yang berisi informasi reference ke Node lainnya, seperti node parent, children, sibling, dll.

> :memo: **Baca selengkapnya:** [Node Property](https://developer.mozilla.org/en-US/docs/Web/API/Node#properties)

### Daftar Node Property

| Node Property | Keterangan |
| ------------- | ---------- |
| `Node.parentNode` | Mengambalikan Node Parent (Node pembungkus) dari suatu Node. |
| `Node.childNode` | Mengambalikan semua daftar `NodeList` dari children node tersebut. |
| `Node.firstChild` | Mengembalikan child node dari node pertama. |
| `Node.lastChild` | Mengembalikan child node dari node terakhir. |
| `Node.nextSibling` | Mengembalikan Node selanjutnya (satu level), atau mengembalikan `null` jika tidak terdapat node setelahnya. |
| `Node.previousSibling` | Mengembalikan Node sebelumnya (satu level), atau mengembalikan `null` jika tidak terdapat node sebelumnya. |
| `Node.textContent` | Menampilan atau mengisi value yang berisi text konten. |

Serta masih banyak Node Property lainnya.

### Kode: Node Property

```html
<ul id="menu">
   <li id="first">First</li>
   <li id="second">Second</li>
   <li id="third">Third</li>
</ul>

<script>
   const menu = document.getElementById('menu')
   console.log(menu)
   console.log(menu.childNodes) // [!code ++]

   const second = document.getElementById('second')
   console.log(second.previousSibling) // [!code ++]
   console.log(second.nextSibling) // [!code ++]
</script>
```

Pada `menu.childNodes` akan mengmbalikan `NodeList` yang berisi list semua element yang berada di dalam element `<ul>`.
Kemudia untuk `second.previousSibling` akan menampilkan element sebelumnya (termasuk tab, spasi, atau enter akan dianggap sebagai `text`). Begitu juga untuk `second.nextSibling`. 

Penggunaan `second.previousSibling` dan `second.nextSibling` bisa menggunakan teknik chaining untuk mendapatkan element yang dibutuhkan. Misal jika tidak ingin mendapatkan spasi, tab, atau enter yang dianggap sebagai element `text`, maka untuk mendapatkan element `<li id="first">` atau `<li id="third">` bisa seperti berikut:

```js
const second = document.getElementById('second')
second.previousSibling.previousSibling // [!code ++]
second.nextSibling.nextSibling // [!code ++]
```

## Node Method

Method pada Node digunakan untuk memanipulasi data node didalam node tersebut, contohnya seperti menambah atau menghapus node children.

> :memo: **Baca selengkapnya:** [Node Method](https://developer.mozilla.org/en-US/docs/Web/API/Node#methods)

### Daftar Node Method 

| Node Method | Keterangan |
| ------------- | ---------- |
| `Node.appendChild(childNode)` | Menambahkan child node di akhir node tersebut. |
| `Node.cloneNode()` | Menduplikasi node. |
| `Node.containts()` | Mengembalian nilai `true` atau `false` untuk mengecek terdapat atau tidaknya childNode atau node yang lainnya. |
| `Node.removeChild()` | Menghapus child node pada suatu node element. |
| `Node.replaceChild()` | Mengganti child node pada suatu node element. |

### Kode: Node Method

```html
<ul id="menu">
   <li id="first">First</li>
   <li id="second">Second</li>
   <li id="third">Third</li>
</ul>

<script>
   const menu = document.getElementById('menu')

   // Menghapus Child Node
   menu.removeChild(document.getElementById('first'))
   menu.removeChild(document.getElementById('second'))
   menu.removeChild(document.getElementById('third'))
</script>
```