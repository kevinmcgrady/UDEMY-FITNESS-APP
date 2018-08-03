import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // new event emitter to make the navigation close and open.
  @Output() sideNavToggle = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  // this method is called when the button is clicked.
  onToggleSidenav() {
    // emit the sideNavToggle event emitter.
    this.sideNavToggle.emit();
  }

}
