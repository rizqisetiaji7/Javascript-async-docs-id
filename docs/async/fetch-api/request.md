---
title: Request Object
---

# Request Object

Pada saat akan mengirim request menggunakan Fetch API, maka perlu membuat object `Request` terlebih dahulu. Hal ini menjadi lebih rapi dibandingkan menggunakan AJAX. Pada saat membuat Request, kita bisa menentukan data apa saja yang akan dikirim menggunakan Fetch API.

> :memo: **Baca selengkapnya:** [Request Object](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request)

## Syntax

Dengan menggunakan constructor `Request()` akan membuat object Request baru.

```js
const request = new Request(input[, init])
```

### Parameter

| Name | Description |
| ---- | ----------- |
| _input_ | URl enpoint yang dituju bisa berupa alamat web atau Url Rest API, dll. |
| _init_ `optional` | Object konfigurasi seperti `method`, `headers`, `body`, dll. |

## Membuat Request

Berikut cara membuat object Request dan menentukan beberapa konfigurasi dasarnya sebagai berikut:

```js
const request = new Request("https://your_api_or_url_endpoint/", {
   method: 'POST',
   headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
   },
   body: JSON.stringify({
      username: 'johndoe321',
      password: 'rahasia123'
   })
})
```

Setelah membuat object requestnya, untuk mengirim menggunakan Fetch API sangat sederhana dengan sebuah method bernama `fetch()` yang digunakan untuk mengirim datanya. Jadi, tinggal memanggil method `fetch()` lalu masukkan object Request yang sebelumnya sudah dibuat ke parameter method `fetch(params)`, perhatikan kode berikut:

```js
// Promise<Response>
const response = fetch(request)
```

## Contoh Case

Berikut sebagai contoh case penggunaan Request pada form login:

::: code-group
```html [login.html]
<form>
   <label for="username">
      Username: <input type="text" name="username" id="username" />
   </label>
   <label for="password">
      Password: <input type="password" name="password" id="password" />
   </label>
   <input type="button" id="login" value="Login">
</form>
```

```js [login.js]
function doLogin() {
   const request = new Request("https://your_api_or_url_endpoint/", {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
      },
      body: JSON.stringify({
         username: 'johndoe321', // [!code --]
         password: 'rahasia123', // [!code --]
         username: document.getElementById('username').value, // [!code ++]
         password: document.getElementById('password').value, // [!code ++]
      })
   })
   // Promise<Response>
   const response = fetch(request)
   return response
}

document.getElementById('login').onclick = doLogin
```
:::

## Tanpa Object Request

Terdapat cara yang lebih to the point dalam menggunakan Fetch API, yaitu tanpa membuat object Requestnya terlebih dahulu. Jadi, semua konfigurasinya bisa langsung di masukkan dalam parameter method `fetch(input [, options])`, berikut contohnya:

```js{2}
// Promise<Response>
const response = fetch('https://your_api_or_url_endpoint/', {
   method: 'POST',
   headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
   },
   body: JSON.stringify({
      username: 'johndoe321',
      password: 'rahasia123'
   })
})
```