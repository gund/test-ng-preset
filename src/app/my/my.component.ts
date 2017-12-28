import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ContentChild,
  Injector,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  Type,
} from '@angular/core';

import { MyPreset } from './my-preset';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnChanges {

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
      this._presetCompRef && this._presetCompRef.instance.headerTpl;
  }

  get overrideContentTpl() {
    return this.contentTpl || this.contentContentTpl ||
      this._presetCompRef && this._presetCompRef.instance.contentTpl;
  }

  get overrideFooterTpl() {
    return this.footerTpl || this.contentFooterTpl ||
      this._presetCompRef && this._presetCompRef.instance.footerTpl;
  }

  private _presetCompRef: ComponentRef<MyPreset> | null = null;

  constructor(
    private compResolver: ComponentFactoryResolver,
    private injector: Injector,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.presetType) {
      this._resolvePresetComponent();
    }
  }

  private _resolvePresetComponent() {
    if (this._presetCompRef) {
      this._presetCompRef.destroy();
      this._presetCompRef = null;
    }

    if (!this.presetType) {
      return;
    }

    const presetFactory = this.compResolver.resolveComponentFactory(this.presetType);
    this._presetCompRef = presetFactory.create(this.injector);
  }

}
