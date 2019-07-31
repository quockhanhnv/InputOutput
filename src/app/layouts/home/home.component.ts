import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output('username') userName = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  onSubmited(data) {

    this.userName.emit(data);
  }

}
