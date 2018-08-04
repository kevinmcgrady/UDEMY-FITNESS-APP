import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StopTrainingComponent } from '../stop-training.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  // property to store the current progress.
  progress = 0;
  // property to store the timer.
  timer: number;
  // property to store the message.
  message: string = 'Keep Going, You can do it!';
  // event emitter to stop the current training.
  @Output() trainingExit = new EventEmitter();
  // inject the MatDialog class.
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    // call the method to start the timer.
    this.startOrResumeTimer();
  }

  // this method will start or resume the timer.
  startOrResumeTimer() {
    // a timer to increment the progress spinner.
    this.timer = setInterval(() => {
      // increment the progress spinner.
      this.progress = this.progress + 20;
      // if the number is greater or equal to 100 (%)
      if(this.progress >= 100) {
        // stop the timer.
        clearInterval(this.timer);
        // change the message.
        this.message = "Well Done!, You Finished!!";
      }
    }, 1000)
  }

  // this method will be called when the stop button is clicked.
  onStop() {
    // stop the timer.
    clearInterval(this.timer);
    // open the dialog.
    // pass in the data of the progress.
    const dialogRef = this.dialog.open(StopTrainingComponent, { data: { progress: this.progress } });

    // this method will be called when the model is closed, the data is passed from the model component.
    dialogRef.afterClosed().subscribe((result) => {
      // if the result is true (the user wants to stop the training.)
      if(result) {
        // emit the trainingExit event.
        this.trainingExit.emit();
      }
      // call the method to resume the timer.
      this.startOrResumeTimer();
    })
  }
}
