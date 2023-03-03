import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'jar-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JarHeader {}
