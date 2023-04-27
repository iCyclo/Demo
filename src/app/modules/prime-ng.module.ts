import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//PRIME NG

import {MenubarModule} from 'primeng/menubar'
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ContextMenuModule } from 'primeng/contextmenu';
import { MenuModule } from 'primeng/menu';
import { DividerModule } from 'primeng/divider';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MenubarModule,
    DropdownModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    ContextMenuModule,
    MenuModule,
    DividerModule
  ]
})
export class PrimeNGModule { }
