import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EmployeeApiResponseInterface, EmployeeInterface} from '@interfaces/employee.interface';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  /**
   * Url base for endpoint
   */
  urlEndpoint: string;
  /**
   * My name
   */
  name: string;

  /**
   * Service constructor
   * @param http Http client module injection
   */
  constructor(private readonly http: HttpClient) {
    this.urlEndpoint = 'https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/';
    this.name = 'luis_antonio_hernandez_castillo';
  }

  /**
   * Get a list of employees
   */
  getEmployeesList(): Observable<Array<EmployeeInterface>> {
    return this.http.get<EmployeeApiResponseInterface>(`${this.urlEndpoint}/employees/${this.name}`)
      .pipe(
        map(({data}) => {
          return data.employees;
        })
      );
  }

  /**
   * Creates new employee record
   * @param info Employee information
   */
  addEmployee(info: EmployeeInterface): Observable<any> {
    return this.http.post(`${this.urlEndpoint}/employees/${this.name}`, info);
  }

  /**
   * Get group list
   */
  getGroupList(): Observable<any> {
    return this.http.get(`${this.urlEndpoint}/groups/${this.name}`)
      .pipe(
        map(({data}: any) => {
          return data.groups;
        })
      );
  }
}
