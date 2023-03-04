import { FormControl } from '@angular/forms';

export const LAYOUT_RESOURCES_LOADED = new FormControl(false);

export interface JarBrandingSidenav {
  icon?: string;
  name?: string;
}

export interface JarLaySnavItems {
  type: 'link' | 'accordion';
  name: string;
  url?: string;
  accordionLinks?: SnavAccordionLink[];
  authorities?: any | any[];
  disableOnContexts?: any | any[];
}

interface SnavAccordionLink {
  name: string;
  url: string;
  urlIsNotAutoCompleted?: boolean;
  authorities?: any | any[];
  disableOnContexts?: any | any[];
}
