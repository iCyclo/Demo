import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PrimeNGModule } from './modules/prime-ng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { AvatarComponent } from './components/avatar/avatar.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    MenuBarComponent,
    AvatarComponent
  ],
  imports: [
    BrowserModule,
    PrimeNGModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
