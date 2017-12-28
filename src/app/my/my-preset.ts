import { ComponentRef, InjectionToken, TemplateRef, Type } from '@angular/core';

export interface MyPreset {
  headerTpl: TemplateRef<any>;
  contentTpl: TemplateRef<any>;
  footerTpl: TemplateRef<any>;
}

export interface MyPresetToken extends Type<MyPreset> {
  compRef?: ComponentRef<MyPreset>;
}

export const MY_PRESET_TOKEN = new InjectionToken<MyPresetToken>('MyPreset');
