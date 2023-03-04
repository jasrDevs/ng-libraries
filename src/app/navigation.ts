import { JarBrandingSidenav, JarLaySnavItems } from 'libraries/layout';

export enum Authorities {
  HOME = '0000',
  FORMS = '0001',
  ELEMENTS = '0002',
  LAYOUTS = '0003',
  EDITORS = '0004',
}

export const LAY_CONFIG: JarBrandingSidenav = {
  icon: 'favicon.ico',
  name: 'Grupo Clínica Médicos',
};

export const SIDE_NAV: JarLaySnavItems[] = [
  {
    type: 'link',
    name: 'Dashboard',
    url: 'home/dashboard',
    authorities: [Authorities.HOME],
  },
  {
    type: 'accordion',
    name: 'Forms',
    url: 'forms',
    authorities: [Authorities.FORMS],
    accordionLinks: [
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
