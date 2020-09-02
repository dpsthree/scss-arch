import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UiDesignSystemModule } from '@scss-arch/ui-design-system';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// The word Wijmo should not appear anywhere within the content declared by this component or
// any of their children.
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiDesignSystemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
