//heppers
const isEmpty = (arg) => {
  let check_array;
  if (Array.isArray(arg)) {
    check_array = arg.flat();
  } else {
    check_array = [arg];
  }
  check_array.forEach((el) => {
    if (
      !!el === false ||
      (typeof el === "string" && el.trim().length === 0) ||
      (Array.isArray(el) && el.join().trim().length === 0) ||
      (typeof el === "object" && Object.keys(el).length === 0)
    ) {
      return false;
    }
  });
  return true;
};

const isHTMLElement = (element) => {
  if (element instanceof HTMLElement) {
    return true;
  }
  return false;
};

// functions
const appendToDOM = (element, container_element) => {
  const df = new DocumentFragment();
  if (Array.isArray(element)) {
    df.append(...element);
  } else {
    df.append(element);
  }
  container_element.append(df);
};

const appendFromStrToDOM = (string_content, container_element) => {
  container_element.insertAdjacentHTML("beforeend", string_content);
};

const prependStrToDOM = (string_content, container_element) => {
  container_element.insertAdjacentHTML("afterbegin", string_content);
};

const removeElement = (target_element) => {
  target_element.parentNode.removeChild(target_element);
};

const removeElementsBySelector = (selector) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.parentNode.removeChild(el);
  });
};

const removeAllChildren = (elementToClear) => {
  elementToClear.innerHTML = "";
};

export  {
  appendToDOM,
  appendFromStrToDOM,
  prependStrToDOM,
  removeElement,
  removeElementsBySelector,
  removeAllChildren,
  isEmpty,
  isHTMLElement,
};
