---
title: Style | JS DOM
---

# Style

[DOM](/docs/dom/document-object-model) bisa digunakan untuk memanipulasi attribute style CSS pada element. Sehingga tidak perlu lagi menggunakan `setAttribute('style', 'value')` setiap ingin mengubah style sebuah element. 

> :memo: **Baca selengkapnya:** [Style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)

DOM style bisa langsung menggunakan attribute `style`, berikut contohnya:

```js
element.style.name = value
```

## Penamaan Style Property

Penamaan pada style pada DOM, sedikit berbeda dari CSS, misalnya property background color pada CSS di tulis dengan lowercase dan setiap kata dipisahkan dengan tanda dash `-` contohnya `background-color`. Sedangkan pada DOM, menggunakan format penulisan pascalCase, dimana huruf pertama pada kata pertama adalah lowercase. Jika lebih dari satu kata, maka huruf pertama kata selanjutnya ditulis dengan huruf kapital, contoh `backgroundColor`.

```js
element.style.backgroundColor = 'blue'
```

## Kode: Style

Contoh manipulasi style css pada DOM, dengan klik beberapa tombol untuk mengubah warna background dari canvas:

::: code-group
```html [HTML]
<p style="margin-bottom: 0 !important;">Click the button to change canvas background</p>

<input type="button" data-color="red" value="Red">
<input type="button" data-color="green" value="Green">
<input type="button" data-color="blue" value="Blue">
<input type="button" data-color="cyan" value="Cyan">
<input type="button" data-color="magenta" value="Magenta">
<input type="button" data-color="yellow" value="Yellow">

<div id="canvas" style="
   width: 100%; 
   height: 320px; 
   max-width:320px; 
   background-color: gray;
"></div>
```

```js [JavaScript]
const buttons = document.querySelectorAll('input[type=button]')
const canvas = document.getElementById('canvas')

// Menggunakan forEach
buttons.forEach(button => { // [!code --]
	button.onclick = (e) => { // [!code --]
		canvas.style.backgroundColor = e.target.dataset.color // [!code --]
	} // [!code --]
}) // [!code --]

// Menggunakan For of
for (const button of buttons) { // [!code ++]
   button.addEventListener('click', (e) => { // [!code ++]
      canvas.style.backgroundColor = e.target.dataset.color // [!code ++]
   }) // [!code ++]
} // [!code ++]
```
:::