import { Component } from '@angular/core';

import { MyPresetOneComponent } from './my-preset-one/my-preset-one.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  presetOne = MyPresetOneComponent;
}
