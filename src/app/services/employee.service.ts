import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  url='http://49.249.110.2:8050/api/MenuMasters/GetMenuMasterList/173'

  constructor(private _http:HttpClient) { }

    getdata(): Observable<any>{
      return this._http.get(this.url)  
    }
    
}
