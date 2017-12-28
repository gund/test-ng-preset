import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyPresetDefaultComponent } from './my-preset-default/my-preset-default.component';
import { MyPresetOneComponent } from './my-preset-one/my-preset-one.component';
import { MyModule } from './my/my.module';

@NgModule({
  imports: [
    BrowserModule,
    MyModule.withPreset(MyPresetDefaultComponent),
  ],
  declarations: [
    AppComponent,
    MyPresetOneComponent,
    MyPresetDefaultComponent,
  ],
  entryComponents: [MyPresetOneComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
