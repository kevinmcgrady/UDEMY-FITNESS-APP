import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  // property to store the exersices.
  exercises: Exercise[];

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    // assing the exercises to the returned exersices from the training service.
    this.exercises = this.trainingService.getExercises();
  }

  // this method will be called when the start new training button is clicked.
  onStartTraining(form: NgForm) {
    // call the startExercise method on the trainingService and pass in the exercise value on the form
    this.trainingService.startExercise(form.value.exercise);
  }
}
