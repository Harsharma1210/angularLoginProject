import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [ //Any components being used within the module will be placed here

  ],
  imports: [ //Any modules being imported must be put within this array
    AppComponent,
    BrowserModule
  ],
  providers: [
    provideHttpClient() // Use provideHttpClient instead of HttpClientModule
  ],
  bootstrap: []
})
export class AppModule { }