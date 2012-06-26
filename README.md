CssClass.js
===========

Utility methods for manipulating the className property of HTML elements.

The code is a slightly modified version from *JavaScript: The Definitive Guide*, by David Flanagan. Copyright 2006 O'Reilly Media, Inc., 978-0-596-10199-2.

Modifications from original:

* Functions only accept Elements, not strings representing an element id
* The regexp for replacing css classes has been modified to remove duplicates without leaving unwanted whitespace

The Jasmine BDD framework is included in the lib directory. The test runner is a modified example from the standalone download. See the MIT License in the lib directory for details.

The original works in this project are the specifications in spec/CssClassSpec.js for which the following notice applies.

Copyleft 2012 Tim Heighes. Licensed under the [WTFPL](http://sam.zoy.org/wtfpl/).