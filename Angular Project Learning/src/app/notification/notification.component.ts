import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div
    class="alert alert-success"
    [ngClass]="{fadeOut : displayNotification}"
  >
    <p>This website uses cookies to provide better user expriences</p>
    <div class="close">
      <button class="btn btn-danger" (click)="closeNotification()">x</button>
    </div>
  </div>`,
  styles: [
    '.notification-div{margin: 10px 0px; padding: 10px 20px;text-align:center;background-color:#fad7a0}',
    'p{font-size:14px;}',
    '.close{ float:right;margin-top: -40px;}',
    '.fadeOut{ visibility:hidden; opacity:0;transition:visibility 0s 1s, opacity 1s linear;}',
  ],
})
export class NotificationComponent {
  displayNotification: boolean = false;

  closeNotification() {
    this.displayNotification = true;
  }
}
