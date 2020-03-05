import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  email: string;
  numberOfTickets: number;

  constructor() { }

}
