import { Component, OnInit } from '@angular/core';
import { LAYOUT_RESOURCES_LOADED } from '@jasr-devs/ng-layout';
import { Authorities, SIDE_NAV } from './navigation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public sidenav = SIDE_NAV;
  public authorities: any = [Authorities.HOME, Authorities.FORMS, Authorities.ELEMENTS];
  public context: any = 'MEDELLIN';

  public includeBreadcrumbs = false;

  public toggleTheme(): void {
    document.body.classList.toggle('dark-theme');
  }

  public toggleBreadcrumbs() {
    if (this.includeBreadcrumbs) this.includeBreadcrumbs = false;
    else this.includeBreadcrumbs = true;
  }

  public toggleSecurity() {
    if (this.authorities) {
      this.authorities = undefined;
      this.context = undefined;
    } else {
      this.authorities = [Authorities.HOME, Authorities.FORMS, Authorities.ELEMENTS];
      this.context = 'MEDELLIN';
    }
  }

  public ngOnInit(): void {
    setTimeout(() => {
      LAYOUT_RESOURCES_LOADED.setValue(true);
    }, 1000);
  }
}
