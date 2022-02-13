import { AfterViewInit, Component, OnInit ,ViewChild, ViewChildren} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort ,Sort} from '@angular/material/sort';
import { Excercise } from 'src/app/_models/excercise.model';
import { ExcerciseService } from 'src/app/_services/excercise.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-past-trainings',
  templateUrl: './past-trainings.component.html',
  styleUrls: ['./past-trainings.component.css']
})
export class PastTrainingsComponent implements OnInit,AfterViewInit {

  displayedColumns = ["date","name",'duration',"calories","state"];
  dataSource = new MatTableDataSource<Excercise>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator : MatPaginator;

  constructor(private excerciseService : ExcerciseService) { }

  ngOnInit(): void {
    this.dataSource.data= this.excerciseService.getCompletedExOrCancelledEx();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(event: Event): void {
    let filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



}
