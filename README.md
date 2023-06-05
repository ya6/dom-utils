# dom-utils ![GitHub](https://img.shields.io/github/license/ya6/dom-utils)

## Description
This package provides utility functions for manipulating the DOM, including adding both elements and arrays of elements, removing elements, cleaning an element from its children, and more.
DocumentFragment is used for performance.

## Install
```
npm install @ya6/dom-utils
```
```
yarn add @ya6/dom-utils
```
## Usage
```
import { appendToDOM } from '@ya6/dom-utils'
```
or
```
const { appendToDOM } = require('@ya6/dom-utils')
```
use dom-utils.js for HTML file
```
<script src="dom-utils.js></script>
```
## Functions

### appendToDOM(element, container_element)
	Adds an element or an array of elements to a container element at the end.
	Strings are inserted as text content.

	Parameters
  	- element (string | HTMLElement | HTMLElement[])
	- container_element (HTMLElement)

	Returns
	- void


### appendFromStrToDOM(string_content, container_element)
	Appends an HTML string or a string of text as an element to a container in the DOM.

	Parameters
	- string_content (string)
	- container_element (HTMLElement)

	Returns
	- void


### prependStrToDOM(string_content, container_element)
	Prepends an HTML string or a string of text as an element to the beginning of a container in the DOM.

	Parameters
	- string_content (string)
	- container_element (HTMLElement)

	Returns
	- void


### removeElement(target_element)
	Removes a specified element from the DOM.

	Parameters
	- target_element (HTMLElement)

	Returns
	- void
### removeElementsBySelector(selector)
	Removes all elements by selector from the DOM.

	Parameters
	- selector (string) - '.my-class'

	Returns
	- void


### removeAllChildren(target_element)
	Removes all the child elements of a specified element from the DOM.

	Parameters
	- target_element (HTMLElement)

	Returns
	- void

### isEmpty(arg)
	A helper that checks whether an element is empty or has content,
	empty arrays and objects are considered empty.

	Parameters
	- arg (any | any[])

	Returns
	- true | false

### isHTMLElement(arg)
	A helper that checks if the argument is a HTML element.

	Parameters
	- arg (any)

	Returns
	- true | false



## Bug Reports and Feature Requests

If you have found a bug, have a suggestion for improvement, or are experiencing any issues with using this library, please create a new Issue on GitHub.

[**Create a New Issue**](https://github.com/ya6/dom-utils/issues/new)

We appreciate your participation and assistance in improving this library. Your bug reports and feature requests directly contribute to its development and quality.


## License
@ya6/dom-utils is [MIT licensed](https://github.com/ya6/dom-utils/blob/main/LICENSE)