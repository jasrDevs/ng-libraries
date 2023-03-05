import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    data: { title: 'Home', breadcrumb: 'Home' },
  },
  {
    path: 'forms',
    loadChildren: () => import('./modules/forms/forms.module').then(m => m.FormsModule),
    data: { title: 'Forms', breadcrumb: 'Forms' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
