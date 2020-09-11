import {Component, OnInit} from '@angular/core';
import {EmployeesService} from '@services/employees/employees.service';

@Component({
  selector: 'upax-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  itemStringsLeft: any[];
  itemStringsRight = [];

  constructor(private readonly employeesService: EmployeesService) {
  }

  ngOnInit(): void {
    this.employeesService.getGroupList()
      .subscribe(data => this.itemStringsLeft = data);
  }

}
