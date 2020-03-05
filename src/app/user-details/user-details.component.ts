import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {

  public form: FormGroup;


  constructor(private router: Router, private bookingService: BookingService) { }

  ngOnInit() {
    this.createForm();
  }



  createForm() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'tickets': new FormControl(null, [Validators.required])

    });
  }

  goToBookTicket() {
    if (this.form.valid) {
      this.bookingService.email = this.form.get("email").value;
      this.bookingService.numberOfTickets = this.form.get("tickets").value;
      this.router.navigate(["seat-allocation"])
    }

  }



}
