---
title: 'URLSearchParams'
---

# URL Search Params

Selain menggunakan JSON, terkadang kita hanya ingin mengirim data AJAX menggunakan query parameter. Dalam hal ini, perlu mengubah url dengan menambahkan Query Parameter namun dengan cara yang lebih mudah yaitu dengan menggunakan object `URLSearchParams` sebelum membuat url-nya.

## Instance Property
| Name | Description |
| ---- | ----------- |
| `size` | Menunjukkan jumlah total entri parameter pencarian |

## Instance methods
| Name | Description |
| ------ | --------- |
| `URLSearchParams.append()` | Menambahkan pasangan _key/value_ tertentu sebagai parameter pencarian baru |
| `URLSearchParams.entries()` | Mengembalikan `iterator` yang memungkinkan iterasi melalui _key/value_ yang ada pada objek dalam urutan yang sama seperti yang muncul dalam query string |
| `URLSearchParams.forEach()` | Mengizinkan iterasi nilai yang terdapat dalam objek melalui fungsi callback |
| `URLSearchParams.set()` | Membuat pasangan _key/value_ yang terkait dengan parameter pencarian tertentu |
| `URLSearchParams.get()` | Mengembalikan nilai pertama yang terkait dengan key name parameter pencarian tertentu |
| `URLSearchParams.getAll()` | Mengembalikan semua nilai yang terkait dengan parameter pencarian tertentu. |

> :memo: **Baca selengkapnya:** [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)

## Object Instance

Untuk menggunakan `URLSearchParams`, maka harus membuat object instance terlebih dahulu, berikut contoh syntax-nya:
```js
const paramsString = 'q=URLUtils.searchParams&topic=api'
const searchParams = new URLSearchParams(paramsString) // [!code ++]
```
Parameter berupa format query string yang berisi key/value, namun bersifat opsional.

## Contoh Penggunaan

Berikut contoh mengirim data menggunakan URLSearchParams, dengan menggunakan API [restcountries.com](https://restcountries.com/)

::: code-group
```js [Code]
const doSearch = () => {
	const ajax = new XMLHttpRequest()
	const search = document.getElementById('search').value

	// Menambahkan query parameter
	const param = new URLSearchParams() // [!code ++]
	param.append('search', search) // [!code ++]

	ajax.open('GET', `https://restcountries.com/v3.1/name/${search}`)
	
	ajax.onload = () => {
		const response = document.getElementById('response')
		const json = JSON.parse(ajax.responseText)

		response.innerText = json.status != 404 
			? JSON.stringify(json[0]?.name)
			: `[${json.status}] - ${json.message}`
	}

	ajax.send()
}

document.getElementById('searchButton').onclick = doSearch
```

```js [Response]
{
	"common": "Indonesia",
	"official": "Republic of Indonesia",
	"nativeName": {
		"ind": {
			"official": "Republik Indonesia",
			"common": "Indonesia"
		}
	}
}
```
:::