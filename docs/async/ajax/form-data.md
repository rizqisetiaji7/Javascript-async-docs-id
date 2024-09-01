---
title: AJAX Form Data
---

# AJAX Form Data

Selain menggunakan `JSON` dan `URLSearchParams`, AJAX juga bisa menggunakan Form Data dari client ke server. Dalam hal ini, proses pengiriman data seperti pada submit form. Namun, untuk case ini juga masih tetap bisa menggunakan `URLSearchParams`. Kenapa? karena bentuk dari `FormData` object juga seperti pada `URLSearchParams`. Akan tetapi object `URLSearchParams` kali ini dikirim melalui method `send()`.

**Form Data via URLSearchParams:**
```js{6}
const formData = new URLSearchParams() // [!code ++]

formData.append('keyName1', 'value1') // [!code ++]
formData.append('keyName2', 'value2') // [!code ++]

ajax.send(formData) 
```

Pada contoh diatas bisa dilihat body yang dikirimkan bukan melalui query parameter, tetapi menggunakan body object melalui method `send()`.

> :memo: **Baca selengkapnya:** [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)

## Contoh penggunaan

Memanfaatkan [Json Placeholder API](https://jsonplaceholder.typicode.com/), untuk melakukan test mengirim request ke server.
Berikut merupakan contoh case mengirim data dengan menggunakan `FormData` via `URLSearchParams`:

::: code-group
```js{17} [Code]
const createPost = () => {
	const ajax = new XMLHttpRequest()
	ajax.open('POST', `https://jsonplaceholder.typicode.com/posts`)

	ajax.onload = () => {
		const response = document.getElementById('response')
		response.innerHTML = `<pre>${ajax.responseText}</pre>`
	}

	ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

	const formData = new URLSearchParams() // [!code ++]
	formData.append('userId', Math.ceil(Math.random()*10)) // [!code ++]
	formData.append('title', document.querySelector('[name=title]').value) // [!code ++]
	formData.append('body', document.querySelector('[name=body]').value) // [!code ++]

	ajax.send(formData)
}

document.getElementById('saveButton').onclick = createPost
```

```js [Response]
{
	"userId": "5",
	"title": "Post title",
	"body": "This is post desription",
	"id": 101
}
```
:::