+++
title = "Review of Polished Ruby Programming"
date = 2021-08-17
tags = [
    "english",
    "books",
    "tech",
]
+++

Book: [Polished Ruby Programming: Build better software with more intuitive, maintainable, scalable, and high-performance Ruby code](https://www.goodreads.com/review/show/4062011051) by Jeremy Evans. Rating: ⭐️⭐️⭐️⭐️.

I got a contact from Packtpub about this book. The deal was to receive the book
for free in exchange for an honest review. Here I am, just finished the book
and will write about it.

The book is quite good, there's a lot of good information there, and I would
totally recommend to someone investing in Ruby.

The author did some great contributions to the Ruby community (Ruby Committer,
Lead developer of Sequel, Roda, and Rodauth. OpenBSD ruby ports maintainer.),
is doing software and community work for many years now (I can quickly check
his open source work since 2008), and has some strong opinions about famous
Ruby libraries.

For most of the book, I was totally into the narrative and how the author was
organizing information. When things started to go more into the web, I started
to feel something different. It felt like the author was selling one library or
the other, because they were _much better_ than others. Turns out, it's the
libraries he created himself 🙄. After that, I had the same feeling, until I
finished the book.

The book still deserves a 4 star review. The content until the web part is
indeed great. Jeremy was able to write down some interesting pieces of advice
on how to use Ruby in some particular scenarios where performance is needed. I
especially liked the chapter 6, about code formatting. The final part of the
book is also OK, but you have to read it with a grain of salt as it feels like
a mother talking about how pretty is her son/daughter. 😅

**Here are my raw notes (and comments) about the book:**

Chapter 1: Getting the Most out of Core Classes

- Ruby's core classes also use nil as a signal that a method that modifies the receiver did not make a modification:
- When you want to cache an expression that may return nil or false as a valid value, you need to use a different implementation approach.
    - 💭 — Context : memoization
- One advantage of using true, false, and nil compared to most other objects in Ruby is that they are three of the immediate object types. Immediate objects in Ruby are objects that do not require memory allocation to create and memory indirection to access, and as such they are generally faster than non-immediate objects.
- Any time you are considering using division in your code and both arguments could be integers, be aware of this issue and consider whether you would like to use integer division. If not, you should convert the numerator or denominator to a different numeric type
- do not avoid the use of rationals on a performance basis unless you have profiled them and determined they are a bottleneck
- Ruby is focused on programmer happiness and productivity, so it will often automatically convert a string to a symbol if it needs a symbol, or a symbol to a string if it needs a string.
- While it looks like symbols and strings are as interchangeable as the method argument to send, this is only because Ruby tries to be friendly to the programmer and accept either.
- Module# define_method, Kernel# instance_variable_get, and Module# const_get. The general principle when using these methods in Ruby code is always to pass symbols to them, since it results in better performance.
- if you need to accept a configuration value that can only be one of three options, it's probably best to use a symbol:
- `Array#&` uses a linear search of the array, so this approach is very slow for a large number of artists.
- Set is actually implemented using a hash internally,
    - 💭 — That's Interesting
- you should only use a set for code that isn't performance-sensitive and you would like to use a nicer API. For any performance-sensitive code, you should prefer using a hash directly.
- a Struct class is a little lighter on memory than a regular class, but has slower accessor methods.
- freezing the receiver in initialize is the best approach.
    - 💭 — To get an immutable struct

Chapter 2: Designing Useful Custom Classes

- As a general principle, you should delay increasing complexity in your class designs until you actually need the complexity.
    - 💭 — YES !
- While the Liskov substitution principle is useful to follow in general, you should not be dogmatic about applying it. In a strict sense, all subtypes that have different behavior than their supertypes or produce different results could be said to violate Liskov substitutability,
- Ruby, in general, respects that the programmer will know to do the right thing.
    - 💭 — It's Both a blessing and a curse
- There is one method in Ruby that will almost always break Liskov substitutability, and that you should generally avoid, and that is instance_of?.
- These approaches should almost always use kind_of? instead,
    - 💭 — Instead Of instance of
- The problem with this approach is that it prevents you from using multithreaded tests to speed up your testing.
    - 💭 — Overwriting Date.today
- Unless your code has already been tightly optimized, there are probably better ways to optimize your application than attempting to use a custom data structure instead of a Ruby array or hash.

Chapter 3: Proper Variable Usage

- if you are writing a general-purpose library, you should not modify core classes unless that is the purpose of the library.
- array_class = Array
    - 💭 — Performance Sensitive
- the length of the variable name should be roughly proportional to the inverse of the size of the scope of the variable,
- You could also use a numbered parameter in this case: `@albums.each do puts _1. name end`
    - 💭 — That's new to me
- Note that it is possible to be more explicit and use instance_variable_defined?(:@ total_tax) instead of defined?(@ total_tax), but it is recommended that you use defined? because Ruby is better able to optimize it. This is because defined? is a keyword and instance_variable_defined? is a regular method, and the Ruby virtual machine optimizes the defined? keyword into a direct instance variable check.
- The scope of instance variables is always the same as the implicit receiver of methods, self.
- accessing local variables is faster than accessing instance variables.
- Ruby's constant lookup algorithm: Look in the current namespace (W in the previous example). Look in the lexical namespaces containing the current namespace (X, Y, and Z in the previous example). Look in the ancestors of the current namespace, in order (U in the previous example). Do not look in ancestors of the lexical namespaces containing the current namespace.
- You can make constants not externally accessible using private_constant:
- Class variable semantics are bad enough that the Ruby core team now recommends against their use, and no longer considers it worth it to even fix bugs in how class variables are handled.
- Using a mutable constant to work around constant reassignment warnings is definitely a hack and not an implementation recommendation. It's a bad idea to use this approach, for the same reason it is bad to rely on globally mutable data structures in general.
- The main issues with using global variables in Ruby are the same as using global variables in any programming language, in that it encourages poor coding style and hard-to-follow code.

Chapter 4: Methods and Their Arguments

- When using the frozen-string-literal magic comment to make all the strings in a file frozen, even dup, a three-letter method name, was considered too long, so they added the +@ unary operator on strings (+@ doesn't duplicate the string if it isn't frozen, but it is almost always used on frozen strings).
    - 💭 — How Is that a good name!?
- For methods that should only be called once during application initialization for configuring applications, it's a good idea to give them very descriptive names.
- If you are considering writing a method with many required arguments, strongly consider the argument ordering issues involved before doing so.
- If you want to avoid array allocation in all cases, you can use a frozen constant, as follows: EMPTY_ARRAY = []. freeze def a( bar = EMPTY_ARRAY) end
- You can mimic this API in Ruby by using a rest argument for additional sources and a post argument for the destination: `def mv( source, *sources, dir)`
- OPTIONS = {}. freeze def foo( options = OPTIONS) end With this approach, calling the method without options never allocates a hash.
- in Ruby 3, calling a method with a # keyword splat does not allocate a hash
- it is best to use keyword arguments instead of an optional positional hash argument.
- If you are maintaining Ruby code that uses positional arguments with default hash values as a replacement for keyword arguments, you should consider whether you want to convert them into keyword arguments.
- it is never safe to modify the arity of what you are yielding to a block if users can pass a lambda proc as the block argument.
- any time you break backward compatibility in a library, even in a major version, you should have a good reason to. Even if their code breaks, the users of a library tend to feel less betrayed and annoyed when they can see that such a breakage was necessary for greater progress.
- What about the visibility of constants? In general, it's best to use private_constant for any constant you do not want to expose to users. Only leave a constant public if there is a good reason for it to be public.
- Once a constant is public, it's part of your library's interface, and you should treat changes that are made to the constant similar to changes that are made to any public method, so do your best to keep backward compatibility for it.
- If you have a lot of methods and constants that are currently public and should be made private, it is a little tedious to do all this method_missing and const_missing overriding. In that case, you can use the deprecate_public gem to handle all the hard work for you:
- Delegating all arguments to another method is such a common pattern in Ruby that they added a shortcut for it in Ruby 2.7 by using ...:

Chapter 5: Handling Errors

- Both Python and Ruby support similar behavior for retrieving data from hashes, but Ruby, in this case, is permissive, while Python, in this case, is strict.
- Ruby's permissiveness in either area can be considered a bug or a feature, depending on your point of view. Most programmers who prefer to use Ruby probably consider it a feature, since otherwise, they would probably prefer to use another language.
- This is the principle of misuse resistance. A method that does not raise an exception for errors is easier to misuse than a method that raises an exception for errors.
- code uses exceptions for flow control, which is, in general, a bad approach.
- One consideration when using exceptions is that they get slower in proportion to the size of the call stack. If you have a call stack with 100 frames, which is quite common in Ruby web applications, raising an exception is much slower than if you only have a call stack with 10 frames.
- You can include a third argument to raise, which is the array to use for the backtrace. If you want to make the exception handling as fast as possible, you can use an empty array: raise ArgumentError, "message", []
- raise ArgumentError, "message", EMPTY_ARRAY
- Because the exception being raised has no backtrace, it is much more difficult to debug if you run into problems.
- if you have a module named LibraryModule and want to add support for backtraceless exceptions, you could add a skip_exception_backtraces accessor, as shown in this example: exception = ArgumentError.new(" message") if LibraryModule.skip_exception_backtraces exception.set_backtrace( EMPTY_ARRAY) end
- the retry keyword is only valid inside rescue clauses, it is not valid in the begin clause. That's a bummer.
- The redo keyword is one of the least used keywords in Ruby. If you haven't used it before, it is similar to the next keyword, but instead of going to the next block iteration, it restarts the current block iteration.
- In general, procs and lambdas (Proc instances) are among the more expensive object instances to create, at least compared to other core classes.
- The following code is a modified implementation of a classic exponential backoff algorithm: `sleep( 3 * (0.5 + rand/ 2) * 1.5**( retries-1))`
- It's important that `Foo:: Error` is a subclass of StandardError and not of Exception. You should only subclass Exception in very rare cases because subclasses of Exception are not caught by rescue clauses without arguments.
- In general, idiomatic Ruby code avoids defensive programming based on types, because in Ruby, what matters is what methods the object responds to and the objects returned by those methods.

Chapter 6: Formatting Code for Easy Reading

- it is often a good idea to enforce syntactic consistency. Enforcing syntactic consistency can increase the performance of philosophers. The poets may find such code boring and not as fun to work on, and it is likely that enforcing syntactic consistency will affect their enjoyment of working on the code, but it is unlikely that enforcing syntactic consistency will harm their productivity, as they are, in general, able to read and write a wide variety of styles.
- What is important is to know where in general, on the poet-philosopher spectrum, the programming team maintaining the code lies, so you can choose whether or not to enforce syntactic consistency in the library.
- RuboCop has a solution for this, which is the configuration parameter, AllCops:DisabledByDefault. Using this configuration parameter, you can only enable the syntax checks that you believe will be helpful for your library.
- The argument against arbitrary limits is simple: if there was a better approach that was within the limit, it would have already been used. The argument for arbitrary limits is also simple: the programmer is too stupid, ignorant, or inexperienced to know what the best approach is, and an arbitrary limit can reduce the possible damage, by forcing the programmer to restructure their code. A simple counterargument to that is if the programmer is too stupid, ignorant, or inexperienced to do things correctly within the limit, why do we trust them to split the code intelligently into smaller parts to get around the limit?
- In short, don't assume that RuboCop knows better than you do and keep the default arbitrary limits. Use your judgment on what API makes sense for your library.
    - 💭 — OMG. This whole chapter is ✨

Chapter 8: Designing for Extensibility

- A library based on a plugin system, even if the library itself is quite large, will generally have a small enough core that a new user can read through the core of the library within a few hours and have a good idea about how it works.
- libraries designed around plugin systems tend to be significantly faster. The startup time for libraries that only load the core of the library by default is often significantly faster than startup times for monolithic libraries.

Chapter 9: Metaprogramming and When to Use It

- The main difference between programming and metaprogramming in Ruby is conceptual.
- It would definitely suck to have to define accessor methods this verbosely. It's hard to believe, but there are programming languages where you still have to do that, even some that were originally released after Ruby.
    - 💭 — Haha
- If this is the only place you are using methods like this in your library or application, it's best to metaprogram directly in the class to avoid unnecessary indirection and keep the definitions local to the class
- singleton_class.extend HashAccessor
- extend is shorthand for singleton_class.include,
- Ruby will support as many levels of singleton classes as you need for your metaprogramming.
- let's say you are working on a module named Rusty, for writing rusty code. Rusty code strives to be one-third more efficient than Ruby code by defining methods using only two characters, fn, instead of the normal three you need in Ruby (def).
    - 💭 — I got that reference 🦀
- if you are doing metaprogramming in Ruby, the block-based approach is the approach you want to reach for first. However, there is another approach, a dangerous approach, called the eval-based approach. With the eval-based approach, instead of metaprogramming with Ruby objects, you metaprogram by building a string of Ruby code.
- In addition to much clunkier code, the eval-based approach is far less safe. Because eval evaluates arbitrary Ruby code, it can do things such as delete every file you have access to.
    - 💭 — It make me remember of a `eval(params)` I once saw
- if you absolutely must have the fastest possible performance and need to deal with untrusted data, you can use a whitelisting approach.
- `Baz.class_eval "def #{ name}; :foo end" That's because the value of the name variable could be "x; end; File.delete(__FILE__); def y; `", as some users might just think it is funny to delete the file running the code.
- However, another approach is to create a subclass of BasicObject and override method_missing in it, then instance_exec the block in the context of an instance of that BasicObject subclass. This is shown in the following code block: `def words(& block) array = [] Class.new( BasicObject) do define_method(: method_missing) do | meth, *| array < < meth end end.new.instance_exec(& block) array.reverse end`
- Defining actual methods is much better for performance. In addition, with actual methods, calling Struct50. instance_methods returns all of the methods, which is much better when you need to figure out which methods instances of the class respond to.
    - Dont use method missing unless it's really needed
- While it's almost always better to use define_method over method_missing when you know the valid methods upfront, there is a case where you still want to use method_missing. That is when you have a very large number of valid methods, say over 1,000. The reason to prefer method_missing, in that case, is that each method defined with define_method has a cost in terms of memory used, with a related performance cost for the garbage collector. With method_missing, there are no separate methods, so there is no memory or garbage collector cost.

Chapter 10: Designing Useful Domain-Specific Languages

- In this section, you learned about DSLs for configuring a library, using a real-world example from RSpec.
    - Great examples and explanation
- After programmer friendliness, probably the main reason you see so many DSLs in Ruby is the simplicity of implementation.
    - 💭 — Which is good but also bad IMO
- The best cases for DSL use in Ruby are where using the DSL makes the library easier to maintain and makes it simpler for a user to use the library.
- implementing a DSL just to reduce code verbosity is often a bad idea. Try hard to think of alternative approaches to using a DSL if you are using it just to reduce code verbosity.

Chapter 11: Testing to Ensure Your Code Works

- Testing is more critical in Ruby than in most other programming environments, partly because of the power and flexibility Ruby offers, and also because of Ruby's dynamic typing.
- Ruby programs are also generally not compiled until you try to run them, so even simple syntax errors will not be caught unless you try to load the related code. Combined, these two qualities make testing in Ruby more critical than in many other programming languages.
- Ruby does ship with the ability to just compile programs and not actually run them, it's just not commonly used. This feature is very useful with large libraries if you just want to check that there are no syntax errors in any of the source files. You can access this feature using the -c command-line option, such as ruby -c file_name.
- Scanning all files with ruby -wc is a great idea, but it only does some fairly basic checks on the file.
- either because they are too difficult or the tests or specifications have bugs and it is actually impossible to have correct answers returned due to missing input.
- The main issue with TAD is you can end up implementing a feature that works, but the interface to use it is hard to use or testing it is difficult. If you use a TAD approach, you need to realize this while you are writing the feature, and constantly remind yourself to think of how the user will use the feature, make sure to keep that usage as simple as you can and avoid unnecessary complexity.
- TAD approach focused on implementing a design, and not simply on passing a test. Just as you need to focus on the user experience and not just use the easiest implementation approach with TAD, you need to focus on the user experience and not just use the easiest testing approach with TDD.
- If non-programmers will not be assisting the programming team by writing specifications, BDD generally ends up being mostly wasted effort.
- tests are designed to help avoid and debug problems in library code. The more abstractions you use in your test code, the more likely you are to be debugging your test code instead of your library code.
- Once you reach a certain level of test abstraction, a failing test gives you no confidence about whether the bug is in the library or the tests themselves, and that is a bad situation to be in.
- avoid abstracting the parts of the specs that are performing the actual testing, as opposed to setting up for the actual testing.
- Slow and reliable tests are in general much better than fast tests that break without reason (false positives) and don't catch actual breakage (false negatives).
- Realizing that 100% coverage means nothing
- This brings us to the critical concept in regards to code coverage, which is that 100% coverage means nothing. The corollary to this concept is even more important, and that is that less than 100% coverage means something. Having 100% code coverage does not tell you anything, but having less than 100% code coverage tells you something. At the very least, having less than 100% code coverage means that there are certain parts of your code that you are not testing at all.

Chapter 12: Handling Change

- Removing features sounds like a bad thing for most new programmers, but it is probably one of the happiest moments for experienced programmers.
- Things become more complicated if you still need to call the method internally until it is removed. In this case, it's best to have an internal private alias to the method that doesn't raise a warning, and change all internal callers to use it:
- If the feature being removed is a constant and not a method, you can use deprecate_constant:
- in Ruby 3, deprecation warnings are not shown by default, even when we have $ VERBOSE = true. You need to use the -w flag when starting Ruby,

Chapter 13: Using Common Design Patterns

- While design patterns are not as necessary in Ruby as they are in less powerful languages, they are still a useful tool to have in your toolbox.
- The null object pattern should only be used if you can always or almost always treat the null object as a real object.
- In general, it is best to avoid the null object pattern in performance-sensitive code, even if it would otherwise be a good fit.
- With the adapter pattern, you write an adapter with the interface you want to use that wraps the objects that use a different interface.
- The strategy pattern is almost the same as the adapter pattern, except that you don't wrap another object. Instead, you provide different implementations, or strategies, for performing the same operation.

Chapter 14: Optimizing Your Library

- no language that is as dynamic, easy to use, and programmer-friendly as Ruby is as fast as Ruby.
- If you are using Ruby, it is likely in an environment where the flexibility and ease of use of Ruby outweigh the potential performance issues.
- There are a couple of good options for profiling libraries in Ruby, ruby-prof and stackprof. There are other profilers for Ruby, such as rack-mini-profiler and rbspy, but they mostly focus on profiling production applications and not libraries,
- No code is faster than no code.
    - 💭 — ???. This sentence was quite confusing to me.
- With the important realization that the methods are idempotent, you could reoptimize the approach where you were optimizing for performance by caching results:
    - That's one of the arguments that make funcional Programming faster
- The most important aspect of a benchmark is how well the benchmark reflects how the library is actually used. When possible, try to create benchmarks that are actual production use cases or similar to production use cases.
- If you find any code that can be moved from the initialize method to a separate method, moving the code to the separate method will improve performance in most cases.
- the [] method is better optimized internally by Ruby's virtual machine, for array and hash.
    - 💭 — ore than .first and .last, but that's a micro optimization
- If you are going to use these types of micro-optimizations, recheck that they are still faster with each new Ruby release.

Chapter 15: The Database Is Key

- The database is where all of an application's data is stored, and in most cases, an application's data is more important than the application itself.
- An application written in Ruby using intelligent database design and indexing will often outperform an application written in C with less intelligent database design and improper indexing.
- If you value your data at all and your database has any structure at all, a schemaless document database is usually a poor choice that you will end up regretting later when you discover anomalies in your data, far too late to fix them. Most key-value databases are too limited for the use of structured data unless they are treated as document databases, in which case they have the same issues as document databases. Unless you have studied and have had experience with graph databases and are sure they are the best database type for your application, they probably aren't. Similarly, unless you have very specialized needs, a specialized database such as a time series database is probably the wrong choice for your application.
    - 💭 — That's a great definition of how to choose a database
- PostgreSQL is the most robust open source database and has greater support for advanced data types and indexes. It is possible to be successful with MySQL, but you need to be careful to configure MySQL in a way that will not result in silent data loss.
- If you must use SQLite, make sure to use CHECK constraints as much as possible to actually enforce database types.
- Denormalizing your database should only be done as a form of performance optimization.
- When profiling and benchmarking, try to use a copy of the production database, because database performance is often dependent on what data is being stored in the database.
- Remember that denormalizing is always a tradeoff to get increased performance in particular cases while making other cases more difficult.
- Do not blindly add created_at and updated_at columns to every table, only add them to the tables that really need both. By limiting the size of your database tables, you'll make access to those tables faster. Remember that you can always add columns later if you determine you really need the information.
    - 💭 — Not sure if I agree. There were times I missed having a created or updated at and they were not there. Remember you can also always delete data 🤷‍♂️
- If you are going to be accessing tracks by release date, but then showing them in order by name, you'll want a composite index on the release_date column and the name column in that order, because that will allow the database to avoid a separate sort step when retrieving the data.
- When adding an index on a single column, always consider whether it is a better idea to add a composite index with that column as the first column and an additional column added after. Such composite indexes are in general more flexible and can optimize more types of queries, though they may not optimize a specific query as well.
- You should avoid any feature that does not allow the enforcement of referential integrity, such as polymorphic associations. There are only rare exceptions where referential integrity shouldn't be enforced with foreign keys, such as audit logs stored in the database where you need to allow the deletion of rows but still retain the audit logs.
- If it is possible, it is much faster to write a database function for performing the same operation, and issue a single UPDATE statement to update all rows at once. This is usually at least one order of magnitude faster, and sometimes multiple orders of magnitude faster.
    - 💭 — Yes, but faster is not the only thing to consider whin developing software. Wnat about versioning? Discoverability? Maintenance? Tests? etc.
- Do the concatenation in the database via a query such as this: # SELECT first_name | | ' ' | | last_name FROM names; The preceding command is going to be significantly faster than a query such as this: # SELECT first_name, last_name FROM names
    - 💭 — Yes, but it always depends on the app. Is the database the bottleneck?
- if you have a table of employees, and you want to enforce that the username column for the employee is unique, but only for active employees, you cannot just add a unique index on the username column. This is because if a previous employee had that user name 10 years ago, a new employee wouldn't be able to use it. For this case, use a partial unique index, where you enforce uniqueness on username, but only when the active column is true.
- constraints as the primary method of enforcing data consistency, with model validations only being used to provide nicer error messages. The advantage of Sequel's approach is that if you modify the database without going through the model layer, data consistency issues will still be caught by the database.

Chapter 17: Robust Web Application Security

- You should never try to forbid what is known to be bad (the blacklist approach to security). Instead, you should only allow what you know to be good (the whitelist approach).
