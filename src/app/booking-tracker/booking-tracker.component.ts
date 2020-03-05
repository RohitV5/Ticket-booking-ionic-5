import { Component, OnInit } from '@angular/core';
import { TicketSummaryModel } from '../models/ticketSummaryModel';

@Component({
  selector: 'app-booking-tracker',
  templateUrl: './booking-tracker.component.html',
  styleUrls: ['./booking-tracker.component.scss'],
})
export class BookingTrackerComponent implements OnInit {

  bookingDetails: any[] = [];

  constructor() { }

  ngOnInit() {
    this.getAllBookings();
  }



  getAllBookings() {
    let storageItem = localStorage.getItem("bookedSeats")


    if (storageItem) {
      let itemList = JSON.parse(storageItem);
      console.log(storageItem)


      itemList.forEach(element => {
        let summary: TicketSummaryModel = { userName: "", quantity: 0, seatNumber: [] }
        element.forEach(ticket => {
          summary.quantity++
          summary.userName = ticket.username
          summary.seatNumber.push(ticket.seatNumber)
        });

        this.bookingDetails.push(summary)

      })
    }
    else {
      this.bookingDetails = [];
    }
  }


  deleteAllBookings() {
    localStorage.removeItem("bookedSeats");
  }

}
