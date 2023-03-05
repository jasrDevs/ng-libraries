import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { JarLaySnavItems } from '../navigation';

@Component({
  selector: 'jar-sidebar',
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JarSidebar {
  @Input() authorities: any | any[];

  @Input() context: any | any[];

  @Input() sidenav: JarLaySnavItems[] = [];

  constructor(@Inject(DOCUMENT) private document: Document) {}

  public sidebarToggle(): void {
    this.document.body.classList.toggle('toggle-sidebar');
  }

  public closeAtClicOnMobiles() {
    if (window.matchMedia(`(max-width:1199px)`).matches) {
      this.sidebarToggle();
    }
  }
}
