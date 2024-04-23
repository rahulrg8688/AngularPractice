import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public api:any="http://ilandertech.com/api/index.php/Welcome/";
  constructor(public Http:HttpClient) { }

  student_register(data:unknown){
return this.Http.post(this.api+"AddStudRegister",data);
  }
  student_Login(data:any){
return this.Http.post(this.api+"StuLogin",data);
  }
}
