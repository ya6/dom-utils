export function appendToDOM(element: HTMLElement | HTMLElement[] | string | string[], container_element: HTMLElement): void;
export function appendFromStrToDOM(string_content: string, container_element: HTMLElement): void;
export function prependStrToDOM(string_content: string, container_element: HTMLElement): void;
export function removeElement(target_element: HTMLElement): void;
export function removeElementsBySelector(selector: string): void;
export function removeAllChildren(elementToClear: HTMLElement): void;
export function isEmpty(arg: any): boolean;
export function isHTMLElement(element: any): boolean;
