import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyPresetOneComponent } from './my-preset-one/my-preset-one.component';
import { MyComponent } from './my/my.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    MyPresetOneComponent,
  ],
  imports: [
    BrowserModule,
  ],
  entryComponents: [MyPresetOneComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
