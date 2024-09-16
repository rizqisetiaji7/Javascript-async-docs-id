---
title: HTML Form Name | JS DOM
---

# HTML Form Name

## Akses Form Via Name

Salah satu kelebihan `Form` adalah bisa mengakses form hanya dengan menggunakan form name.

Form bisa diakses dengan kode berikut:

```js
document.forms['formName']
```

Atau ketika ingin mengakses input field, dengan menggunakan input namenya, contohnya seperti berikut:

```js
document.forms['formName']['inputName']
```

## Kode: Form Name

Sebagai contoh menggunakan materi sebelumnya, yang akan diubah sedikit kode JavaScriptnya saja. Kali ini menggunakan methode HTML Form Name:

```js
const form = document.querySelector('form[name=commentForm]') // [!code --]

form.onsubmit = function(event) { // [!code --]
document.forms['commentForm'].onsubmit = function(event) { // [!code ++]
   event.preventDefault()
   
   const commentList = document.getElementById('commentList')
   // Get input value
   const commentValue = document.getElementById('comment').value // [!code --]
   const fromValue = document.getElementById('from').value // [!code --]
   const commentValue = document.forms['commentForm']['comment'].value // [!code ++]
   const fromValue = document.forms['commentForm']['from'].value // [!code ++]

   const commentItem = document.createElement('p')
   commentItem.textContent = `${commentValue} - ${fromValue}`
   commentList.appendChild(commentItem)

   form.reset() // [!code --]
   document.forms['commentForm'].reset() // [!code ++]
}
```

_Untuk mencobanya, silahkan hapus yang ditandai dengan warna merah, lalu ganti dengan kode yang ditandai warna hijau_.