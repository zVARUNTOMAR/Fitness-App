import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExcerciseService } from '../_services/excercise.service';
@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  onGoingTraining = false;
  excerciseSubscription : Subscription;

  constructor(private excerciseService : ExcerciseService) { }

  ngOnInit(): void {
    this.excerciseSubscription = this.excerciseService.excerciseChanged.subscribe(res=>{
      if(res) this.onGoingTraining = true;
      else this.onGoingTraining = false;
    });
  }

}
