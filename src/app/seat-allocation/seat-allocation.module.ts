import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SeatAllocationComponent } from './seat-allocation.component';



@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: SeatAllocationComponent
      }
    ])
  ],
  declarations: [SeatAllocationComponent],
})
export class SeatAllocationModule {




}
