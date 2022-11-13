import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClientRequest : HttpClient  ) { }

  //call springBoot controller 

  //call getAllEmployees --> List<Employee>
                              
  
  getAllEmployee() :  Observable<Employee[]>  {

      return   this.httpClientRequest.get<Employee[]>("http://localhost:8080/api/employee/get");
    
  }

  
  // post -> create employee   ---> Employee 

   createEmployee(employee : Employee) : Observable<Employee> {

      return  this.httpClientRequest.post<Employee>( "http://localhost:8080/api/employee/create" , employee ); 

   }





}
