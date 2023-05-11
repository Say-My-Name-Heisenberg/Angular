import { Component } from '@angular/core';

@Component({
  selector: 'app-new2',
  templateUrl: './new2.component.html',
  styleUrls: ['./new2.component.css']
})
export class New2Component {
  
  data:any;
  twoway="Word"

  add(a:any,b:any){
    let n1=a.value
    let n2=b.value
    // alert(parseInt(n1)+parseInt(n2))
    this.data=parseInt(n1)+parseInt(n2)
}

}
