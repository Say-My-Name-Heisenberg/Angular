import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {

  // students:any=''
  students:any=[
    {name:"Arjun",age:20,class:"BCA",fee:132,dob:"12-12-2001"},
    {name:"Nandu",age:21,class:"Poly",fee:2424,dob:"10-02-2000"},
    {name:"Amar",age:23,class:"BA",fee:23423,dob:"01-03-2003"},
    {name:"Nimnaj",age:22,class:"B.Tech",fee:342,dob:"10-31-2002"},
  ]
}
