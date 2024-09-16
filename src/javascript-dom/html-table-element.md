---
title: HTML Table Element | JS DOM
---

# HTML Table Element

Salah satu HTML Element yang kompleks selain Form adalah Table. HTML Table Element memiliki banyak property, method, dan event yang khusus untuk memanipulasi Table Element. HTML Table Element juga merupakan turunan dari `HTMLElement`.

> :memo: **Baca selengkapnya:** [HTML Table Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement)

## Property

Berikut beberapa property di HTML Table Element:

| Property | Deskripsi |
| -------- | --------- |
| `HTMLTableElement.caption` | Representasi dari `HTMLTableCaptionElement` untuk tag `<caption>` pertama dari child suatu element table. Jika tidak ada maka akan di set `null`. |
| `HTMLTableElement.tHead` | Representasi dari `HTMLTableSectionElement` untuk tag `<thead>` pertama dari child suatu element table. Jika tidak ada maka akan di set `null`. |
| `HTMLTableElement.tFoot` | Representasi dari `HTMLTableSectionElement` untuk tag `<tfoot>` pertama dari child suatu element table. Jika tidak ada maka akan di set `null`.  |
| `HTMLTableElement.rows` | Representasi dari `HTMLCollection`, yang mengembalikan live `HTMLCollection` termasuk semua baris (rows) dari element. Itu adalah semua tag `<tr>` yang merupakan child dari element, atau child dari salah satu tag `<thead>`, `<tbody>`, dan `<tfoot>` children. |
| `HTMLTableElement.tBodies` | Representasi dari `HTMLCollection` yang mengembalikan live `HTMLCollection` termasuk semua `<tbody>` dari element. HTMLCollection itu live dan secara otomatis update ketik `HTMLTableElement` berubah. |

Serta masih banyak property pada `HTMLTableElement` lainnya.

## Method

| Method | Deskripsi |
| ------ | --------- |
| `HTMLTableElement.createTHead()` | Mengembalikan `HTMLTableSectionElement` sebagai representasi pertama dari `<thead>` pada sebuah child didalam element. |
| `HTMLTableElement.deleteTHead()` | Menghapus `<thead>` pada child element. |
| `HTMLTableElement.createTFoot()` | Mengembalikan `HTMLTableSectionElement` sebagai representasi pertama dari `<tfoot>` pada sebuah child didalam element. |
| `HTMLTableElement.deleteTFoot()` | Menghapus `<tfoot>` pada child element. |
| `HTMLTableElement.createTBody()` | Mengembalikan `HTMLTableSectionElement` sebagai representasi pertama dari `<tbody>` pada sebuah child didalam element. |
| `HTMLTableElement.createCaption()` | Mengembalikan `HTMLElement` sebagai representasi pertama dari `<caption>` pada sebuah child didalam element. |
| `HTMLTableElement.deleteCaption()` | Menghapus `<caption>` pada child element. |
| `HTMLTableElement.insertRow()` | Mengembalikan `HTMLTableRowlement` sebagai representasi dari sebuah baris baru pada table element. |
| `HTMLTableElement.deleteRow()` | Menghapus baris berdasarkan index yang diberikan pada parameter. Jika parameter index-nya -1, maka baris terakhir akan terhapus. |

## Kode: HTML Table Element

Berikut contoh kode dengan menggunakan HTML Table Element, pada kode dibawah contohnya akan mengambil element table menggunakan DOM.

::: code-group
```html [HTML]
<table id="orderRevenue" border="1">
   <caption>Order Revenue</caption>
   <thead>
      <tr>
         <th>Month</th>
         <th>Income</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>Januari</td>
         <td>100000000</td>
      </tr>
      <tr>
         <td>Fabruari</td>
         <td>200000000</td>
      </tr>
   </tbody>
   <tfoot>
      <tr>
         <td>Total</td>
         <td>300000000</td>
      </tr>
   </tfoot>
</table>
```

```js [JavaScript]
const orderRevenue = document.getElementById('orderRevenue')

console.log(orderRevenue.caption)
console.log(orderRevenue.tHead)
console.log(orderRevenue.tBodies)
console.log(orderRevenue.tFoot)
console.log(orderRevenue.rows)
```

``` [Output Console]
# orderRevenue.caption
<caption>Order Revenue</caption>

# orderRevenue.tHead
<thead>
   <tr>
      <th width="175">Month</th>
      <th class="text-right">Income</th>
   </tr>
</thead>

# orderRevenue.tBodies
HTMLCollection(1)
   > 0: tbody
   length: 1

# orderRevenue.tFoot
<tfoot>
   <tr>
      <td class="text-right">Total</td>
      <td class="text-right">600000000</td>
   </tr>
</tfoot>

# orderRevenue.rows
HTMLCollection(4)
   > 0: tr
   > 1: tr
   > 2: tr
   > 3: tr
   length: 4
```
:::

## HTML Element Lainnya

Sebenarnya masih banyak element-element HTML lainnya yang terdapat dalam [Standard Web API](https://developer.mozilla.org/en-US/docs/Web/API). Silahkan explore lebih lanjut sesuai dengan kebutuhan tentang HTML Element. Karena jika dibahas semuanya disini akan terlalu banyak.

> :memo: **Baca selengkapnya:** [Web API](https://developer.mozilla.org/en-US/docs/Web/API#interfaces)