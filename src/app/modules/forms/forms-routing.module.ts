import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEditorsComponent } from './form-editors/form-editors.component';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';

const routes: Routes = [
  {
    path: 'form-editors',
    component: FormEditorsComponent,
    data: { title: 'Editors', breadcrumb: 'Editors' },
  },
  {
    path: 'form-elements',
    component: FormElementsComponent,
    data: { title: 'Elements', breadcrumb: 'Elements' },
  },
  {
    path: 'form-layouts',
    component: FormLayoutsComponent,
    data: { title: 'Layouts', breadcrumb: 'Layouts' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsRoutingModule {}
