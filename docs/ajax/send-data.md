---
title: 'AJAX Send Data'
---

# Mengirim Data dengan AJAX

Saat menggunakan AJAX, bukan hanya sekedar mengambil data dari server saja, AJAX juga digunakan untuk mengirim data dari client ke server, misalnya ketika mengisi data melalui Form, lalu mengirimkan atau menyimpan datanya ke server menggunakan AJAX.

Untuk melakukan hal tersebut, pada AJAX bisa dengan menambahkan parameter data yang akan dikirimkan pada method `send()` milik `XMLHttpRequest`. Parameter data tersebut bersifat optional atau tidak wajib apabila tidak akan ada data yang dikirim.

**Syntax:**
```js
XMLHttpRequest.send(body)

// Contoh
XMLHttpRequest.send(JSON.stringify({
	_id: 170,
	name: 'Rizqi Setiaji'
})) 
```

Body bersifat optional. Body data yang dikirim bisa berupa, `Document`, `FormData`, `URLSearchParams`, atau `Object` berupa JSON yang di konversi menjadi `string`, dll.

> :memo: **Baca selengkapnya:** [AJAX Send Request](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send)

## Contoh AJAX Send

Berikut contoh script penggunaan `XMLHttpRequest.send()` pada studi kasus form login:
```js{10-13}
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

**Contoh response**
```txt
{status: success}
```