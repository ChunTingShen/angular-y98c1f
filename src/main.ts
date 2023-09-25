import 'zone.js/dist/zone';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './app/body/body.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewsService } from './app/body/news.service';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    BodyComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [NewsService],
  template: `
    
    <app-body ></app-body>


  `,
})
export class App {
  constructor() {}

  name = 'Angular';
  initColor = 'black';

  sendColor(event: string) {
    this.initColor = event;
  }

  ngOnInit() {}
}

bootstrapApplication(App);
