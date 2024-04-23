import { Component, OnInit } from '@angular/core';

interface course{
  courseName:string,
  coursePrice:Number,
  type:string,
  content:string
}
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  mycourses:course[]=[
    {
      courseName:"ReactJs",
      coursePrice:3000,
      type:'development',
      content:'React'
    },
    {
      courseName:"Angular",
      coursePrice:3000,
      type:'development',
      content:'Angular'
    },
    {
      courseName:"Html&css",
      coursePrice:2000,
      type:'design',
      content:'Html And Css'
    },
    {
      courseName:"Bootstrap",
      coursePrice:2000,
      type:'design',
      content:'Bootstrap'
    },
    {
      courseName:"xml",
      coursePrice:1000,
      type:'design',
      content:'Xml'
    },
    {
      courseName:"Node",
      coursePrice:3000,
      type:'development',
      content:'Node'
    },
    
    
  ]
  delete(id:number){
    alert(id);
    this.mycourses.splice(id,1);
  }
  color:string="green";
  abc:any={
    "color":"green"
  }
  quty:number=0;
 clr={green:false,red:true}
res={status:1,message:"Registered successfully"}
res1={status:0,message:"Already Registered"}
  constructor(){

  }
  ngOnInit(): void {
    if(this.res.status==1){
      this.clr={green:false,red:true}
    }
    else{
      this.clr={green:false,red:true}
    }
  }

}
