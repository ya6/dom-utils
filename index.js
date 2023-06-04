//errors handle
const _throwEmpty = (elements_array) => {
  elements_array.forEach((el) => {
    if (
      !!el === false ||
      (typeof el === "string" && el.trim().length === 0) ||
      (Array.isArray(el) && el.join().trim().length === 0) ||
      (typeof el === "object" && Object.keys(el).length === 0)
    ) {
      throw new TypeError("dom-utils: the element is empty");
    }
  });
};

const throwIfNotHTMLElement = (element) => {
  let check_array;
  if (!Array.isArray(element)) {
    check_array = [element];
  } else {
    check_array = element.flat();
  }

  _throwEmpty(check_array);

  check_array.forEach((el) => {
    if (!el instanceof HTMLElement) {
      throw new TypeError("dom-utils: the variable is not an HTML element");
    }
  });
};

// functions
const appendToDOM = (arr_of_elements, target_element) => {
  throwIfNotHTMLElement([arr_of_elements, target_element]);

  const df = new DocumentFragment();
  if (Array.isArray(arr_of_elements)) {
    df.append(...arr_of_elements);
  } else {
    df.append(arr_of_elements);
  }
  target_element.append(df);
};

const removeElement = (elements_array) => {
  throwIfNotHTMLElement(elements_array);

  if (Array.isArray(elements_array)) {
    elements_array.forEach((el) => {
      el.parentNode.removeChild(el);
    });
  } else {
    elements_array.parentNode.removeChild(elements_array);
  }
};

const removeElements = (selector) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.parentNode.removeChild(el);
  });
};

const removeAllChildren = (elementToClear) => {
  if (elementToClear !== null) {
    elementToClear.innerHTML = "";
  }
};

const appendFromStrToDOM = (stringContent, currentElement) => {
  if (currentElement) {
    currentElement.insertAdjacentHTML("beforeend", stringContent);
  }
};

const prependStrToDOM = (stringContent, currentElement) => {
  if (currentElement) {
    currentElement.insertAdjacentHTML("afterbegin", stringContent);
  }
};

module.exports = { appendToDOM, removeElement, removeElements, removeAllChildren, appendFromStrToDOM, prependStrToDOM, throwIfNotHTMLElement };
