import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularMaterialModule } from "./AngularMaterialModule/angular-material.module";
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NestedReactiveFormComponent } from "./NestedReactiveForm/NestedReactiveForm";
import { FormArrayReactiveFormComponent } from "./FormArrayReactiveForm/FormArrayReactiveForm";

import { customPipe } from "./custom.pipe";
import { CustomDirective } from "./custom.directive";
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    customPipe,
    CustomDirective,
    NestedReactiveFormComponent,
    FormArrayReactiveFormComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserModule,
    AngularMaterialModule,
    RouterModule.forRoot([
      { path: 'NestedForm', component: NestedReactiveFormComponent },
      { path: 'FormArray', component: FormArrayReactiveFormComponent },
      //{ path: '', component:''}
    ])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
