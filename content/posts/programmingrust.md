+++
title = "Review of Programming Rust: Fast, Safe Systems Development"
date = 2020-08-11
tags = [
    "english",
    "books",
]
+++

Book: [Programming Rust: Fast, Safe Systems Development](https://www.goodreads.com/review/25550614). Rating: ⭐️⭐️⭐️⭐️⭐️.

This is a great book for sure. I started reading it in 2017 but never find the
time to read it. Now, thanks to having two babies at home, I have enough time to
read while waiting for them to sleep. :)

There are many things I like about this book. The first is the comparisons with
C and C++ since both authors are/were C/C++ developers. This kind of experience
helps you understand how Rust is useful and what practical problems it's
actually solving. I always hear about the theory, but the practical examples are
gold.

I love the final example where the authors build a wrapper around libgit2 using
FFI. It shows how to create a crate that deals with a non-safe interface while
building a safe interface for yourself.

The book is a complete and fluid reading for those wanting to understand how
Rust works and what you can do by using it.

Here is my raw notes about the book:

- Rust infers float if no type was given. It defaults to f64 in case both (f32
  and f64) are possible
- `std::f32::const` define constants for `INFINITY`, `NEG_INFINITY`, `NAN`,
  `MIN`, `MAX`.  The same for f64
- While let pattern = expression
- Lifetimes for loops. Use 'name_of_lifetime before the loop, so you can use
  break and continue using this label
- `unwrap_or_else( function)` executes the function when there's an error.
- expect is the same as unwrap but let you define a message in case o fr the 9f
  a panic
- The only reasonable use of unwrap is when your function can't fail. E.g. when
  yiu have a set of data defined but the function you're using to convert
  returns a result
- if let = Err(err) is used to unpackage the err tha can be used inside the if
  block
- static is a variable created before your program starts. Const is just like
  C++, it fill be compiled in place to every usage of it
- `debug_assert()` and debug_assert_eq() may be used in common code and will not
  be added in the release
- If you expect a test to panic, add #[should_panic] attribut to your test
- Rangefull is the unit-struct for ..
- Use .. when you don't care about the other fields of the struct in pattern
  matching
- If you implement the trait From and you have single argument constructor, you
  gain `into` for free
- By following Rust's strict contract of how to use closures (move, clone, or
  borrowing),, you gain thread safety
- Fn trait is implemented by functions and closures. If you define a function
  and expects an fn only, you will only be able to receive functions, not
  closures.
