import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css']
})
export class PastTrainingComponent implements OnInit, AfterViewInit {
  // the columns to display in the columns. (in the table)
  displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];

  // property to store the datasourse for the table.
  dataSource = new MatTableDataSource<Exercise>();
  // get the matsort from the view templete on the table.
  @ViewChild(MatSort) sort: MatSort;

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    // set the dataSource to the exercises from the service.
    this.dataSource.data = this.trainingService.getCompletedOrCancelledExercises();
  }

  // this method will be called after the view has finished loading.
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  // this method will be called when a user types in the filter field.
  doFilter(filterValue: string) {
    // set the filter peoperty of the dataSource to the value the user entered.
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
