import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  // property to store the exersices.
  exercises: Observable<any>;

  constructor(private trainingService: TrainingService, private db: AngularFirestore) { }

  ngOnInit() {
    // store the data from the database.
    this.exercises = this.db.collection('avaliableExercises').valueChanges();
  }

  // this method will be called when the start new training button is clicked.
  onStartTraining(form: NgForm) {
    // call the startExercise method on the trainingService and pass in the exercise value on the form
    this.trainingService.startExercise(form.value.exercise);
  }
}
