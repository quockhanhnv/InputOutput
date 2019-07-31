import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnChanges {

  searchhResult = "No search result";

  @Input('searchTemp') searchKey: string; // chỉ nhận đầu vào có tên đúng là seachTemp
  @Input('userName') userNamee : string;
  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
    this.searchhResult = "Search result for term " + this.searchKey;
  }

  // onUpdateResult() {
  //   this.searchhResult = "Search result for term " + this.searchKey;
  // }

}
