---
title: Response Object
---

# Response Object

Setelah melakukan [Request](/docs/fetch-api/request), hasil dati Fetch API adalah sebuah [Promise](/docs/promise/definisi-promise). Didalam Promise tersebut terdapat Object `Response` yang memiliki banyak property dan method yang bisa digunakan sesuai kebutuhan.

> :memo: **Baca selengkapnya:** [Response Object](https://developer.mozilla.org/en-US/docs/Web/API/Response)

## Property

| Name | Description |
| ---- | ----------- |
| `Response.body` | Merupakan body content atau data. |
| `Response.headers` | `Headers` Object berisi informasi header dari response |
| `Response.ok` | Sebuah `boolean` yang mengindikasikan response telah sukses (dengan range status 200-299) atau tidak. |
| `Response.redirected` | Indicator response untuk melakukan redirect atau tidak |
| `Response.status` | Code status response (200 jika sukses) |
| `Response.statusText` | Pesan status berdasarkan status codenya (`OK` untuk 200) |
| `Response.url` | URL dari response nya |

## Method

| Name | Description |
| ---- | ----------- |
| `Response.formData()` | Mengembalikan `resolve` Promise dengan `FormData` yang merupakan representasi response body |
| `Response.json()` | Promise yang mengembalikan response body text dalam bentuk object `JSON` |
| `Response.text()` | Mengembalikan Promise dengan sebuah text representasi dari response body |

## Menggunakan Response

Cara menampilkan Response sangat mudah, contohnya kita bisa mengkonversi datanya menjadi object json terlebih dahulu, lalu bisa menggunakan datanya sesuai tujuan. Disini akan menggunakan contoh login case sebelumnya, berikut codenya:

```js
function doLogin() {
   const request = new Request("https://your_api_or_url_endpoint/", {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
      },
      body: JSON.stringify({
         username: document.getElementById('username').value, 
         password: document.getElementById('password').value
      })
   })
   // Promise<Response>
   const response = fetch(request)
   return response // [!code --]
   response // [!code ++]
      .then((response) => response.json()) // [!code ++]
      .then((json) => console.log(json.success)) // [!code ++]
}
```

Jika terjadi error, disini bisa menggunakan method `catch()` untuk menangkap informasi errornya:

```js
// Promise<Response>
const response = fetch(request)
response
   .then((response) => response.json())
   .then((json) => console.log(json.success))
   .catch((error) => console.log(error)) // [!code ++]
```