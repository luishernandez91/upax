import {Component, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

// TODO Make table dynamic to be shared with another components

@Component({
  selector: 'upax-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnChanges {
  /**
   * Table fields to be shown
   */
  displayedColumns: string[] = ['id', 'name', 'last_name', 'birthday'];
  /**
   * Data source handler for table
   */
  dataSource: MatTableDataSource<any>;
  /**
   * Data size per page
   */
  @Input() pageSizeOptions: Array<number>;
  /**
   * Incoming data from parent implementation
   */
  @Input() data: Array<any>;
  /**
   * Dom reference to table paginator
   */
  @ViewChild(MatPaginator) paginator: MatPaginator;
  /**
   * Dom reference for table sort
   */
  @ViewChild(MatSort) sort: MatSort;

  /**
   * Component constructor
   */
  constructor() {
    this.pageSizeOptions = [10];
  }

  /**
   * OnChanges life hook
   * @param changes Input changes in values
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && changes.data.currentValue) {
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  /**
   * Filter records by entered user info
   * @param event Event from user interaction with input
   */
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
