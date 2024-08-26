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

Pada case kali ini, penggunaan Object `File` tidak akan digunakan. Karena, disini bisa memanfaatkan `<input>` element dengan `type="file"`.

## Input File Element

Sebuah input form dengan `type="file"` yang memungkinkan user untuk memilih satu atau lebih file dari penyimpanan local. 
Ketika menggunakan `<input type="file">`, maka secara otomatis terdapat sebuah attribute yang bernama `files`. Files ini merupakan bentuk dari object `FileList` yang berisi daftar file terpilih yang lebih dari satu, dengan catatan menambahkan attribute `multiple` pada input formnya.

## FileList Object

`FileList` merupakan sebuah object yang mengembalikan `files` property pada elemen HTML `<input type="file">`.

### Menggunakan File List

Semua node `<input>` element memiliki sebuah atribut `files` yang dimana bertipe `FileList` yang mengizinkan akses pada item didalam list tersebut. Sebagai contoh, pada file input sebagai berikut:

```html
<input id="fileItem" type="file">
```

Berikut kode untuk mengambil file pertama dalam daftar file node sebagai objek File:

```js
const file = document.getElementById('fileItem').files[0]
```

### FileList Method

Rerdapat sebuah method bernama `item(index)` dengan parameter yang berisi index dan mengembalian Object `File`.

```js
File item(index)
```

### FileList Property
| Attribute | Type | Description |
| --------- | ---- | ----------- |
| `length`  | `integer` | Sebuah nilai yang berisi number dari file didalam list |

## Contoh Penggunaan

Berikut contoh penggunaan file upload menggunakan AJAX via `FormData` Object, dengan study kasus form register.

::: code-group
```html [Form]
<form autocomplete="off">
	<label for="name">
		Name: <input type="text" name="name" id="name" autofocus="">
	</label>
	<label for="username">
		Username: <input type="text" name="username" id="username">
	</label>
	<label for="profile">
		Profile: <input type="file" name="profile" id="profile">
		<!-- Tambahkan attribute multiple untuk upload banyak file -->
	</label>
	<input type="button" id="register" value="Register">
</form>
```

```js{12-17} [Javascript]
const doRegister = () => {
	const ajax = new XMLHttpRequest()

	// Tambahkan endpoint url sesuai tujuan
	ajax.open('POST', 'https://eoqdwp0121m96kl.m.pipedream.net')

	ajax.onload = () => {
		console.log(ajax.responseText)
	}

	// Instance FormData Object
	const form = new FormData()
	form.append('name', document.getElementById('name').value)
	form.append('username', document.getElementById('username').value)
	form.append('profile', document.getElementById('profile').files.item(0))

	ajax.send(form)
}

document.getElementById('register').onclick = doRegister
```

```js [Response]
{
	"response": true,
	"message": "Success",
	"data": {
		"name": "John Doe",
		"username": "johndoe321",
		"profile": {
			"filename": "Screenshot (104).png",
			"encoding": "7bit",
			"mimetype": "image/png",
			"url": "https://pipedream-catcher-bodies.s3.amazonaws.com/cb9f02d4-fe93-4636-bb0b-6b63cf24f0a4?AWSAccessKeyId=ASIA5F5AGIEA4WWQ3JOG&Expires=1724644916&Signature=uGipindZL%2BET5QBVpUtxjdQ0PpY%3D&x-amz-security-token=FwoGZXIvYXdzEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDH%2B7%2FVJYrBva%2Bib8JiKNBCsp3ImcRnd%2Bhf65jO%2Fk6g0pAw3FyVA39ILVTAhN31pS3FVvKIRu06%2BQ9lP7A9MqiZgR68MxF8PAqpoPUCv7o5jHIOqorXLVAM6oCgbrw8Og7pcd2Cv2tuQ3yqYYntco6Y96JuvMCLqy9pZGEqzS0nIxAiYl33ee3awfn3pc1fH%2FcbRFClEs6hNb%2BQs%2FzQsLptoAKajBtpgLZurZW%2BshqC58HIAjSRTwXbCihSRjH4IwiySBBe3guLBggocfvIoqacl23thCvYsd5GP2tAxzm18qpb%2FpWkTrrrmYK6%2B%2BM4xVVb0zicUJiZdvrGIZv8jMaRxvgmxX7ZPys3MecIzCZjfr7jKPFVGmBxT9NZgapYPFEoF4PfTHL%2FNk%2FospQEWtbI3XpQHtbFC0iliEnNlARMdbMWHPDnjwSu5ZFEJdElDw3t47es3Le5wy6N8qYZcJVZ%2Fiv32QCEO29Lf%2BXuT%2FvZ9oYhI%2B%2B3Cwrb6j2e0dsnOBa4OWPhlu67%2F8EdCHpi9WcvvSNRHK%2FzxfkWym37nioxFhnu8EuktTW4DjPEFQEyIQT%2F1LqR7YivcCuTLbv%2F7bcds1PfdJMYzzQK0cDZ8FQ7R70qlY1pgNp88NsZXQ3F%2BWUoUXeMG7CuBHANzu1TlHW9difw5CoMHKgqyR6xn7nboHlNFkxmESGEK4k76ObTMs6eI5Nq6Z7Ug%2B0EH6Kyig2K%2B2BjIquOHczx7Tt3SgBSLuaMQtJ%2Btdk3l10LKalgrh5dVqKWST7ysQUJzaapl4"
		}
	}
}
```
:::