import { Component } from '@angular/core';

@Component({
  selector: 'app-new1',
  templateUrl: './new1.component.html',
  styleUrls: ['./new1.component.css']
})
export class New1Component {

  name:string="Balan"

  initval=100
  placeholder="Enter Your Age"

  display(element:any){
    console.log("Submitted")
    alert(element.value + " years old are you")
  }
}
