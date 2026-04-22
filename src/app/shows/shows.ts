import { Component } from '@angular/core';
import * as shows from '../data/mock-shows.json';

@Component({
  selector: 'mm-shows',
  imports: [],
  templateUrl: './shows.html',
  styleUrl: './shows.css'
})
export class Shows {
	showList = (shows as any).default.shows;

  constructor() {
    console.log(this.showList);
  }
}
