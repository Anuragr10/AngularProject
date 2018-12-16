import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class SearchService {
  url = "https://jsonplaceholder.typicode.com/photos/";
  gitUrl = "https://api.github.com/users";
  constructor(private http: Http) {}

  getData() {
    return this.http.get(this.gitUrl).pipe(map((res: Response) => res.json()));
  }
  getProfile(id) {
    //const url = "https://jsonplaceholder.typicode.com/photos/" + id;
    const url = "https://api.github.com/users/" + id;
    return this.http.get(url).pipe(map(res => res.json()));
  }
}
