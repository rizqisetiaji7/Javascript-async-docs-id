---
title: NodeList | JS DOM
---

# NodeList

NodeList adalah kumpulan atau `object collection` dari Nodes. Kenapa bukan `ElementList`? hal ini dikarenakan didalam NodeList bisa saja tidak hanya terdapat element saja.

Biasanya NodeList digunakan ketika menyeleksi banyak Node sekaligus, contohnya ketika akan mengambil semua children yang ada pada Node-nya. Disitu dapat melakukan iterasi atau perulangan (loop) menggunakan method yang terdapat pada NodeList.

> :memo: **Baca selengkapnya:** [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)

## NodeList Property

| NodeList Property | Keterangan |
| ----------------- | ---------- |
| `NodeList.length` | Jumlah Node didalam NodeList. |

## NodeList Method

| NodeList Method | Keterangan |
| ----------------- | ---------- |
| `NodeList.item(index)` | Mengembalikan item dari list berdasarkan `index`, atau `null` jika tidak ada `index`. |
| `NodeList.entries()` | Mengembalikan `iterator`, berupa pasangan key/value yang dibungkus dalam collection. _(key berupa number yang dimulai dari 0, dan valuenya adalah nodes)_. |
| `NodeList.forEach(callback)` | Melakukan perulangan pada setiap Node pada suatu NodeList. |
| `NodeList.keys()` | Mengembalikan key yang secara otomatis dimulai dari index 0. |
| `NodeList.values()` | Mengembalikan value dari NodeList. |

## Kode: NodeList

::: code-group
```html [HTML]
<ul id="menu1">
   <li id="first">First</li>
   <li id="second">Second</li>
   <li id="third">Third</li>
</ul>

<ul id="menu2">
   <li>Item 1</li>
   <li>Item 2</li>
   <li>Item 3</li>
</ul>
```

```js [JavaScript]
// Menyeleksi semua element `li` didalam document
const list = document.querySelectorAll('li')
console.log(list) // NodeList

// Menyeleksi Child (element didalamnya) sesuai selector dari parentnya
const menu1 = document.getElementById('menu1').childNodes
console.log(menu1)

const menu2 = document.getElementById('menu2').childNodes
console.log(menu2)
```

``` [Console]
# list
NodeList(6) 
   [0] : li#first
   [1] : li#second
   [2] : li#third
   [3] : li
   [4] : li
   [5] : li

# menu1
NodeList(7) 
   [0] : text
   [1] : li#first
   [2] : text
   [3] : li#second
   [4] : text
   [5] : li#third
   [6] : text

# menu2
NodeList(7) 
   [0] : text
   [1] : li
   [2] : text
   [3] : li
   [4] : text
   [5] : li
   [6] : text
```
:::

Pada contoh kode di atas penggunaan `querySelectorAll()` hanya benar-benar menseleksi element `<li>` saja tanpa `text` elementnya (spasi, tab, atau enter), baik yang menggunakan id maupun tidak. Sedangkan untuk `childNodes` tidak hanya element `<li>` nya saja akan tetapi beserta `text` elementnya.

## Live vs Static NodeList

NodeList memiliki 2 tipe, yaitu _Live_ dan _Static_. _Live_ berarti perubahan pada NodeList-nya akan merubah semua NodeList yang sama, sedangkan static tidak merubah semua NodeList yang sama. 

Saat menggunakan `Element.childNodes`, NodeList tersebut bersifat _Live_. Sedangkan ketika menggunakan `document.querySelectorAll()`, NodeList-nya bersifat _Static_.

### Kode: Live NodeList

::: code-group
```html [Html]
<ul id="menu1">
   <li id="first">First</li>
   <li id="second">Second</li>
   <li id="third">Third</li>
</ul>

<script>
   const menu1 = document.getElementById('menu1')
   const list1 = menu1.childNodes

   menu1.append(document.createElement('li'))
   menu1.append(document.createElement('li'))

   console.log(list1)
</script>
```

``` [Console]
# Live NodeList
NodeList(9) 
   [0] : text
   [1] : li#first
   [2] : text
   [3] : li#second
   [4] : text
   [5] : li#third
   [6] : text
   [7] : li // [!code ++]
   [8] : li // [!code ++]
```
:::

Pada contoh kode diatas, jumlah NodeList pada variable `list1` akan bertambah mengikuti jumlah NodeList pada `menu1` yang di `append` sebanyak 2 kali element `<li>`. 

### Kode: Static NodeList

::: code-group
```html [Html]
<ul id="menu1">
   <li id="first">First</li>
   <li id="second">Second</li>
   <li id="third">Third</li>
</ul>

<ul id="menu2">
   <li>Item 1</li>
   <li>Item 2</li>
   <li>Item 3</li>
</ul>

<script>
   let list = document.querySelectorAll('li')
   const menu = document.getElementById('menu1')

   menu.append(document.createElement('li'))
   menu.append(document.createElement('li'))
   
   console.log('Static NodeList', list)
</script>
```

``` [Console]
# Static NodeList
NodeList(6)
   [0] : li#first
   [1] : li#second
   [2] : li#third
   [3] : li
   [4] : li
   [5] : li
```
:::

Jumlah `list` tidak berubah dengan keadaan awal, padahal pada variable `menu` sudah ditambahkan dua element `<li>` baru, sehingga ketika di cek pada console jumlahnya tetap 6 NodeList bukan 8 NodeList, dengan adanya konsep tersebut maka pada contoh kode diatas disebut sebagai static NodeList.

Namun apabila ingin melihat perubahan dengan bertambahnya element `<li>` yang baru, maka bisa dengan melakukan query ulang, dengan memanfaatkan variabel `list` yang telah di isi oleh selector query sebelumnya, berikut contohnya:

```js
list = document.querySelectorAll('li') // [!code ++]
console.log('Query Ulang', list)
```