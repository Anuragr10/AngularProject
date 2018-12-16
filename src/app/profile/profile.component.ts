import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 data;
  constructor(private src:SearchService,private actroute:ActivatedRoute) {
    let id = this.actroute.snapshot.params['id'];
    this.src.getProfile(id).subscribe(res => this.data = res);
   }

  ngOnInit() {
  }

}
