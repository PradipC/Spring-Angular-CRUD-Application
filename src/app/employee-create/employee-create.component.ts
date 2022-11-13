import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  employeeObject : Employee = new Employee();


  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
  }

  
  callCreateEmployee(){
    alert("callCreateEmployee executed after form submit ");
     console.log("Inside create employee component ");
     console.log(this.employeeObject)

     this.employeeService.createEmployee( this.employeeObject ).subscribe( data => {
     
            this.employeeObject = data ; 
            console.log("newly created employee is below : ");
            console.log(this.employeeObject);
     } ) 

  }



}
