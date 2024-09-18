---
title: Document Object Model | JS DOM
---

# Document Object Model (DOM)

DOM merupakan representasi object dari struktur halaman website. Dimana dengan menggunakan DOM, halaman website bisa dimanipulasi sehingga terlihat lebih dinamis. DOM sering digambarkan dalam struktur tree (Pohon), dimana ketika web browser merender halaman website akan dibentuk dalam sebuah document, yang didalamnya terdapat banyak sekali tag html.

Di mulai dari root element yaitu html, didalam html terdapat dua cabang tag yaitu head dan body, didalam head bisa terdapat tag title yang didalamya lagi memiliki teks konten, didalam body pun demikian memiliki banyak cabang atau tag beserta attributenya, hal itulah kenapa DOM direpresentasikan dalam diagram Tree. 

DOM sendiri bukanlah fitur dari javascript, melainkan sebuah web API yang disediakan untuk mengakses berbagai object dan memanipulasi sesuai kebutuhan. Jadi DOM ini bukan hanya ada di bahasa pemrograman Javascript, tetapi di bahasa pemrograman lain pun bisa ada, seperti Java, Kotlin, PHP, dll.

## Tipe Data

DOM tidak memiliki banyak tipe data, kebanyakan adalah representasi objek. Penggunaan DOM sangat sederhana dan juga sangat bermanfaat. Berikut beberapa tipe data dari DOM:

| # | Tipe Data | Keterangan |
| :-: | --------- | ---------- |
| 1 | `Document` | Merupakan representasi halaman web. Ketika membuka halaman suatu web maka, browser akan mengakses suatu contractor Document. |
| 2 | `Node` | Merupakan base class untuk semua tipe data didalam DOM. Seperti, Document, Element, dan Attribute. Atau bisa dikatakan sebagai Parent dari semua tipe data didalam DOM. |
| 3 | `Element` | Merupakan representasi Object Element di halaman web, misal pada head, body, form, input, dll. |
| 4 | `NodeList` | Merupakan array/collection yang berisikan Node. |
| 5 | `Attr` | Merupakan representasi Object attribute didalam element. Contohnya pada saat membuat element input, pada input element terdapat attribute seperti type, name, id, class, dll. |
| 6 | `NamedNodeMap` | Merupakan collection yang berisikan attribute dalam bentuk `"Map"`. |