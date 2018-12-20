import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './connect-device.component.html',
  styleUrls: ['./connect-device.component.css']
})
export class ConnectDeviceComponent {
  title = 'electron-angular-demo';
  constructor(
    private router: Router,
  ) { }
  public Connect() {
    this.router.navigateByUrl('landingPage');
  }
}
