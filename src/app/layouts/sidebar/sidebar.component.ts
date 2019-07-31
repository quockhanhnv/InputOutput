import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output('searchTermChanged') termSearchEvent = new EventEmitter();

  
  constructor() { }

  ngOnInit() {
  }

  onSearch(term: string) {
    // debugger;
    this.termSearchEvent.emit(term);
  }

}
