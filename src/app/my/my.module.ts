import { forwardRef, NgModule } from '@angular/core';

import { MyPresetDefaultComponent } from './my-preset-default/my-preset-default.component';
import { MyComponentModule } from './my-component.module';
import { MY_PRESET_TOKEN } from './my-preset';

@NgModule({
  imports: [MyComponentModule],
  exports: [MyComponentModule],
  declarations: [MyPresetDefaultComponent],
  entryComponents: [MyPresetDefaultComponent],
  providers: [
    { provide: MY_PRESET_TOKEN, useValue: forwardRef(() => MyPresetDefaultComponent) }
  ],
})
export class MyModule { }
