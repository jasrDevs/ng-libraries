import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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
}
