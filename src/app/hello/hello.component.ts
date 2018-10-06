import { Component, OnInit } from '@angular/core';
import { TrackerService } from '../tracker.service';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  name:string = 'Anurag';
  index;
  constructor(private ts: TrackerService) {
    this.index = this.ts.getPageId;
    
   }

  ngOnInit() {
  }


}
