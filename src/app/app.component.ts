import { Component } from '@angular/core';



@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  isSelected = false;
  index = -1;
  categories = [
    { id: 1, name: "Family Car", isSelected: true },
    { id: 2, name: "Personal", isSelected: true },
    { id: 3, name: "Foreign Trip", isSelected: true },
    { id: 4, name: "Education", isSelected: true },
    { id: 5, name: "Home", isSelected: false },
    { id: 6, name: "Health", isSelected: false },
    { id: 7, name: "Charity", isSelected: false }
  ];
  foods =  [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];
  constructor() {}
  move(data) {
    console.log("Hi" + data.value);
    //this.router.navigate(['/page1']);
  }
  categorySelected(data,index) {
    // if(this.index == -1) return;
    
    // data.isSelected = !data.isSelected;
    console.log("selected" + data.id, this.isSelected);
  }
}
