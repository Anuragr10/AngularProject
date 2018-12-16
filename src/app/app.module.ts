import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularMaterialModule } from "./AngularMaterialModule/angular-material.module";
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NgxSpinnerModule } from "ngx-spinner";

import { AppComponent } from './app.component';
import { NestedReactiveFormComponent } from "./NestedReactiveForm/NestedReactiveForm";
import { FormArrayReactiveFormComponent } from "./FormArrayReactiveForm/FormArrayReactiveForm";
import { SearchComponent } from "./search/search.component";

import { customPipe } from "./custom.pipe";
import { CustomDirective } from "./custom.directive";
import { ErrorComponent } from './error/error.component';
import { ProfileComponent } from './profile/profile.component';






@NgModule({
  declarations: [
    AppComponent,
    customPipe,
    CustomDirective,
    NestedReactiveFormComponent,
    FormArrayReactiveFormComponent,
    SearchComponent,
    ErrorComponent,
    ProfileComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularMaterialModule,
    NgxSpinnerModule,
    RouterModule.forRoot([
      { path: "", component: AppComponent },
      { path: "NestedForm", component: NestedReactiveFormComponent },
      { path: "FormArray", component: FormArrayReactiveFormComponent },
      { path: "search", component: SearchComponent },
      { path: "search/:id", component: ProfileComponent },
      { path: "**", component: ErrorComponent }
    ])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
