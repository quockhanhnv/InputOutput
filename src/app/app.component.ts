import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ComponentArchiteching';

  searchKey = "Default termm";

  keySideBar = "Test Input";

  userName = "Default UserName";
  onSearchChange(val) {
    // debugger;
    this.searchKey = val;
  }

  onSubmited(val) {
    this.userName = val;
  }

}
