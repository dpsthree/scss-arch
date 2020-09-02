import { Component } from '@angular/core';

@Component({
  selector: 'app-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.scss']
})
export class ComboBoxComponent {
  strings = ['China', 'Germany', 'Greece', 'Italy', 'Japan', 'Portugal', 'Russia', 'Spain', 'UK', 'US'];
}
