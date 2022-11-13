import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor( private employeeServiceObject : EmployeeService  ) { }

  listOfEmployee : Employee[];


  ngOnInit(): void {

      this.getAllEmployees();
  }


  private getAllEmployees() {

    this.employeeServiceObject.getAllEmployee().subscribe( data => {
         
         this.listOfEmployee = data; 
         console.log("reading all employee list below  : ")
         console.log(this.listOfEmployee);
    }  )  

  }


}
