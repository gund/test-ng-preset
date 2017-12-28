import { CommonModule } from '@angular/common';
import { ANALYZE_FOR_ENTRY_COMPONENTS, forwardRef, ModuleWithProviders, NgModule, Type } from '@angular/core';

import { MY_PRESET_TOKEN, MyPreset } from './my-preset';
import { MyComponent } from './my.component';

@NgModule({
  imports: [CommonModule],
  exports: [MyComponent],
  declarations: [MyComponent],
})
export class MyModule {

  static withPreset(presetComponent: Type<MyPreset>): ModuleWithProviders {
    return {
      ngModule: MyModule,
      providers: [
        { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: presetComponent, multi: true },
        { provide: MY_PRESET_TOKEN, useValue: forwardRef(() => presetComponent) },
      ],
    };
  }

}
