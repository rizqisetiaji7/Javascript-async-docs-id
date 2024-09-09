---
title: Global Event Handler | JS DOM
---

# Global Event Handler

Global Event Handler bukanlah sebuah super class, melainkan hanya kontrak yang bisa digunakan untuk menambah event sesuai nama event type-nya. Ketika kita mengambil sebuah element, maka secara otomatis bisa menambahkan property yang berisi [Event Handler](/docs/dom/event-handler).

> :memo: **Baca selengkapnya:** [Global Event Handlers](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers)

## Property

Terdapat banyak Property Event Handler, berikut beberapa contoh property:

| Property | Keterangan |
| -------- | ---------- |
| `GlobalEventHandlers.onabort` | Digunakan untuk membatalkan suatu proses. |
| `GlobalEventHandlers.onanimationcancel` | Digunakan untuk element yang memiliki animasi. |
| `GlobalEventHandlers.onfocus` | Digunakan ketika terdapat element focus. |
| `GlobalEventHandlers.onclick` | Digunakan ketika terdapat element yang di click. |
| `GlobalEventHandlers.onchange` | Digunakan ketika terdapat perubahan value pada element. contohnya untuk mengambil value pada input form. |
| `GlobalEventHandlers.onsubmit` | Digunakan ketika melakukan submit data pada form. |

Serta masih banyak lagi method yang terdapat pada Global Event Handler, untuk lebih lengkapnya bisa baca pada link sumber diatas.

::: tip :bulb: PENTING DIKETAHUI
Global Event handler hanya bisa digunakan sekali saja, berbeda dengan [Event Target](/docs/dom/event-target) yang bisa digunakan berkali-kali.
:::