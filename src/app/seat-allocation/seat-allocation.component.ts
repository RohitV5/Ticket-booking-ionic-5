import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Router } from '@angular/router';
import { BookingService } from '../booking.service';


@Component({
  selector: 'app-seat-allocation',
  templateUrl: './seat-allocation.component.html',
  styleUrls: ['./seat-allocation.component.scss'],
})
export class SeatAllocationComponent {

  columnLength: number = 12;
  rowlength: number = 10;
  columns: any[] = [];
  rows: any[] = [];

  // seatQuota
  seatQuota: number;
  email: string;
  selectedSeats = [];

  constructor(private router: Router, private bookingService: BookingService) { }

  ngOnInit() {
    this.generateColumnLabel();
    this.generateRows();
    this.checkUserDetails();
    this.populateBookedSeats();
  }






  generateColumnLabel() {
    for (let j = 1; j < (this.columnLength + 1); j++) {

      this.columns.push(j)
    }
  }

  checkUserDetails() {
    if (this.bookingService.numberOfTickets) {
      this.seatQuota = this.bookingService.numberOfTickets;
      this.email = this.bookingService.email
      debugger

    }
    else {
      this.router.navigate(["/user-details"])

    }
  }


  generateRows() {
    for (let i = 0; i < this.rowlength; i++) {
      let currentRow = (i + 10).toString(36)
      let seats = [];
      for (let j = 1; j < (this.columnLength + 1); j++) {

        seats.push({ seatNumber: (currentRow + j), booked: 0, username: this.email })
      }
      this.rows.push(seats);
    }
  }

  getRowNumber(row) {

    let key = row[0].seatNumber
    return key[0].charAt(0).toUpperCase();
  }

  submit(f) {
  }

  populateBookedSeats() {
    let storageItem = localStorage.getItem("bookedSeats")
    if (storageItem) {
      let bookedSeats: any[] = JSON.parse(storageItem);
      bookedSeats.forEach(element => {
        element.forEach(bookedSeat => {
          this.highlightInput(bookedSeat, 2)
        });
      });

    }
  }


  highlightInput(seatNUmber, status) {
    let row = (seatNUmber.seatNumber.charCodeAt(0) - 96);
    let column = (seatNUmber.seatNumber.substring(1) - 0);
    this.rows[row - 1][column - 1].booked = status;
  }

  checkUncheckSeat(seat) {

    // if checked
    if (seat.booked == true) {
      if (this.checkQuota(seat)) {
        this.selectedSeats.push(seat)
      } else {
        this.highlightInput(seat, false)

      }
    } else {
      for (var i = 0; i < this.selectedSeats.length; i++) {
        if (this.selectedSeats[i].seatNumber == seat.seatNumber) {
          this.selectedSeats.splice(i, 1);
          break;
        }
      }
    }
  }



  checkQuota(seat) {
    if (this.selectedSeats.length < this.seatQuota) {
      return true;
    } else {
      return false;
    }
  }


  bookSeats() {
    if (this.selectedSeats.length == this.seatQuota) {
      let allottedSeat: any[];
      let storageItem = localStorage.getItem("bookedSeats")


      this.selectedSeats.forEach(element => {
        element.booked = 2;

      })
      if (storageItem) {
        allottedSeat = JSON.parse(storageItem);
      }
      else {
        allottedSeat = [];
      }

      allottedSeat.push(this.selectedSeats)
      localStorage.setItem("bookedSeats", JSON.stringify(allottedSeat))

    }

  }

  viewBookedSeats() {
    this.router.navigate(["/booking-tracker"])
  }

  ionViewDidLoad() {
    if (this.rows.length > 0) {
      this.populateBookedSeats();
    }
  }

  ionViewDidLeave() {
    this.populateBookedSeats()
  }



}



