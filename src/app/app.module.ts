import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './LandingPage/landing.component';
import { ConnectDeviceComponent } from './ConnectDevicePage/connect-device.component';
import { ConnectDeviceModule } from './ConnectDevicePage/connect-device.module';
import { LandingModule } from './LandingPage/landing.modules';


@NgModule({
  declarations: [
    ConnectDeviceComponent,
    AppComponent,
    LandingComponent
  ],
  entryComponents:[ConnectDeviceComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
