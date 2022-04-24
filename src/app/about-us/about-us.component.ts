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
  isVisible = false;
  effect = 'scrollx';
  constructor() { }

  ngOnInit(): void {
  }


  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  
}
