---
title: NamedNodeMap | JS DOM
---

# NamedNodeMap

Merupakan kumpulan dari [Attr / Attribute](/docs/dom/attribute). Mirip seperti [NodeList](/docs/dom/nodelist), namun isinya adalah Attr. Karena NamedNodeMap merupakan turunan dari _iterator_ atau _iterable_, maka hal ini bisa melakukan iterasi.

> :memo: **Baca selengkapnya:** [NamedNodeMap](https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap)

## Property

| NamedNodeMap Property | Keterangan |
| --------------------- | ---------- |
| `NamedNodeMap.length` | Mengembalikan jumlah dari object didalam _map_. |

## Method

| NamedNodeMap Method | Keterangan |
| --------------------- | ---------- |
| `NamedNodeMap.getNamedItem()` | Mengembalikan sebuah `Attr`, berdasarkan nama yang diberikan pada parameternya. |
| `NamedNodeMap.setNamedItem()` | Mengganti atau menambah `Attr` kedalam map dengan memberikan namenya. |
| `NamedNodeMap.removeNamedItem()` | Menghapus `Attr` yang teridentifikasi didalam _map_. |
| `NamedNodeMap.item()` | Mengembalikan `Attr` dengan memberikan `index` atau `null` jika index lebih besar atau sama dengan nuber dari node. |

## Kode: NamedNodeMap

Untuk mendapatkan NamedNodeMap ini, kita bisa menggunakan sebuah property yaitu `Element.attributes` milik `Element`. Secara otomatis isinya menjadi NamedNodeMap.

```html
<img id="img" src="https://imageurl.com/img-1.jpg" alt="example img">

<script>
   const image = document.getElementById('img')
   const attributes = image.attributes // [!code ++]
</script>
```

Selain itu, NamedNodeMap juga bisa melakukan iterasi, contohnya menggunakan perulangan `for of`:

::: code-group
```js [JavaScript]
const image = document.getElementById('img')
const attributes = image.attributes

for (const attribute of attributes) { 
   console.log(`${attribute.name} : ${attribute.value}`)
}
```

``` [Console]
id : img
src : https://imageurl.com/img-1.jpg
alt : example img
```
:::