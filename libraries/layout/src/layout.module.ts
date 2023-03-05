import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RoutePartsService } from './services/route-parts.service';
import { JarBreadcrumb } from './breadcrumb/breadcrumb.component';
import { JarSidebar } from './sidebar/sidebar.component';
import { JarHeader } from './header/header.component';
import { JarFooter } from './footer/footer.component';
import { ValidateAccessPipe } from './services';
import { JarLayout } from './layout.component';

@NgModule({
  declarations: [JarSidebar, JarBreadcrumb, JarLayout, JarHeader, JarFooter, ValidateAccessPipe],
  imports: [CommonModule, RouterModule],
  exports: [JarLayout],
  providers: [RoutePartsService],
})
export class JarLayoutModule {}
