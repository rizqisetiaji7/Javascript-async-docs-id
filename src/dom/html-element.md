---
title: HTML Element | JS DOM
---

# HTML Element

[Element](/docs/dom/element) merupakan representasi dari [DOM](/docs/dom/document-object-model). Saat menggunakan HTML, implementasi detail sebenarnya adalah HTML Element yaitu turunan dari Element. HTML Element memiliki property dan method tambahan selain dari Element DOM.

Kebanyakan HTML Element memiliki property yang sesuai dengan [attribute](/docs/dom/attribute) yang ada pada tag HTML tersebut. Contohnya pada method `setAttribute()` dan `getAttribute()`. 

Kenapa demikian? Karena pada HTML Element sudah tidak perlu lagi untuk membuat atau mengambil attribute secara manual, karena sudah disediakan property-nya.

> :memo: **Baca selengkapnya:** [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

## Kode: HTML Element

```html
<a id="link"></a>

<script>
   const link = document.getElementById('link')

   link.href = 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement'
   link.target = '_blank'
   link.innerText = 'Click Me'
</script>
```

Pada contoh kode diatas, attribute sudah disediakan secara default oleh HTML Element, baik ketika set property dan value maupun ketika get property dan value-nya. Sehingga tidak perlu menggunakan method seperti `setAttribute()` atau `getAttribute()`.