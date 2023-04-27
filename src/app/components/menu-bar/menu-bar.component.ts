import { Component } from '@angular/core';
import { PrimeIcons, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
})
export class MenuBarComponent {
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Permit',
        icon: 'icon fa-solid fa-car',
        items: [
          { label: 'Permits' },
          { label: 'Subscriptions' },
          { label: 'Credit card transactions' },
        ],
      },
      {
        label: 'UAM',
        icon: 'icon fa-solid fa-users',
      },
      {
        label: 'Reports',
        icon: 'icon fa-solid fa-chart-simple',
      },
      {
        label: 'Configurations',
        icon: 'icon fa-solid fa-gear',
      },
      {
        label: 'Notifications',
        icon: 'icon fa-solid fa-bell',
      },
    ];
  }
}
