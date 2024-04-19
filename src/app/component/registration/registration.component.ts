import { Component,OnInit } from '@angular/core';
import { ApiService } from 'src/app/ApiService/api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  public message:string='';
  public clr:any={green:true,red:false}

  public register={
    fname:'',
    lname:'',
    email:'',
    phno:'',
    password:''
  }
  public UserDetails:any=[

  ]

  constructor(public apis:ApiService){

  }
  ngOnInit(): void {
    
  }

  submitButton(){
    console.log(this.register);
    this.UserDetails.push(this.register);
    const data=new FormData()
      data.append("fname",this.register.fname)
      data.append("lname",this.register.lname);
      data.append("email",this.register.email);
      data.append("phno",this.register.phno);
      data.append("pwd",this.register.password);
    
    this.apis.student_register(data).subscribe((res:any)=>{
      console.log(res);
      this.message=res.message
      if(res.status===1){
        this.clr={green:true,red:false}
      }
       else{
        this.clr={green:false,red:true}
      }
    })
  }
}
