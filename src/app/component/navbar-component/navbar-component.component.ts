import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent {
  navs:any=[
    {
      title:'Home',
      url:'/',
      sub:[]
    },
    {
      title:'About',
      url:'/about',
      sub:[]
    },
    {
      title:'services',
      url:'/services',
      sub:[]
    },
    {
      title:'contact',
      url:'/contact',
      sub:[]
    },
    {
      title:'/blog',
      url:'/blog',
      sub:[]
    },
    {
      title:'Registration',
      url:'/registration',
      sub:[]
    },
    {
      title:'Login',
      url:'/Login',
      sub:[]
    },
    {
      title:"courses",
      url:"/courses/angular",
      sub:[
        {title:"Angular",url:"/courses/angular"},
        {title:"React",url:"/courses/react"},
        {title:"Node",url:"/courses/node"}
      ]
    }
  ]

  
}
