import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

interface course{
  name:string,
  skills:string,
  Fee:number,
  duration:string,
  type:string
}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public name:string="rahul";
  public number:number=123;
  public courses:string[]=["Angular","React","Html","ViewJs"];
  public img:string="../assets/Images/services/Digital.jfif";
  public AllCourse:course[]=[
    {
      name:'angular',
      duration:"45 days",
      Fee:1500,
      skills:"Html,Css,JS,Angular",
      type:"development"  
  },
  {
    name:"React",
    duration:"30 days",
    Fee:2000,
    skills:"Html,css,Js,React",
    type:"development"
  },
  
  {
    name:"VueJs",
    duration:"30 days",
    Fee:2000,
    skills:"Html,css,Js,VueJs",
    type:"development"
  },
  
  {
    name:"Node js",
    duration:"30 days",
    Fee:2000,
    skills:"Html,css,Js,Node",
    type:"design"
  }
]
  public course:course={
    name:'angular',
    duration:"45 days",
    Fee:1500,
    skills:"Html,Css,JS,Angular",
    type:"design"
  }

constructor(){
  alert("constructor is loading");
}
ngOnInit(): void {
  console.log(this.name);
  this.load();
  for(let i=0;i<this.courses.length;i++){
    console.log(this.courses[i]);
  }
  console.log(this.AllCourse[0]);
  
}
load(){
  alert("About page loading");
}
fun(a:string){
  alert(a);
}
}
