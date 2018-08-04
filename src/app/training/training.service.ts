import { Injectable } from '@angular/core';
import { Exercise } from './exercise.model';
import { Subject } from 'rxjs/subject';

@Injectable()
export class TrainingService {
  // list of exercises.
  private availableExercises: Exercise[] = [
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
    { id: 'side-lunges', name: 'Side lunges', duration: 120, calories: 18 },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
  ];

  // property to store the running exercise.
  private runningExercise: Exercise;
  // propety to store a subject when the exercise has changed.
  exerciseChanged = new Subject<Exercise>();
  // property to store the incompleted exercises.
  private exercises: Exercise[] = [];

  constructor() { }

  // method to get the exercises
  getExercises() {
    // return a new array of the availableExercises.
    return this.availableExercises.slice();
  }

  // method to start the exercise.
  startExercise(selectedId: string) {
    // find the selected exercise.
    const selectedExercise = this.availableExercises.find(ex => ex.id === selectedId);
    // store the exercise.
    this.runningExercise = selectedExercise;
    // send a copy of the running exercise to the subject.
    this.exerciseChanged.next({... this.runningExercise});
  }

  // metod called when a exercise is completed.
  completeExercise() {
    // add the completed exercise to the array.
    // send a copy of the runningExercise with the aditional properties, date and state.
    this.exercises.push({...this.runningExercise, date: new Date(), state: 'completed'});
    // set the runningExercise to null.
    this.runningExercise = null;
    // pass null to the subject.
    this.exerciseChanged.next(null);
  }

  // this method is called when the exercise is cancelled.
  cancelExercise(progress: number) {
    // add the completed exercise to the array.
    // send a copy of the runningExercise with the aditional properties, date and state.
    this.exercises.push({...this.runningExercise, duration: this.runningExercise.duration * (progress / 100) ,calories: this.runningExercise.duration * (progress / 100), date: new Date(), state: 'cancelled'});
    // set the runningExercise to null.
    this.runningExercise = null;
    // pass null to the subject.
    this.exerciseChanged.next(null);
  }

  // method to get the running exercise.
  getRunningExercise() {
    // return a copy of the runningExercise
    return { ...this.runningExercise};
  }
}
