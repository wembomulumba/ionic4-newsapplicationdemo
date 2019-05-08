import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
// settomgs to connect to Backend api (fecthing data)
const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  currentArticle: any;
  constructor(private http: HttpClient) { }

  getData(url) {

    return this.http.get
    (`${API_URL}/${url}`);
  }

  // function to retrieve all the news feed
  getNotes() {
    return this.http.get('http://localhost:3000/news/');
  }
}
