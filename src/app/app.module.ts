import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { customPipe } from './custom.pipe';
import { CustomDirective } from './custom.directive';
import { HelloComponent } from './hello/hello.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';



@NgModule({
  declarations: [
    AppComponent, customPipe, CustomDirective, HelloComponent, Page1Component, Page2Component, Page3Component
  ],
  imports: [
    BrowserModule, MatSelectModule,
    BrowserAnimationsModule,
    MatRadioModule,
    RouterModule.forRoot([
      { path: 'page1', component: Page1Component },
      { path: 'page2', component: Page2Component },
      { path: 'page3', component: Page3Component }
   
    ])
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
