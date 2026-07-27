/// <reference types="astro/client" />

declare const Chart: any;

interface Element {
  checked?: boolean;
  dataset: DOMStringMap;
  selectedIndex?: number;
  style: CSSStyleDeclaration;
  value?: string;
}

interface EventTarget {
  checked?: boolean;
  value?: string;
}
