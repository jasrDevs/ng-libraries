import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'jar-sidebar',
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JarSidebar {}
