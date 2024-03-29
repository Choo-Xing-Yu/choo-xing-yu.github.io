import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  styleUrls: ['./project-description.component.css'],
})
export class ProjectDescriptionComponent implements OnInit {
  tools: string[] = [
    'NodeJS',
    'TypeScript',
    'NestJS',
    'MySQL',
    'TelegramAPI',
    'AngularJS',
    'OutSystems',
    'AWS Certified Cloud Practitioner',
  ];
  tools_median: number;

  constructor() {
    this.tools_median = Math.round(this.tools.length / 2);
  }

  ngOnInit(): void {}

  generateColOne() {
    let col = [];
    for (let i = 0; i < this.tools_median; i++) {
      col.push(this.tools[i]);
    }
    return col;
  }

  generateColTwo() {
    let col = [];
    for (let i = this.tools_median; i < this.tools.length; i++) {
      col.push(this.tools[i]);
    }
    return col;
  }
}
