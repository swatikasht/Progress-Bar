import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular-progress',
  templateUrl: './circular-progress.component.html',
  styleUrls: ['./circular-progress.component.css']
})
export class CircularProgressComponent implements OnInit {
	color: string = "blue";
	mode:string = "determinate";
	value = 60;
	
  constructor() { }

  ngOnInit() {
  }

}
