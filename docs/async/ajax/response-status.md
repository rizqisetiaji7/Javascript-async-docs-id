---
title: 'AJAX Response Status'
---

# AJAX Response Status

AJAX melakukan komunkasi Client dan Server. Oleh karena hal itu, bisa saja terjadi kendala pada proses tersebut. Akan ada banyak hal-hal yang mengganggu proses AJAX yang menyebabkan error seperti, masalah pada koneksi internet, error dari server, error dari client yang tidak valid, dll.

Server biasanya akan mengirimkan HTTP Status Code sesuai jenis responsenya. Untuk mengetahui status code response dari server, AJAX di JavaScript menggunakan property `XMLHttpRequest.status`.

> :memo: **Baca selengkapnya:** [XMLHttpRequest Response Status](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/status)

**Response Status**
```js{2}
const ajax = new XMLHttpRequest()
console.log(ajax.status) // Unsent = 0
```

## Contoh Request & Response
Berikut merupakan contoh request dan response dengan menggunakan AJAX

::: code-group
```js{3,17} [Request]
const displayResponse = (json) => {
	const response = document.getElementById('response')
	response.textContent = `Response Status (${json.response}) => ${json.message}`
}

const ajax = new XMLHttpRequest();
ajax.open('GET', 'api/04-hello.json')

// ajax.onload = () => {  }
ajax.addEventListener('load', function() {
	// Check with Status Code
	if (ajax.status === 200) {
		const json = JSON.parse(ajax.responseText)
		displayResponse(json)
	} else {
		displayResponse({
			response: ajax.status,
			message: 'Oops, terjadi kesalahan.'
		})
	}
})

ajax.send()
```


```html [Reponse]
Hello, Welcome to AJAX
```
:::