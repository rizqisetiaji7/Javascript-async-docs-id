---
title: QuerySelector | JS DOM
---

# QuerySelector

Pada materi sebelumnya, sudah melakukan penerapan query selector yaitu `document.querySelectorAll()`. 

Query Selector sendiri merupakan method untuk melakukan seleksi node sesuai dengan pola yang ingin dicari.

## Method

Terdapat dua method pada Query Selector, diantaranya:

- `document.querySelector('queryPattern')` :
   Digunakan untuk menyeleksi node pertama yang ditemukan pada document sesuai pola yang ditentukan.

- `document.querySelectorAll('queryPattern')` :
   Digunakan untuk menyeleksi semua node pada document sesuai pola yang sama.

## Pattern QuerySelector

Pattern atau pola pada QuerySelector adalah menggunakan [CSS Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors). Jika sudah familiar dengan CSS, maka pola atau cara penulisan selectornya mirip seperti menulis selector menggunakan CSS. Terutama ketika akan menseleksi suatu element, misalnya menggunakan class, id, tag, dll.

::: tip :bulb: WAJIB DI PELAJARI
Jika belum tahu tentang CSS Selector, maka disarankan untuk mempelajari terlebih dahulu materi tentang CSS.

:memo: **Baca selengkapnya:** [CSS Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors)
:::

### Kode: Contoh QuerySelector

```js
document.querySelector('.navbar')
document.querySelector('#submit')
document.querySelectorAll('ul.menu > li')
```

## Universal Selector

Universal selector merupakan selector yang digunakan untuk menyeleksi semua element yang ada didalam document. Universal selector ditandai dengan karakter `*`, atau tanda bintang.

> :memo: **Baca selengkapnya:** [Universal Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors)

### Kode: Universal Selector

```js
const elements = document.querySelectorAll('*')
console.log(elements)
```

## Type Selector

Type Selector digunakan untuk menyeleksi element berdasarkan element typenya atau bisa disebut tag HTML. Berikut contoh ketika ingin menyeleksi paragraf:

```js
document.querySelectorAll('p')
```

Secara otomatis semua element yang berada didalam tag `<p>` akan terseleksi.

> :memo: **Baca selengkapnya:** [Type Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors)

### Kode: Type Selector

Berikut contoh kode Type Selector yang digunakan untuk menyeleksi semua element tag `<li>`:

::: code-group
```html [HTML]
<ul>
   <li id="one">1</li>
   <li id="two">2</li>
   <li id="three">3</li>
</ul>

<ul>
   <li id="four">Four</li>
   <li id="five">Five</li>
   <li id="six">Six</li>
</ul>
```

```js [JavaScript]
const elements = document.querySelectorAll('li')
console.log(elements)
```

``` [Console]
NodeList(6)
   [0] : li#one
   [1] : li#two
   [2] : li#three
   [3] : li#four
   [4] : li#five
   [5] : li#six
   length : 6
```
:::

## Class Selector

Merupakan selector untuk menyeleksi semua element yang memiliki class yang sesuai dengan selectornya. Untuk bisa menggunakannya bisa dengan menyebutkan nama classnya yang diawali dengan `.` (titik).

Berikut contoh kode class selector:

```js
document.querySelectorAll('.list-item')
```

> :memo: **Baca selengkapnya:** [Class Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors)

### Kode: Class Selector

Berikut contoh kode class selector yang hanya akan menyeleksi element `<li>` yang memiliki class `list-item` saja.

::: code-group

```html [HTML]
<ul>
   <li class="list-item">One</li>
   <li>Two</li>
   <li class="list-item">Three</li>
</ul>

<ul>
   <li class="list-item">Four</li>
   <li>Five</li>
   <li class="list-item">Six</li>
</ul>
```

```js [JavaScript]
const elements = document.querySelectorAll('.list-item')
console.log(elements)
```

``` [Console]
NodeList(4)
   [0] : li.list-item
   [1] : li.list-item
   [2] : li.list-item
   [3] : li.list-item
   length : 4
```
:::

## ID Selector

Merupakan selector untuk menyeleksi id sesuai selectornya. Untuk menggunakannya bisa menggunakan nama id yang di awali dengan tanda `#` (pagar).

Berikut contoh kode ID selector:

```js
document.querySelector('#table')
```

> :memo: **Baca selengkapnya:** [ID Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors)

### Kode: ID Selector

::: code-group

```html [HTML]
<ul>
   <li class="list-item">One</li>
   <li id="menu2">Two</li>
   <li class="list-item">Three</li>
</ul>
```

```js [JavaScript]
const menuItem = document.querySelector('#menu2') // Single element selector
const menuItems = document.querySelectorAll('#menu2')

console.log(menuItem)
console.log(menuItems)
```

``` [Console]
<li id="menu2">Two</li>

NodeList(1)
   [0] : li#menu2
   length : 1
```
:::

## Attribute Selector

Merupakan selector yang digunakan untuk menyeleksi element berdasarkan attribute-nya. Format penulisan selector `'[attribute]'`, atau bisa juga dengan menuliskan tag tertentu seperti `'div[attribute]'`.

> :memo: **Baca selengkapnya:** [Attribute Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)

Berikut implementasi dalam DOM di javascript:

```js
document.querySelector('[data-id]')

document.querySelectorAll('div[className]')
```

### Kode: Attribute Selector

::: code-group

```html
<ul>
   <li class="list-item">One</li>
   <li class="list-item">Two</li>
   <li class="list-item">Three</li>
   <li>Four</li>
</ul>

<button type="button">My Button</button>
```

```js [JavaScript]
const button = document.querySelector('[type=button]')
const menuItems = document.querySelectorAll('li[class]')

console.log(button)
console.log(menuItems)
```

``` [Console]
<button type="button">My Button</button>

NodeList(3)
   [0] : li.list-item
   [1] : li.list-item
   [2] : li.list-item
   length : 3
```
:::

## Operator Attribute Selector

Pada attribute selector juga bisa menggunakan operator untuk menyeleksi element berdasarkan value dari attribute tersebut. Misalnya `'[attribute=value]'`, `'[attribute^=value]'`, dll.

Contohnya ketika akan mengambil element berdasarkan attribute dengan prefix tertentu seperti kode berikut: 

```js
document.querySelectorAll('li[class^="list"]')
```

Pada kode diatas, tidak peduli nama classnya apa saja, yang penting pada prefixnya terdapat kata `'list'`.

### Kode: Operator Attr Selector

Contoh seleksi attribute selector operator pada list berikut:

::: code-group
```html [HTML]
<ul>
   <li class="list">One</li>
   <li class="listTwo">Two</li>
   <li class="listThree">Three</li>
   <li class="fourlist">Four</li>
   <li class="fivelist">Five</li>
</ul>
```

```js [JavaScript]
const listItemsPrefix = document.querySelectorAll('li[class^="list"]')
console.log(listItemsPrefix)
```

``` [Console]
NodeList(3)
   [0] : li.list
   [1] : li.listTwo
   [2] : li.listThree
   length : 3
```
:::