import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-total-list',
  templateUrl: './total-list.component.html',
  styleUrls: ['./total-list.component.scss']
})
export class TotalListComponent implements OnInit {

  constructor(private getEmpApi: ApiServiceService) { 
    this.getEmpList();
  }

  getEmp: any;
  empDetailsVar: any;

  ngOnInit(): void {
  }

  getEmpList =  () => {
    this.getEmpApi.getEmpListApi().subscribe(data => {
      this.getEmp = data['data'];
      // for(const d of (empData as any)){
      //   this.getEmp.push({
      //     EmpId : d.id,
      //     EmpName: d.employee_name,
      //     EmpSalary: d.employee_salary,
      //     EmpAge: d.employee_age
      //   });
      // }
      // this.getEmp.push(empData);
    });
  }

  empDetails = (empName: any) => {
    console.log("Emplyee Id is : " + empName.id);
    this.empDetailsVar = empName;
  }

}
