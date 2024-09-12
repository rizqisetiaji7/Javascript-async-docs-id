---
title: Global Event Handler | JS DOM
---

# Global Event Handler

Selain menggunakan [Event Target](/docs/dom/event-target), untuk menambahkan [Event Handler](/docs/dom/event-handler) bisa menggunakan Global Event Handler.

Global Event Handler bukanlah sebuah super class, melainkan hanya kontrak yang bisa digunakan untuk menambah event sesuai nama event type-nya. Ketika kita mengambil sebuah element, maka secara otomatis bisa menambahkan property yang berisi [Event Handler](/docs/dom/event-handler).

> :memo: **Baca selengkapnya:** [Global Event Handlers](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers)

## Property

Terdapat banyak Property pada Global Event Handler, property pada Global Event Handler biasanya terdapat prefix `on` yang disambung dengan Event Typenya, berikut beberapa contohnya:

| Property | Keterangan |
| -------- | ---------- |
| `GlobalEventHandlers.onabort` | Digunakan untuk membatalkan suatu proses. |
| `GlobalEventHandlers.onanimationcancel` | Digunakan untuk element yang memiliki animasi. |
| `GlobalEventHandlers.onfocus` | Digunakan ketika terdapat element focus. |
| `GlobalEventHandlers.onclick` | Digunakan ketika terdapat element yang di click. |
| `GlobalEventHandlers.onchange` | Digunakan ketika terdapat perubahan value pada element. contohnya untuk mengambil value pada input form. |
| `GlobalEventHandlers.onsubmit` | Digunakan ketika melakukan submit data pada form. |

Serta masih banyak lagi method yang terdapat pada Global Event Handler, untuk lebih lengkapnya bisa baca pada link sumber diatas.

## Syntax

Berikut syntax penggunaan Global Event Handler:

```js
GlobalEventHandler.onclick = function(event) { /* Lakukan sesuatu */ }
GlobalEventHandler.onsubmit = function(event) { /* Lakukan sesuatu */ }
GlobalEventHandler.onblur = function(event) { /* Lakukan sesuatu */ }
```

## Kode: Global Event Handler

Berkut kode yang sedikit di modifikasi dari contoh kode pada meteri [Event Target](/docs/dom/event-target), dan kali ini menggunakan versi Global Event Handler:

```html
<input type="button" id="clickMe" value="Click Me">

<script>
   const button = document.getElementById('clickMe')

   // Event Target
   button.addEventListener('click', function() { // [!code --]
      button.setAttribute('You already click me!') // [!code --]
   }) // [!code --]

   // Global Event Handler
   button.onclick = () => { // [!code ++]
      button.setAttribute('You already click me!') // [!code ++]
   } // [!code ++]
</script>
```

::: tip :bulb: PENTING DIKETAHUI
Global Event handler hanya bisa digunakan sekali saja, berbeda dengan [Event Target](/docs/dom/event-target) yang bisa digunakan berkali-kali.
:::