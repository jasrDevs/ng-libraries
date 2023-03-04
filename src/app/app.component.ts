import { Component, OnInit } from '@angular/core';
import { LAYOUT_RESOURCES_LOADED } from 'libraries/layout';
import { Authorities, SIDE_NAV } from './navigation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public sidenav = SIDE_NAV;
  public authorities = [Authorities.HOME, Authorities.FORMS, Authorities.ELEMENTS];
  public context = 'MEDELLIN';

  public ngOnInit(): void {
    setTimeout(() => {
      LAYOUT_RESOURCES_LOADED.setValue(true);
    }, 1000);
  }
}
