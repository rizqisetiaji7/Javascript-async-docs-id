---
title: 'AJAX Send Data'
---

# Mengirim Data dengan AJAX

Saat menggunakan AJAX, bukan hanya sekedar mengambil data dari server saja, AJAX juga digunakan untuk mengirim data dari client ke server, misalnya ketika mengisi data melalui Form, lalu mengirimkan atau menyimpan datanya ke server menggunakan AJAX.

Untuk melakukan hal tersebut, pada AJAX bisa dengan menambahkan parameter data yang akan dikirimkan pada method `send()` milik `XMLHttpRequest`. Parameter data tersebut bersifat optional atau tidak wajib apabila tidak akan ada data yang dikirim.

## Syntax Send Method

```js
XMLHttpRequest.send(body)
```

::: info :memo: CATATAN 
Body bersifat optional, yang berarti bisa terdapat data maupun tidak tergantung tujuan. Body data yang dikirim bisa berupa, `Document`, `FormData`, `URLSearchParams`, atau `Object` berupa JSON yang di konversi menjadi `string`, dll.
:::

> :memo: **Baca selengkapnya:** [AJAX Send Request](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send)

## Contoh penggunaan

Send data AJAX via body JSON string:

```js
XMLHttpRequest.send(JSON.stringify({
	_id: 170, // [!code ++]
	name: 'Rizqi Setiaji' // [!code ++]
}))  
```

## AJAX Send

Berikut contoh script penggunaan `XMLHttpRequest.send()` pada studi kasus form login:

::: code-group
```js{10-13} [Code]
const doLogin = () => {
	const ajax = new XMLHttpRequest()
	ajax.open('POST', 'https://eoqdwp0121m96kl.m.pipedream.net')

	ajax.onload = () => {
		const response = document.getElementById('response')
		response.innerText = ajax.responseText
	}

	ajax.send(JSON.stringify({
		username: document.getElementById('username').value,
		password: document.getElementById('password').value,
	}))
}

document.getElementById('login').onclick = doLogin
```

```js [Response]
{ status: 'success' }
```
:::