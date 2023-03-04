import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsRoutingModule } from './forms-routing.module';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { FormEditorsComponent } from './form-editors/form-editors.component';

@NgModule({
  imports: [CommonModule, FormsRoutingModule],
  declarations: [FormElementsComponent, FormLayoutsComponent, FormEditorsComponent],
})
export class FormsModule {}
