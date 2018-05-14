import { Component, OnInit, OnChanges } from '@angular/core';



@Component({
  selector: 'app-linear-progress-bar',
  templateUrl: './linear-progress-bar.component.html',
  styleUrls: ['./linear-progress-bar.component.css']
})
export class LinearProgressBarComponent implements OnInit,OnChanges {
	color: string = "blue";
	mode:string = "determinate";
	value = 10;
	bufferValue = 50;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
  }

  
}
