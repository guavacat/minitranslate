jQuery.minitranslate
====================

A lightweight way to change words into other words.

[![Code Climate](https://codeclimate.com/github/brycedorn/jQuery.minitranslate.png)](https://codeclimate.com/github/brycedorn/jQuery.minitranslate)

[bryce.io/minitranslate](http://bryce.io/minitranslate)

[cdnjs/libraries/minitranslate](http://cdnjs.com/libraries/minitranslate)


## Installation

    $ npm install minitranslate

## Features
 * WYSIWYG word-replacement translator
 * RegExp matching and jQuery replacement
 * Simple library in `mt-lib.js`:
  ```java
  var mt_lib = [
    {w : "Hello", r : "Goodbye"},
    {w : "World", r : "Mars"}
  ];
  ```

 * Dynamic input translation:
  ```html
  <input id="mt-input"/>
  <input id="mt-output"/>
  ```
   * Add class `.mt-patient` to `#mt-input` to translate only once `#mt-button` is clicked

 * Static content translation:

  ```html
  <div id="mt-translate"/>
  ```

 * Case insensitive up to input word length:
   * hElLo => wOrLd
   * bYe => gOodbye


 * Dumb punctuation, currently appends to translation
