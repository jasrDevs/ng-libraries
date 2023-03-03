import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import initLayout from './layout.bundle';

@Component({
  selector: 'jar-layout',
  templateUrl: './layout.component.html',
  styles: [
    `
      .jar-layout__ng-content-container {
        min-height: calc(100vh - 90px);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JarLayout implements OnInit {
  public ngOnInit(): void {
    initLayout;
  }
}
