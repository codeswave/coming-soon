import { Component } from '@angular/core';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent {
  days:any;
  hours:any;
  minutes:any;
  seconds:any;

  constructor() {
    const launchDate = new Date('2023-08-20'); // Set your launch date here
    this.countdownTimer(launchDate);
  }

  countdownTimer(launchDate: Date) {
    const timerInterval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeDifference = launchDate.getTime() - currentTime;

      this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      if (timeDifference < 0) {
        clearInterval(timerInterval);
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
      }
    }, 1000);
  }
}
