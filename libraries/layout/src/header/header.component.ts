import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'jar-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JarHeader {
  @Input() appTitle = '';
  @Input() appIcon = '';
  @Input() initialPage = '';

  constructor(@Inject(DOCUMENT) private document: Document) {}

  public sidebarToggle(): void {
    this.document.body.classList.toggle('toggle-sidebar');
  }
}
