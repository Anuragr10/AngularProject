import { Component, OnInit } from '@angular/core';
import { TrackerService } from '../tracker.service';

@Component({
  selector: 'page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
 pageId = 1;
 show:boolean = false;
  constructor(private ts:TrackerService) {
    //this.pageId = this.ts.getPageId;
   }

  ngOnInit() {
  }
  move(){
   this.ts.setPageId(this.pageId);
   this.show = true;
    console.log('Inside Page2 PageId is:' + this.pageId);
  }

}
