import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingTrackerComponent } from './booking-tracker.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [BookingTrackerComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: BookingTrackerComponent
      }
    ])
  ]
})
export class BookingTrackerModule { }
