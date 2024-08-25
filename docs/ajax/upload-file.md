---
title: Upload File dengan AJAX
---

# Upload File dengan AJAX

Selain menggunakan beberapa cara sebelumnya dalam mengirim data ke server, terkadang user juga membutuhkan upload file via AJAX ke server. Untuk dapat mengupload file, maka harus menggunakan object `FormData` lalu menambahkan object `File` ke dalam `FormData` tersebut.

Berbeda dengan cara sebelumnya, Upload file tidak bisa menggunakan metode seperti JSON, atau QueryParam, hal itu dikarenakan, JSON atau QueryParam data yang dikirimkan berupa text. Sehingga khusus form yang terdapat input filenya maka wajib menggunakan `FormData`.

Ketika `FormData` tersebut dikirim maka encoding type nya wajib menggunakan `"multipart/form-data"` atau yang biasa di set pada attribute `enctype` pada form element.

## Referensi
> :memo: Daftar Referensi

| Name | Sumber |
| -------- | --------- |
| FormData | [https://developer.mozilla.org/en-US/docs/Web/API/FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) |
| Input File | [https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file) |
| File | [https://developer.mozilla.org/en-US/docs/Web/API/File](https://developer.mozilla.org/en-US/docs/Web/API/File) |
| FileList | [https://developer.mozilla.org/en-US/docs/Web/API/FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList) |


## FormData Constructor

`FormData()` Membuat sebuah object `FormData` baru

## Instance Methods

Instance method pada `FormData` kurang lebih sama seperti pada URLSearchParams, meliputi:
- `FormData.append()`
- `FormData.get()`
- `FormData.set()`
- `FormData.delete()`
- `FormData.entries()`

serta masih banyak lagi.

### Syntax FormData

```js
new FormData()
new FormData(formElement)
new FormData(formElement, submitter)
```

## File Object

Merupakan object dari `FileList` yang mengembalikan hasil file yang dipilih user melalui form `<input>` element.

### File Object Parameters 

| Name | Description |
| :--- | ----------- |
| `fileBits` | Sebuah iterasi object seperti `Array`, `DataView`, `Blob`, `Strings` atau campuran dari salah satu elemen tersebut, yang akan dimasukkan ke dalam Object `File` |
| `fileName` | Sebuah string yang mewakili nama file, atau path url dari file tersebut |
| `options` | Bersifat opsional, sebuah opsi yang berisi attribute pada file tersebut. Beberapa attribute antara lain `type`, `endings`, dan `lastModified` |

### File Syntax

```js
new File(bits, name[, options])

// Contoh lain
const file = new File(["foo"], "foo.txt", {
   type: "text/plain",
});
```

## Input File Element

Sebuah input form dengan `type="file"` yang memungkinkan user untuk memilih satu atau lebih file dari penyimpanan local. 
Ketika menggunakan `<input type="file">`, maka secara otomatis terdapat sebuah attribute yang bernama `files`.