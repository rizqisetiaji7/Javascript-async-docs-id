---
title: 'Pengertian AJAX'
---

# AJAX

AJAX atau **_(Asynchronous JavaScript and XML)_** digunakan untuk mengambil atau mengirim data ke URL lain. Di JavaScript bisa membuat AJAX dengan menggunakan class `XMLHttpRequest`.

> :memo: **Baca selengkapnya:** [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/load_event)

## Cara kerja AJAX

Di dalam browser ketika program JavaScript membuat object AJAX, biasanya AJAX akan mengirim Request ke Server, baik server sendiri maupun server di tempat lain.

Kemudian server akan membalas request AJAX berupa sebuah response yang akan diterima oleh AJAX kembali. Setelah menerima response maka data akan dirender atau ditampilkan pada halaman web atau diproses sesuai kebutuhan.

### Membuat Object AJAX
```js
const ajax = new XMLHttpRequest()
```

## Menerima Data AJAX

Selain mengirim data ke server, AJAX juga bisa menerima atau mendapatkan informasi dari setiap request yang dilakukan melalui response yang diberikan oleh server. Response dari AJAX tidak bisa diambil secara langsung, hal ini karena proses AJAX adalah Async, sehingga perlu menunggu sampai proses Async-nya selesai.

Untuk mendapatkan informasi response dari AJAX, bisa menggunakan callback yang akan dieksekusi setelah proses AJAX selesai. Untuk menggunakan AJAX callback, bisa menggunakan `'load'` event atau global event seperti `onload`. Lalu untuk mengambil datanya bisa menggunakan property `responseText`.

### Load event listener

```js
ajax.addEventListener('load', function() { ... })
// atau
ajax.onload = () => { ... }
```

> :memo: **Baca selengkapnya:** [Load Event](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/load_event)

## Contoh Penggunaan

Contoh model data dengan menggunakan file json:

```js
{
	"response": "Success",
	"message": "Hello, Welcome to AJAX",
	"data": {
		"id": "xF5al0Sh",
		"name": "Setiaji",
		"skills": ["HTML", "CSS", "JavaScript", "React JS", "Laravel", "MySQL"]
	}
}
```

Implementasi penggunaan `XMLHttpRequest`:

::: code-group
```js [Code]
const ajax = new XMLHttpRequest(); // [!code ++]
ajax.open('GET', 'api/jsonurl') // From api url or database

ajax.onload = () => { ... } // [!code --]
ajax.addEventListener('load', function() { // [!code ++]
	const json = JSON.parse(ajax.responseText)

	const response = document.getElementById('response')

	// Contoh hanya mengambil data status response dan message-nya saja
	response.textContent = `Response [${json.response}] : ${json.message}`
})

ajax.send()
```

```html [Response]
Hello, Welcome to AJAX
```
::: 