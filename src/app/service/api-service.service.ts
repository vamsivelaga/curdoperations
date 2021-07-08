import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// const getEmpList = 'https://dummy.restapiexample.com/api/v1/employees';
const getEmpList = 'assets/data/employees.json';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getEmpListApi() {
    return this.http.get(getEmpList);
  }
}
