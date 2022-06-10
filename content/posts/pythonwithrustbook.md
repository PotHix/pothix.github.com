+++
title = "Review of Speed Up Your Python with Rust: Optimize Python performance by creating Python pip modules in Rust with PyO3"
date = 2022-06-10
tags = [
    "english",
    "books",
]
+++

Book: [Speed Up Your Python with Rust: Optimize Python performance by creating Python pip modules in Rust with PyO3](https://www.goodreads.com/review/show/4606266441) by Maxwell Flitton. Rating: ⭐️⭐️⭐️.

I got this book from Packt in an exchange for an honest review, so here it is.

It's not news to anyone that I'm a big fan of the Rust programming language.
I've [organized conferences](/rustlatam2019), [did the initial work to
contribute to the compiler](/rust-contrib), [Organize local meetups in my
city](https://twitter.com/rustlang_sp), and even [have my own book on how to
start with Rust](/book) (in pt-BR). On top of that, I'm currently working with
Python at [Doist](/doist), so I had high expectations for this book.

In summary: It did not meet my expectations. 😕

The initial 40% of the book was showing the basics of Rust and Python, which is
something I would expect the reader to already know, as the book is about
integrating both languages. After that, the author shows how to upload a pip
package to pypi, which is good by itself, but I found it to be quite offtopic to
the book as I was expecting the reader to be aware of this took.

After these ~45% of the book, the author starts playing with PyO3 and showing
the integration of both languages. This part is nice, and it's what I was looking
forward when I started reading it.

The author describes some interesting tricks on how to do the bridge between the
two languages and an interface that makes sense for this kind of implementation.
That was an enjoyable reading.

The offtopic content (in my perspective) started to come back after a while, as
the author decides to explain how numpy works and the specifics of how to solve
a simple problem using numpy, so he could continue the explanation. That could
be summarized in a "trust me, this numpy code works, let's see how to integrate
with Rust" manner.

For most of the books, I had the feeling of reading a tutorial because of the
way the book was written. The author chose to use numbered lists with steps on
how things were being done, and that is not something that keeps me engaged in
reading further. It was not once or twice, but used as a writing style to
describe most examples.

The conclusion is: I learned some things about integrating Python with Rust.
When the author really focused on the topic I was looking for, it was good
content. I just felt most of the book was not really related to what I was
expecting when I started reading it.
