import {Component, OnInit} from '@angular/core';
import {EmployeesService} from '@services/employees/employees.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'upax-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  filteredGroups: any[];
  groups: any;
  employees: any;
  groupedEmployees: any[];

  /**
   * Component constructor
   * @param employeesService Employees service injection
   */
  constructor(private readonly employeesService: EmployeesService) {
    this.groups = [];
    this.employees = [];
    this.groupedEmployees = [];
  }

  /**
   * OnInit Life hook component
   * @returns void
   */
  ngOnInit(): void {
    this.employeesService.getGroupList()
      .subscribe(data => {
        this.filteredGroups = [...data];
        this.groups = [...data];
      });
  }


  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    this.loadEmployees(event.previousIndex, event.currentIndex);
  }


  /**
   * Get employees on group drag event
   * @param index Event fired on drag group
   * @param current index of dragged item
   */
  loadEmployees(index, current): void {
    const group = this.groups[index];
    this.employeesService.getGroupedEmployees(group.id)
      .subscribe(response => {
        this.groupedEmployees[current] = response;
      });
  }

  /**
   * Filter groups by name
   * @param event Event fired on keyUp input
   */
  applyFilter(event): void {
    const filterValue = (event.target as HTMLInputElement).value;

    const filtered = this.groups.filter(item => {
      if (item.name.toLowerCase().includes(filterValue)) {
        return item;
      }
    });

    this.filteredGroups = [...filtered];
  }
}
