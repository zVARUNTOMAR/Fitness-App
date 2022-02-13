import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExcerciseService } from 'src/app/_services/excercise.service';
import { StopTrainingComponent } from '../stop-training/stop-training.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css'],
})
export class CurrentTrainingComponent implements OnInit {
  @Output() onGoingTrainingStops = new EventEmitter<void>();
  progress = 0;
  timer!: number;
  constructor(private dialog: MatDialog,private excerciseService :ExcerciseService ) {}

  ngOnInit(): void {
    this.onStartOrResumeTraining();
  }

  //Call when need to resume progress or start progress
  onStartOrResumeTraining() {
    const step = this.excerciseService.getRunningExcercise().duration/100 * 1000;
    this.timer = setInterval(() => {
      this.progress = this.progress + 1;
      if (this.progress >= 100) {
        this.excerciseService.completeExcercise();
        clearInterval(this.timer);
      }
    }, step);
  }

  //Stops the progress and go back to previous screen
  onStop() {
    clearInterval(this.timer);

    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: {
        progress: this.progress,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.excerciseService.cancelExcercise(this.progress);
      } else {
        this.onStartOrResumeTraining();
      }
    });
  }
}
