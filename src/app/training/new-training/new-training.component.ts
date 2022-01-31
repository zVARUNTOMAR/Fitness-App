import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Excercise } from 'src/app/_models/excercise.model';
import { ExcerciseService } from 'src/app/_services/excercise.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  excercises : Excercise[] = [];

  constructor(private exService: ExcerciseService) { 
  }

  ngOnInit(): void {
    this.excercises = this.exService.getAvailableExcercise();
  }

  startTraining(form : NgForm){
   this.exService.startExcercise(form.value.training);
  }

}
