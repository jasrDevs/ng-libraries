import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JarSidenav } from './sidenav/sidenav.component';
import { JarSidebar } from './sidebar/sidebar.component';
import { JarHeader } from './header/header.component';
import { JarFooter } from './footer/footer.component';
import { JarLayout } from './layout.component';
import {
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
} from '@jasr-devs/ng-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true,
};

@NgModule({
  declarations: [JarSidebar, JarSidenav, JarLayout, JarHeader, JarFooter],
  imports: [CommonModule, PerfectScrollbarModule, RouterModule],
  exports: [JarLayout],
  providers: [{ provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }],
})
export class JarLayoutModule {}
