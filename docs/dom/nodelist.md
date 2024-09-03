---
title: NodeList | JS DOM
---

# NodeList

NodeList adalah kumpulan atau object collection dari Nodes. Kenapa bukan `ElementList`? hal ini dikarenakan didalam NodeList bisa saja tidak hanya terdapat element saja.

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

```js
// Menyeleksi semua element `li
const list = document.querySelectorAll('li')
// NodeList
console.log(list) 
```