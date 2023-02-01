import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  interval: number = 200;
  speedInterval: number = 0;
  tID: any;
  position: number = 119;
  resetSprite: boolean = false;
  speed: boolean = false;

  runGame() {
    this.tID = setInterval(() => {
      if (!this.resetSprite) {
        this.resetPosition(this.position);
        if (this.position < 725) { this.position = this.position + 119; }
        else { this.position = 119; }
      }
    }, this.interval);
  }

  animateScript() {
    this.resetSprite = true;
    this.resetPosition(0);
  }

  resetPosition(position: number) {
    document.getElementById("image").style.backgroundPosition = `-${position}px 0px`;
  }

  stopAnimation() {
    this.resetSprite = false;
  }

  speedRun() {
    this.speed ? this.interval = 10 : this.interval = 1000;
    clearInterval(this.tID);
    this.runGame();
    this.reverseRun();
  }

  reverseRun() {
    this.tID = setInterval(() => {
      document.getElementById("image2").style.backgroundPosition = `-${this.position}px 0px`;
      if (this.position < 725) { this.position = this.position + 119; }
      else { this.position = 119; }
    }, this.interval);
  }
}
