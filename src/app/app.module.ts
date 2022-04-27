import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { CenterComponent } from './center/center.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CenterComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
