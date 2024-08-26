---
title: 'AJAX State'
---

# AJAX State

AJAX memiliki tahapan state, yang dimana terdapat banyak state yang bisa diakses menggunakan property `readyState`. Property `readyState` mengembalikan `number`, dimana setiap `number` merupakan representasi dari statenya.

## Daftar State

| Value | State  | Description |
| :---: | ------ | ----------- |
| 0     | `UNSENT` | Client telah dibuat, namun `ajax.open()` belum dipanggil |
| 1     | `OPENED` | `ajax.open()` telah dipanggil |
| 2     | `HEADERS_RECEIVED` | `ajax.send()` telah dipanggil, header dan status tersedia |
| 3     | `LOADING` | Mengunduh `responseText` menyimpan sebagian data |
| 4     | `DONE` | Operasi selesai |

## Ready State Change

Jika ingin mengetahui setiap perubahan pada statenya, AJAX bisa menggunakan event `readystatechange`, atau menggunakan property `onreadystatechange`.

```js
ajax.addEventListener("readystatechange", function(ev) {...})
// Atau
ajax.onreadystatechange = function(ev) {...}
```

> :memo: **Baca selengkapnya:** [AJAX Ready State Change Event](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/onreadystatechange)


## Contoh Penggunaan
```js{5-7,9-11}
const ajax = new XMLHttpRequest();
ajax.open('GET', 'api/04-hello.json')

// Ready State Change Event
ajax.onreadystatechange = () => {
   console.log(`Ready State Change: ${ajax.readyState}`)
}
// Atau 
ajax.addEventListener("readystatechange", () => {
   console.log(`Ready State Change: ${ajax.readyState}`)
})
```