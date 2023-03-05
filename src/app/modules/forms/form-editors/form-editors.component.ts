import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-form-editors',
  templateUrl: './form-editors.component.html',
  styleUrls: ['./form-editors.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormEditorsComponent {

}
