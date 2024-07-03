import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppdataService } from '../appdata.service';
import { AuthService } from '../auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  eventId: string;
  event: any;
  ticketPrice: number = 89;
  addMoreTicket: number = 1;
  user: any;
  totalPrice: number;

  constructor(
    private route: ActivatedRoute,
    private appdataService: AppdataService,
    private authService: AuthService,
    private router: Router
  ) {
    this.eventId = this.route.snapshot.paramMap.get('id') || '';
  }

  ngOnInit(): void {
    this.fetchEvent();
    this.user = this.authService.getUser();
  }

  fetchEvent(): void {
    this.appdataService.getEventById(this.eventId).subscribe(event => {
      this.event = event;
      this.calculateTotalPrice();
    });
  }

  calculateTotalPrice(): void {
    const taxes = this.ticketPrice * 0.1;
    this.totalPrice = this.ticketPrice + taxes;
  }

  handlePayment(): void {
    if (!this.user) {
      Swal.fire({
        title: "Oops!",
        text: "You need to be logged in to proceed with payment",
        icon: "error"
      });
      this.router.navigate(['/login']);
      return;
    }

    const paymentInfo = {
      name: this.user.name,
      email: this.user.email,
      eventId: this.event._id,
      eventTitle: this.event.title,
      eventImage: this.event.image,
      eventDate: this.event.date,
      amount: this.totalPrice,
      currency: 'USD'
    };

    this.appdataService.initiatePayment(paymentInfo).subscribe(response => {
      window.location.href = response.url;
    }, error => {
      console.error('Payment initiation error:', error);
    });
  }
}