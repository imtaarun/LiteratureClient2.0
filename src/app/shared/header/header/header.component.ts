import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  w3_close() {
    document.getElementById('mySidebar').style.display = 'none';
  }
  w3_open() {
    if (document.getElementById('mySidebar').style.display === 'block') {
      document.getElementById('mySidebar').style.display = 'none';
    } else {
      document.getElementById('mySidebar').style.display = 'block';
    }
  }
}
