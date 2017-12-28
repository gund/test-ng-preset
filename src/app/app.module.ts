import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyPresetOneComponent } from './my-preset-one/my-preset-one.component';
import { MyModule } from './my/my.module';

@NgModule({
  imports: [
    BrowserModule,
    MyModule, // This is normal use-case
    // MyCustomModule.withPreset(MyPresetOneComponent), // Uncomment this
    // to override default preset
  ],
  declarations: [
    AppComponent,
    MyPresetOneComponent,
  ],
  entryComponents: [MyPresetOneComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
