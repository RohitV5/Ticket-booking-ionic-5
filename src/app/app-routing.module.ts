import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'user-details', loadChildren: () => import('./user-details/user-details.module').then(m => m.UserDetailsModule) },
  { path: 'booking-tracker', loadChildren: () => import('./booking-tracker/booking-tracker.module').then(m => m.BookingTrackerModule) },
  { path: 'seat-allocation', loadChildren: () => import('./seat-allocation/seat-allocation.module').then(m => m.SeatAllocationModule) },
  { path: '**', redirectTo: 'user-details', },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
