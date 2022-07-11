import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
public name="this is inline template ";
public courseId="123";
public isDisabled=false;
public urlsite=window.location.href;
//class binding
public val="value";
public requiredd=true;
public Group={
  "Textcolor":this.requiredd,
  "value":!this.requiredd,//it cant bind bcz we used ! not
  "cls":this.requiredd
}

//style binding
public myStyle="red";
public myCondition= true;
public myStyles={
  color:"gold",
  fontStyle:"italic",
  fontSize:"50px"
}
public greeting="";
//two way binding
public data="";
//ngif
public status=true;
//ngSwitch
public myChoice="one";
//ngfor
public subjects=["angular","Reactjs","java","javascript","bootstrap","material ui"];
//sending data from parent to child
@Input() public fromParent: any;
//child to parent
@Output() public childInfo =new EventEmitter();
//pipes
public _name="Hemaltha Burugupally";
public _msg="this is about pipes";
public _person={
  "firstName":"hema",
  "secondName":"Reddy"
}


  constructor() { }
 
  ngOnInit(): void {
  }
  //event binding
  onClick(){
    this.greeting="value from event binding ";
  }

  //template ref variable

  message(message: any){
    console.log(message)
  }
  //child to parent
  // fireEvent(){
  //   this.childInfo.emit("this is from child");
  // }

 
  

}
