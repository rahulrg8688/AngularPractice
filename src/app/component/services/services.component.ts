import { Component } from '@angular/core';

interface AllCourseList{
  name:string,
  img:string,
  content:string,
  fee:number,
  duration:string,
  type:string
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  AllCourses:AllCourseList[]=[
    {
      name:"NodeJs",
      img:"javascript.jfif",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ducimus, excepturi voluptatem earum porro perferendis quas itaque odio, ratione ipsam quo autem rerum cumque ea hic fugit, accusamus consectetur aperiam.",
      fee:1500,
      duration:"30 days",
      type:"Development"

    },
    {
      name:"ReactJs",
      img:"React.jfif",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ducimus, excepturi voluptatem earum porro perferendis quas itaque odio, ratione ipsam quo autem rerum cumque ea hic fugit, accusamus consectetur aperiam.",
      fee:1500,
      duration:"30 days",
      type:"Development"
    
    },
    {
      name:"Angular",
      img:"angular.jfif",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ducimus, excepturi voluptatem earum porro perferendis quas itaque odio, ratione ipsam quo autem rerum cumque ea hic fugit, accusamus consectetur aperiam.",
      fee:1500,
      duration:"30 days",

      type:"development"
    },
    {
      name:"Html&Css",
      img:"Html.png",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ducimus, excepturi voluptatem earum porro perferendis quas itaque odio, ratione ipsam quo autem rerum cumque ea hic fugit, accusamus consectetur aperiam.",
      fee:1500,
      duration:"30 days",
      type:"Design"

    
    },
    {
      name:"Javascript",
      img:"javascript.jfif",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ducimus, excepturi voluptatem earum porro perferendis quas itaque odio, ratione ipsam quo autem rerum cumque ea hic fugit, accusamus consectetur aperiam.",
      fee:1500,
      duration:"30 days",
      type:"design"
    
    },
    {
      name:"Java",
      img:"Java.png",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ducimus, excepturi voluptatem earum porro perferendis quas itaque odio, ratione ipsam quo autem rerum cumque ea hic fugit, accusamus consectetur aperiam.",
      fee:1500,
      duration:"30 days",
      type:"development"

    
    },

  ]

}
