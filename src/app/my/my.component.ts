import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ContentChild,
  Injector,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
  Type,
} from '@angular/core';

import { MY_PRESET_TOKEN, MyPreset } from './my-preset';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit, OnChanges {

  private static globalPresetCompRef: ComponentRef<MyPreset> | undefined;

  @Input() headerTpl: TemplateRef<any>;
  @Input() contentTpl: TemplateRef<any>;
  @Input() footerTpl: TemplateRef<any>;
  @Input() presetType: Type<MyPreset>;

  @ContentChild('headerTpl', { read: TemplateRef })
  contentHeaderTpl: TemplateRef<any>;

  @ContentChild('contentTpl', { read: TemplateRef })
  contentContentTpl: TemplateRef<any>;

  @ContentChild('footerTpl', { read: TemplateRef })
  contentFooterTpl: TemplateRef<any>;

  get overrideHeaderTpl() {
    return this.headerTpl || this.contentHeaderTpl ||
      this._getCompPropFrom(this._presetCompRef, 'headerTpl') ||
      this._getCompPropFrom(this._globalPresetCompRef, 'headerTpl');
  }

  get overrideContentTpl() {
    return this.contentTpl || this.contentContentTpl ||
      this._getCompPropFrom(this._presetCompRef, 'contentTpl') ||
      this._getCompPropFrom(this._globalPresetCompRef, 'contentTpl');
  }

  get overrideFooterTpl() {
    return this.footerTpl || this.contentFooterTpl ||
      this._getCompPropFrom(this._presetCompRef, 'footerTpl') ||
      this._getCompPropFrom(this._globalPresetCompRef, 'footerTpl');
  }

  private _presetCompRef: ComponentRef<MyPreset> | undefined;
  private _globalPresetToken = this.injector.get(MY_PRESET_TOKEN, null);

  private get _globalPresetCompRef() {
    return this._globalPresetToken && this._globalPresetToken.compRef;
  }

  constructor(
    private compResolver: ComponentFactoryResolver,
    private injector: Injector,
  ) { }

  ngOnInit() {
    if (this._globalPresetToken && !this._globalPresetToken.compRef) {
      this._globalPresetToken.compRef = this._createCompFromType(this._globalPresetToken);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.presetType) {
      this._resolvePresetComponent();
    }
  }

  private _resolvePresetComponent() {
    if (this._presetCompRef) {
      this._presetCompRef.destroy();
    }

    this._presetCompRef = this._createCompFromType(this.presetType);
  }

  private _createCompFromType<T>(type?: Type<T>) {
    return type && this.compResolver
      .resolveComponentFactory(type)
      .create(this.injector);
  }

  private _getCompPropFrom<T>(
    ref?: ComponentRef<T>,
    prop?: keyof T,
  ) {
    return ref && prop && ref.instance[prop];
  }

}
