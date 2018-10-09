import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
@Component({
  selector: "FormArrayReactiveForm",
  templateUrl: "./FormArrayReactiveForm.html",
  styleUrls: ["./FormArrayReactiveForm.css"]
})
export class FormArrayReactiveFormComponent {
  myForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      email:'',
      contact:this.fb.array([])
    })
  }

  get contacts(){
    return this.myForm.get('contact') as FormArray;
  }

  addContacts(){
    const contact = this.fb.group({
      area:[],
      prefix:[],
      lineNo:[]
    });
    this.contacts.push(contact);
  }

  deleteContact(index){
    this.contacts.removeAt(index);
  }
}
