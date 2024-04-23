import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/ApiService/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg:any='';
  clr:any={green:false,red:true}
isSubmit:any=false;
  Login:any=new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl("",Validators.required)
  })
constructor(public api:ApiService,public routes:Router){

}
  get f(){
    return this.Login.controls;
  }
  submitForm(){
    
  }
  ngOnInit(): void {
    
  }
  login(){
    this.isSubmit=true;
    const data=new FormData()
    data.append("userEmail",this.Login.value.username)
    data.append("userPassword",this.Login.value.password)
    this.api.student_Login(data).subscribe((res:any)=>{
      console.log(res);
      this.msg=res.message;
      if(res.status==1){
        this.clr={green:true,red:false}
      }
      else{
        localStorage.setItem("name",this.Login.value.username)
        this.routes.navigate(['/dashboard'])
        this.clr={green:false,red:true}
      }
    })
  }
}
