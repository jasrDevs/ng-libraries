import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'jar-sidebar',
  styleUrls: ['./sidebar.component.scss'],
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JarSidebar {}
