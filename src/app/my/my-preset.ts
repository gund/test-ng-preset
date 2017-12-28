import { InjectionToken, TemplateRef, Type } from '@angular/core';

export interface MyPreset {
  headerTpl: TemplateRef<any>;
  contentTpl: TemplateRef<any>;
  footerTpl: TemplateRef<any>;
}

export const MY_PRESET_TOKEN = new InjectionToken<Type<MyPreset>>('MyPreset');
