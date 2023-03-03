import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JarLayoutModule } from 'libraries/layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserAnimationsModule, JarLayoutModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
