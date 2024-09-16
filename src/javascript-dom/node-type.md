---
title: Node Type | JS DOM
---

# Node Type

Saat menyeleksi Node maka akan menjadi [NodeList](/docs/dom/nodelist). Namun terkadang kita ingin mengetahui tipe Node-nya, apakah [Element](/docs/dom/element), TextElement, atau yang lainnya. 

Agar bisa mengetahui tipe Node tersebut, maka bisa dengan menggunakan property `nodeType`.

> :memo: **Baca selengkapnya:** [Node Type](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType)

## Constants

| Node Type Constants | Value | Deskripsi |
| ------------------- | :---: | --------- |
| `Node.ELEMENT_NODE` | 1 | Elemen node seperty `<p>` atau `<div>` |
| `Node.ATTRIBUTE_NODE` | 2 | Atribut suatu elemen |
| `Node.TEXT_NODE` | 3 | Text di dalam `Element` atau `Attr` |
| `Node.CDATA_SECTION_NODE` | 4 | `CDATASection`, seperti `<!CDATA[[ ... ]]>` |
| `Node.PROCESSING_INSTRUCTION_NODE` | 7 | Sebuah `ProcessingInstruction` dari dokumen XML, seperti `<?xml-stylesheet ... ?>` |
| `Node.COMMENT_NODE` | 8 | Node Komentar, seperti `<!-- ... -->` |
| `Node.DOCUMENT_NODE` | 9 | Node Dokumen |
| `Node.DOCUMENT_TYPE_NODE` | 10 | Node `DocumentType`, seperti `<!DOCTYPE html>` |
| `Node.DOCUMENT_FRAGMENT_NODE` | 11 | Node `DocumentFragment` |

## Node Type Syntax

```js
const type = node.nodeType
```

## Kode: Node Type

::: code-group
```html [HTML]
<div id="content">
   Javascript DOM - Node Type
   <!-- Hello World -->
</div>
```

```js [JavaScript]
const nodes = document.getElementById('content').childNodes
		
for (const node of nodes) {
   console.log(`${node} : ${node.nodeType}`)
}
```

``` [Console]
[object Text] : 3
[object Comment] : 8
[object Text] : 3
```
:::