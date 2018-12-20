import { NgModule } from '@angular/core';
import { Routes, RouterModule,PreloadAllModules } from '@angular/router';
import { LandingComponent } from './LandingPage/landing.component';
import { ConnectDeviceComponent } from './ConnectDevicePage/connect-device.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/connectDevicePage',
    pathMatch: 'full'
  },
  {
    path: 'connectDevicePage',
    component: ConnectDeviceComponent
  }
  ,
  {
    path: 'landingPage',
    component: LandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
