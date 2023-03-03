import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'jar-layout',
  templateUrl: './layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JarLayout {}
