---
title: Promise
---

# Promise

## Apa itu Promise?

`Promise` merupakan sebuah Proxy untuk sebuah nilai di masa depan (Future) yang belum diketahui atau belum tentu saat pembuatan `Promise` tersebut. Biasanya ketika akan membuat suatu data, kita sudah mengetahui tentang data tersebut pada saat itu juga. Untuk `Promise` ini berbeda, ketika membuat suatu data yang dimana suatu saat datanya akan datang namun belum diketahui pada saat ini nilai dari data tersebut berupa apa. Sehingga hal ini bisa jadi semacam **"Janji"**.

`Promise` biasaya digunakan sebagai `Proxy` untuk proses Async (Contoh ketika mengambil data dari server). Kita mungkin sudah mengetahui bahwa dimasa depan akan terdapat suatu data, katakanlah data produk misalnya. Namun kita belum mengetahui entah kapan datangnya dari proses pengambilan data produk tersebut. Data dari proses tadi itu bisa di representasi dalam bentuk `Promise` atau **"Janji"**.

Contoh, ketika mengambil data produk dengan membuat function dengan nama `getProduct()`, maka respon yang dikembalikan akan berupa `Promise`, sebuah janji dimana akan ada data produk, namun kita belum mengetahui kapan data tersebut akan datang, bisa saja **"Janji"** tersebut ditepati yang berarti data produk tersedia, atau tidak ditepati yang berarti data produk tidak ada.

Penggunaan `Promise` sendiri sangat mudah, dan lebih mirip dengan kode `Synchronous`.

> :memo: **Baca selengkapnya:** [Tentang Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Promise State

Promise terdapat tiga state yang wajib diketahui, diantaranya:

| State | Result | Description |
| ----- | ------ | ----------- |
| `pending` | `undefined` | Keadaan awal, sebelum `fullfield` atau `rejected`. Pada saat Promise dibuat, maka promise tersebut ada di state pending yang berarti belum ada datanya atau belum jelas (Janji ditepati atau diingkari). |
| `fulfilled` | `value` | Ketika state berubah menjadi `fulfilled`, itu artinya valuenya sudah tersedia, atau data yang sudah dijanjikan sudah ada. |
| `rejected` | `error` | Sedangkan ketika state berubah dari pending menjadi `rejected`, itu berarti error, yang dimana janji dari Promise tersebut tidak di tepati. |

## Fungsi & Kegunaan

`Promise` dibuat untuk menghindari dari problem yang disebut **_Callback Hell_**, atau masalah ketika terlalu banyak menggunakan `callback`.

### Callback Hell

```js
doFirst(data, function() {
	doSecond(data, function() {
		doThird(data, function() {
			// Callback Hell
		})
	})
})
```

Pada contoh diatas adalah sebuah function yang banyak memanggil `callback`. Semakin banyak `callback` maka code menjadi semakin sulit untuk dibaca, oleh karena itu solusi untuk permasalahan diatas adalah dengan menggunakan `Promise`.

## Membuat Promise

Cara membuat Object promise sangat mudah, kita cukup membuat Object Promise, lalu isi parameter dengan menggunakan `callback`. pada parameter callbacknya terdapat dua parameter, parameter pertama adalah `resolve`, dan parameter kedua adalah `reject`. Kedua parameter tersebut sebenarnya merupakan sebuah function, resolve function `resolve()`, dan reject function `reject()`.

```js
const promise = new Promise(function(resolve, reject) {
	if (success) {
		resolve(value)
	} else {
		reject(error)
	}
})
```

### AJAX dengan Promise

Berikut contoh penggunaan Promise pada AJAX:

**Contoh data dummy dengan menggunakan file json**
```js
// api/product.json
{
	"id": 123,
	"name": "Macbook Pro 14 2021",
	"price": 24999000
}
```

::: code-group

```js [Code]
const promise = new Promise(function(resolve, reject) {
	const ajax = new XMLHttpRequest()
	ajax.open('GET', 'api/product.json')
	ajax.onload = function() {
		if (ajax.status === 200) {
			resolve(JSON.parse(ajax.responseText))
		} else {
			reject(`Error response: ${ajax.responseText}`)
		}
	}
	ajax.send()
})

console.log(promise)
```

```js [Response]
{
	id: 123,
	name: "Macbook Pro 14 2021",
	price: 24999000
}
```
:::

**Informasi pada console jika sukses (resolve):**

| Type | PromiseState | PromiseResult |
| ---- | ------------ | ------------- |
| Promise | `fulfilled` | `{JSONResponseText}` |

**Informasi pada console jika error (reject):**

| Type | PromiseState | PromiseResult |
| ---- | ------------ | ------------- |
| Promise | `rejected` | 404 Not Found |

::: info :memo: NOTE
Apabila lupa tidak menambahkan `resolve` atau `reject`, maka Promise akan selalu `Pending` dengan resultnya `undefined`.
:::