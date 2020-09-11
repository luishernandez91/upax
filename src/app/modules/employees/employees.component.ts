import {Component, OnInit} from '@angular/core';
import {EmployeesService} from '@services/employees/employees.service';
import {EmployeeInterface} from '@interfaces/employee.interface';
import {MatDialog} from '@angular/material/dialog';
import {EmployeeFormComponent} from './components/employee-form/employee-form.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {InterceptorService} from '@services/interceptor/interceptor.service';

@Component({
  selector: 'upax-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ]
})
export class EmployeesComponent implements OnInit {
  /**
   * List of employees
   */
  employeesList: Array<EmployeeInterface>;

  /**
   * Component constructor
   * @param employeesService Employees service injection
   * @param dialog MatDialog injection
   * @param snackBar SnackBar injection
   */
  constructor(private employeesService: EmployeesService,
              public dialog: MatDialog,
              private readonly snackBar: MatSnackBar) {
  }

  /**
   * Register a new employee record
   */
  addEmployee(): void {
    const dialogRef = this.dialog.open(EmployeeFormComponent, {
      width: '30%',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      this.employeesService.addEmployee(result)
        .subscribe((response) => {
          this.showMessage('Employ added successfully');
          this.employeesList = [...this.employeesList, {id: String(this.employeesList.length + 1), ...result}];
        }, () => {
          this.showMessage('An unexpected error has occurred');
        });
    });
  }


  /**
   * Component initial life hook
   */
  ngOnInit(): void {
    this.employeesService.getEmployeesList()
      .subscribe(data => this.employeesList = data);
  }

  /**
   * Open snackbar message
   * @param message Message text
   */
  showMessage(message): void {
    this.snackBar.open(message, 'Close', {
      duration: 2000,
    });
  }
}
