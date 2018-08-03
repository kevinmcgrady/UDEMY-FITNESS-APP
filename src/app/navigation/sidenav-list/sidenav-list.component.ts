import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  // this is a new event emitter to close the side nav when the links are clicked.
  @Output() closeSideNav = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  // this method is called when a link is clicked.
  onClose() {
    // emit the closeSideNav event emitter.
    this.closeSideNav.emit();
  }

}
