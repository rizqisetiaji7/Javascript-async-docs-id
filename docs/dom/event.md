---
title: Event | JS DOM
---

# Event

[DOM](/docs/dom/document-object-model) memiliki banyak sekali Event, tidak hanya `'click'` saja. Jenis Event biasanya disesuaikan dengan [Event Target-nya](/docs/dom/event-target). Contohnya, pada element video terdapat event `'play'`, `'pause'`, sedangkan pada element button tidak ada event `'play'` atau `'pause'`, dll.

> :memo: **Baca selengkapnya:** [Events](https://developer.mozilla.org/en-US/docs/Web/Events)

**Element: click event**

Sebagai contoh penggunaan Element: click event terdapat data berupa `MouseEvent`.

## Event Index

| Event Type | Deskripsi |
| ---------- | --------- |
| Animation | Digunakan untuk merespon pada perubahan dalam status animasi (contoh. ketika suatu animasi mulai atau berakhir) |
| Asynchronous data fetching | Event yang digunakan untuk fetching data (contoh. ketika membaca file dengan `FileReader` atau AJAX dengan `XMLHttpRequest`)  |
| Clipboard | Digunakan untuk memberitahu ketika konten di cut, copy, atau paste |
| CSS Transition | Memberikan pemberitahuan event ketika transisi CSS dimulai, berhenti, dibatalkan, dll. |
| Drag & Drop, Wheel | Event Drag dan Wheel berasal dari Mouse Event. Meskipun diaktifkan saat menggunakan mouse wheel atau drag/drop, juga dapat digunakan dengan perangkat keras lain yang sesuai. |
| Focus | Event yang terkait dengan elemen mendapatkan dan kehilangan fokus |
| Form | Event yang terkait dengan form yang sedang dibuat, reset, dan submit |
| Fullscreen | Digunakan untuk memberi tahu saat transisi antara mode layar penuh dan window, serta kesalahan yang terjadi selama transisi tersebut |
| Inputs | Event yang terkait dengan HTML input element. Contohnya `<input>`, `<select>`, atau `<textarea>` |
| Keyboard | Event yang terkait dengan penggunaan keyboard. Digunakan untuk memberi tahu saat tombol dipindahkan ke atas, ke bawah, atau ditekan saja |
| Mouse | Event yang berhubungan dengan penggunaan mouse komputer. <br><br> Digunakan untuk memberitahu ketika mouse diklik, doubleclick, up dan down events, klik kanan, pergerakan masuk dan keluar suatu elemen, pemilihan teks, dll |
| Loading/Unloading Document | Event yang berkaitan dengan loading dan unloading dokumen |
| Media | Event yang terkait dengan penggunaan media (termasuk Media Capture dan Streams API, Web Audio API, Picture-in-Picture API, dll) |
| Print | Event yang berhubungan dengan pencetakan |

## Event Callback

Saat membuat callback untuk [Event Handler](/docs/dom/event-handler), disana dapat menerima data event yang memicu terjadinya event tersebut. Data event tersebut berbeda-beda tergantung jenis event-nya. Contohnya untuk event `'click'` data event-nya berupa `MouseEvent` (bisa data berupa lokasi koordinat x,y mouse ketika di klik, dll).

> :memo: **Baca selengkapnya:** [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)

## Contoh: MouseEvent Property

1. `MouseEvent.altKey`
2. `MouseEvent.ctrlKey`
3. `MouseEvent.shiftKey`
4. `MouseEvent.button`
5. `MouseEvent.buttons`
6. `MouseEvent.clientX`
7. `MouseEvent.clientY`
8. `MouseEvent.offsetX`
9. `MouseEvent.offsetY`

## Contoh: KeyboardEvent Property

1. `KeyboardEvent.keyup`
2. `KeyboardEvent.keydown`
3. `KeyboardEvent.keypress`
4. `KeyboardEvent.altKey`
5. `KeyboardEvent.ctrlKey`
6. `KeyboardEvent.code`
7. `KeyboardEvent.key`

Dan masih banyak lagi `Event` yang bisa digunakan pada DOM.

## Kode: Event

Berikut contoh menggunakan Event dengan menggunakan `MouseEvent` click, untuk melihat posisi koordinat x, dan y ketika di klik:

```html [HTML]
<style>
   #canvas {
      width: 100%; 
      height: 320px; 
      max-width:320px; 
      background-color: #f4d41e;
   }
</style>

<h4 id="text">Click Yellow Box</h4>
<div id="canvas"></div>

<script>
   const text = document.getElementById('text')
   const canvas = document.getElementById('canvas')

   canvas.onclick = (event) => {
      text.innerHTML = `You clicked at (${event.x}, ${event.y})`
   }
</script>
```