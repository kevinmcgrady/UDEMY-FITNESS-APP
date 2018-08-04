import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  // boolean to store if a training session is active.
  ongoingTraining: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
