import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact.component';
import { ServiceComponent } from './service/service.component';
import { TipsPipe } from './tips.pipe';
import { TestComponent } from './test/test.component';
import { MyDerictiveDirective } from './my-derictive.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ServiceComponent,
    TipsPipe,
    TestComponent,
    MyDerictiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
