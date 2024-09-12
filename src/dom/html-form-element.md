---
title: HTML Form Element | JS DOM
---

# HTML Form Element

Form adalah salah satu element yang memiliki banyak sekali fitur diluar dari Element DOM-nya. Dengan kata lain, Form memiliki [Event](/docs/dom/event), Property, atau Method tambahan yang memang dari segi penggunaan Form cenderung lebih kompleks dibandingkan [HTML Element](/docs/dom/html-element) yang lainnya.

HTML Form Element merupakan turunan dari [HTMLElement](/docs/dom/html-element).

:memo: **Baca Selengkapnya:**

| Topik | Link |
| ----- | ---- |
| HTML Form Element | [https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement) |
| HTML Input Element | [https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement) |


## Property

Berikut beberapa contoh property yang terdapat pada HTML Form Element:

| Property | Deskripsi |
| -------- | --------- |
| `HTMLFormElement.elements` | `HTMLFormControlsCollection` yang menampung semua kontrol form milik elemen form tersebut. |
| `HTMLFormElement.length` | `Panjang` yang mencerminkan jumlah kontrol dalam form. |
| `HTMLFormElement.name` | Sebuah string yang mencerminkan nilai nama attribute HTML form, yang berisi nama form. |
| `HTMLFormElement.method` | Sebuah string yang mencerminkan nilai atribut method HTML form, menunjukkan metode HTTP yang digunakan untuk mengirimkan form. Hanya nilai tertentu yang dapat ditetapkan. |
| `HTMLFormElement.target` | Sebuah string yang mencerminkan nilai atribut HTML target form, menunjukkan tempat menampilkan hasil yang diterima dari pengiriman form. |
| `HTMLFormElement.action` | Sebuah string yang mencerminkan nilai atribut action dari HTML form, berisi URI program dan memproses informasi yang dikirimkan oleh form. |

## Method

Berikut beberapa contoh method yang digunakan pada HTML Form Element:

| Method | Deskripsi |
| -------- | --------- |
| `reset()` | Menyetel ulang form ke keadaan awal. |
| `submit()` | Mengirimkan form ke server. |
| `requestSubmit()` | Meminta form dikirimkan menggunakan tombol submit yang ditentukan dan konfigurasi yang sesuai. |
| `checkValidity()` | Mengembalikan `true` jika kontrol element child sesuai batasan validasi dan memenuhi batasan tersebut. |
| `reportValidity()` | Mengembalikan nilai `true` jika kontrol child elemen memenuhi batasan validasinya. Mengembalikan `false`, event tidak valid yang dapat dibatalkan akan diaktifkan untuk setiap child yang tidak valid dan masalah validasi dilaporkan kepada pengguna. |

## Event

Berikut beberapa contoh event yang digunakan pada HTML Form Element:

| Event | Deskripsi |
| -------- | --------- |
| `formData` | Event `formdata` diaktifkan setelah daftar entri yang mewakili data form dibuat. |
| `reset` | Event `reset` diaktifkan ketika form direset. |
| `submit` | Event `submit` diaktifkan ketika form dikirimkan. |

## Kode: HTML Form Element

Berikut contoh kode HTML Form Element, dengan memanfaatkan method dan event seperti berikut:

::: code-group
```html [Form]
<form name="commentForm">
   <label for="comment">
      Comment: <input type="text" id="comment" name="comment" placeholder="Comment" />
   </label>
   <label for="from">
      From: <input type="text" id="from" name="from" placeholder="From" />
   </label>
   <button type="submit">Submit</button>
</form>

<div id="commentList"></div>
```

```js [JavaScript]
const form = document.querySelector('form[name=commentForm]')

form.onsubmit = function(event) {
   event.preventDefault()
   
   const commentList = document.getElementById('commentList')

   // Get input value
   const commentValue = document.getElementById('comment').value // [!code ++]
   const fromValue = document.getElementById('from').value // [!code ++]

   const commentItem = document.createElement('p')
   commentItem.textContent = `${commentValue} - ${fromValue}`
   commentList.appendChild(commentItem)

   form.reset() // [!code ++]
}
```

``` [Example Output]
Hello, this is example comment - John Doe
```
:::