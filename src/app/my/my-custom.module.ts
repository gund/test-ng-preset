import { ANALYZE_FOR_ENTRY_COMPONENTS, forwardRef, ModuleWithProviders, NgModule, Type } from '@angular/core';

import { MyComponentModule } from './my-component.module';
import { MY_PRESET_TOKEN, MyPreset } from './my-preset';

@NgModule({
  imports: [MyComponentModule],
  exports: [MyComponentModule],
})
export class MyCustomModule {

  static withPreset(presetComponent: Type<MyPreset>): ModuleWithProviders {
    return {
      ngModule: MyCustomModule,
      providers: [
        { provide: MY_PRESET_TOKEN, useValue: forwardRef(() => presetComponent) },
        { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: presetComponent, multi: true },
      ],
    };
  }

}
