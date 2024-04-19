import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navs:any=[
    {
      url:'/dashboard/profile',
      title:'Profile'
    },
    {
      url:'/dashboard/service',
      title:'service'
    },
    {
      url:'/dashboard/slides',
      title:'slides'
    },
    {
      url:'/dashboard/user',
      title:'user'
    }

  ]
  name:any='';
  constructor(public r:Router){
    
  }
  
  ngOnInit(): void {
    if(!localStorage.getItem("name")){
      this.r.navigate(["/Login"])
    }
    this.name=localStorage.getItem("name");
  }
  Logout(){
    this.r.navigate(["/Login"])
    localStorage.removeItem("name");
  }
}
