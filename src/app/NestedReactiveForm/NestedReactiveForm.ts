import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'NestedReactiveForm',
  templateUrl: './NestedReactiveForm.html',
  styleUrls: ['./NestedReactiveForm.css']
})
export class NestedReactiveFormComponent {
  myForm:FormGroup;
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name:'',
      city:'',
      message:'',
      address: this.fb.group({
        state:'',
        zip:'',
        country:''
      })
    });
    // this.myForm.valueChanges.subscribe(res =>{
    //   console.log(res);
    // })
   }
 

}
