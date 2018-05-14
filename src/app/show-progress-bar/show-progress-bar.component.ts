import { Component, OnInit,Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-show-progress-bar',
  templateUrl: './show-progress-bar.component.html',
  styleUrls: ['./show-progress-bar.component.css']
})
export class ShowProgressBarComponent implements OnInit,OnChanges {
	@Input() mode;
	@Input() color;
	@Input() value;
	@Input() bufferValue;

  constructor() { }

  	ngOnInit() {
  		this.generateValue();
  	}

  	ngOnChanges(){
  		this.generateColor();
  	  
    }

  generateColor(){
  	if(this.color === "primary"){
  		this.color = "blue";
   	}else if(this.color === "accent"){
  		this.color = "pink";
   	}else if(this.color === "warn"){
  		this.color = "red";
   	}
  }

  generateValue(){
    var myTimer = setInterval(() => {
      let x = Math.floor(Math.random() * 110);
      if(x > this.value && x - this.value < 20 && x <= 100){
        this.value = x;
      }

      if(this.value === 100){
        clearInterval(myTimer);
      }

    },200);
  }

}
