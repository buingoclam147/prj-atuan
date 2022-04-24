import { Component, OnInit } from '@angular/core';
import { faCirclePlay, faCoffee, faFilePdf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  faCoffee = faCoffee;
  faFilePdf = faFilePdf;
  faCirclePlay = faCirclePlay;
  constructor() { }

  ngOnInit(): void {
  }

}
