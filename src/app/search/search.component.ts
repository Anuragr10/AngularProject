import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent {
  searchBox;
  data;
  result;
  filteredData;
  constructor(
    private searchService: SearchService,
    private route: Router,
    private spinner: NgxSpinnerService
  ) {}

  getUserData() {
    this.spinner.show();
    this.searchService.getData().subscribe(res => {
      this.data = this.filteredData = res;
      this.spinner.hide();
    });
  }

  searchData() {
   this.filteredData = (this.searchBox) ? 
   this.data.filter((res) => res.login.includes(this.searchBox)) : this.data;
  }

  clickMe(id) {
    this.route.navigate(["search", id]);
  }
  showProfile(id) {
    this.route.navigate(["search", id]);
  }
}
