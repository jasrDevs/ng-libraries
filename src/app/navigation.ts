import { JarLaySnavItems } from '@jasr-devs/ng-layout';

export enum Authorities {
  HOME = '0000',
  FORMS = '0001',
  ELEMENTS = '0002',
  LAYOUTS = '0003',
  EDITORS = '0004',
}

export const SIDE_NAV: JarLaySnavItems[] = [
  {
    type: 'link',
    name: 'Home',
    url: 'home',
    authorities: [Authorities.HOME],
  },
  {
    type: 'dropdown',
    name: 'Forms',
    url: 'forms',
    authorities: [Authorities.FORMS],
    dropdownLinks: [
      {
        name: 'Form Elements',
        url: 'form-elements',
        authorities: [Authorities.ELEMENTS],
        disableOnContexts: ['BOGOTA'],
      },
      {
        name: 'Form Layouts',
        url: 'form-layouts',
        authorities: [Authorities.LAYOUTS],
        disableOnContexts: ['MEDELLIN'],
      },
      {
        name: 'Form Editors',
        url: 'form-editors',
        authorities: [Authorities.EDITORS],
        disableOnContexts: ['CALI'],
      },
    ],
  },
];
