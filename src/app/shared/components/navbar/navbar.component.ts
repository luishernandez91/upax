import {Component, OnInit} from '@angular/core';
import {NavbarItemInterface} from '@interfaces/navbar.interface';

@Component({
  selector: 'upax-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuItems: Array<NavbarItemInterface>;

  constructor() {
    this.menuItems = [
      {label: 'home', url: '/'},
      {label: 'employees', url: '/employees'},
      {label: 'groups', url: '/groups'},
    ];
  }

  ngOnInit(): void {
  }

}
