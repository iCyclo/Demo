import { Component } from '@angular/core';

class Option {
  name: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  options: Option[];

  selectedOption: Option;

  ngOnInit() {
    this.options = [
      { name: 'Van City'},
      { name: 'Van City'},
      { name: 'Van City'},
      { name: 'Van City'},
      { name: 'Van City'},
    ];
  }
}
