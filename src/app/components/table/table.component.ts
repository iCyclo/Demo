import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';

class Data {
  id: number;
  status: string;
  licencePlate: string;
  dateChanged: Date;
  version: number;
  changedBy: string;
  email: string;
  dateStart: Date;
  dateStop: Date;
  dateCreated: Date;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @ViewChild('dt1') dt: Table | undefined;
  data: Data[];
  cols: string[];
  items: MenuItem[];
  selectedRow : Data;

  ngOnInit(): void {
    this.data = new Array<Data>();
    this.cols = [
      'id',
      'status',
      'licencePlate',
      'dateChanged',
      'version',
      'changedBy',
      'email',
      'dateStart',
      'dateStop',
      'datCreated'
    ];
    this.items = [
      {
        label: 'Config',
        icon: 'icon fa-solid fa-gear',
      },
      {
        label: 'Update',
        icon: 'icon fa-solid fa-clock-rotate-left',
      },
    ]
    for (let i = 0; i < 30; i++) {
      const data = new Data();
      data.id = i;
      data.status = `Active${i}`;
      data.licencePlate = `A1DG2${i}`;
      data.dateChanged = new Date('02-04-2023');
      data.version = 2;
      data.changedBy = 'System';
      data.email = 'correo@correo.com';
      data.dateStart = new Date('01-04-2023');
      data.dateStop = new Date('01-04-2024');
      data.dateCreated = new Date('01-04-2022');
      this.data.push(data);
    }
    console.log(this.data);
  }

  clear(table: Table) {
    table.clear();
  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
}
