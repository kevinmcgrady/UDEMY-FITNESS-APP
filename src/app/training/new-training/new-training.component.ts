import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  // create a new event emitter when a new training session has started.
  @Output() trainingStart = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  // this method will be called when the start new training button is clicked.
  onStartTraining() {
    // emit the trainingStart event.
    this.trainingStart.emit();
  }
}
