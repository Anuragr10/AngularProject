import { Component, OnInit } from '@angular/core';
import { TrackerService } from '../tracker.service';

@Component({
  selector: 'page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
 show:boolean = false;
 pageId = 2;
  constructor(private ts:TrackerService) { }

  ngOnInit() {
  }

  move(){
    this.ts.setPageId(this.pageId);
    this.show = true;
    console.log('Inside Page2 PageId is:'+this.pageId);
  }

}
