import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class NewsService {
  private readonly url = 'https://hacker-news.firebaseio.com/v0/';

  constructor(private http: HttpClient) {}

  getIds() {
    return this.http.get(this.url + 'jobstories.json');
  }

  getNews(id: number) {
    return this.http.get(this.url + 'item/' + id + '.json');
  }
}

export interface Job {
  by: string;
  id: number;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

//{"by":"jamilbk","id":35908337,"score":1,"time":1683838872,"title":"Firezone (YC W22) is hiring Elixir and Rust engineers","type":"job","url":"https://www.ycombinator.com/companies/firezone/jobs"}
