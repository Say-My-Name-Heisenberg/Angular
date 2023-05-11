import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.css']
})
export class MultiplicationComponent {

    v1:any;
    v2:any;

    sum:any;
    
    multi(){
      this.sum=parseInt(this.v1)*parseInt(this.v2)
    }

}
