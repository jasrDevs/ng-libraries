import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JarSidebar } from './sidebar/sidebar.component';
import { JarHeader } from './header/header.component';
import { JarFooter } from './footer/footer.component';
import { JarLayout } from './layout.component';
import { RoutePartsService } from './services/route-parts.service';
import { ValidateAccessPipe } from './services';

@NgModule({
  declarations: [JarSidebar, JarLayout, JarHeader, JarFooter, ValidateAccessPipe],
  imports: [CommonModule, RouterModule],
  exports: [JarLayout],
  providers: [RoutePartsService],
})
export class JarLayoutModule {}
