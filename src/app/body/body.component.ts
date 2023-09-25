import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService, Job } from './news.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class BodyComponent implements OnInit {
  constructor(private news: NewsService) {}

  showButton: boolean = true;
  ids: number[] = [];
  jobs: Job[] = [];

  ngOnInit() {
    this.news.getIds().subscribe((val: any) => {
      // console.log(val);
      for (let i in val) {
        // add first 6 jobs
        if (parseInt(i) < 6) {
          let newsid = val[i];
          this.news.getNews(newsid).subscribe((val: any) => {
            let newJob = val;
            this.jobs.push(newJob);
          });
        } else {
          this.ids.push(val[i]);
          // console.log(val[i])
        }
      }
    });
  }

  getJobs() {
    //get 6 jobs
    if (this.ids.length == 0) {
      this.showButton = false;
      console.log('Finished!');

      return;
    }

    for (let i = 0; i < 6; i++) {
      if (this.ids.length == 0) {
        console.log('Finished!');
        this.showButton = false;
        return;
      } else {
        let id = this.ids[0];
        this.ids.shift();
        this.news.getNews(id).subscribe((val: any) => {
          let newJob = val;
          this.jobs.push(newJob);
        });
      }
    }
    console.log(this.jobs);
  }
}
