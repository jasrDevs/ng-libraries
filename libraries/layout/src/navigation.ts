import { FormControl } from '@angular/forms';

export const LAYOUT_RESOURCES_LOADED = new FormControl(false);

export interface JarLaySnavItems {
  type: 'link' | 'dropdown';
  name: string;
  url?: string;
  dropdownLinks?: SnavDropdownLink[];
  authorities?: any | any[];
  disableOnContexts?: any | any[];
}

interface SnavDropdownLink {
  name: string;
  url: string;
  urlIsNotAutoCompleted?: boolean;
  authorities?: any | any[];
  disableOnContexts?: any | any[];
}
