import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {
 pageId = 1;
  constructor() { }

  setPageId(id){
   this.pageId = id;
  }
  getPageId(){
    return this.pageId;
  }
}
