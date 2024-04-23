import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
type1:string="password";

val=0;
Inc(){
  this.val=this.val+1;
}
dec(){
  if(this.val>0){
  this.val=this.val-1;
  }
}

showPassword(){
  this.type1="text"
}
HidePassword(){
  this.type1="password"
}
abc(x:any){
this.type1=x
}
}
