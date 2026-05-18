import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { required } from '@angular/forms/signals';

@Component({
  selector: 'app-reactive-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {
  Checkout = new FormGroup({
    FullName: new FormControl('', Validators.required),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Address: new FormGroup({
      City: new FormControl('', Validators.required),
      Street: new FormControl('', Validators.required),
    }),
    PaymentMethod: new FormControl('', Validators.required),
  });

  data?: any;

  // onsubmit() {}

  sub() {
    if (this.Checkout.valid) {
      this.data = { ...this.Checkout.value };
      this.Checkout.reset();
      console.log(this.data);
    }
  }
}
