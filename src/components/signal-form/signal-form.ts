import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { email, form, required, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-signal-form',
  imports: [FormsModule, FormField],
  templateUrl: './signal-form.html',
  styleUrl: './signal-form.css',
})
export class SignalForm {
  logIN = signal({
    Email: '',
    Password: '',
    UserName: '',
  });

  logForm = form(this.logIN, (n) => {
    required(n.Email, { message: 'Email is Required' });
    email(n.Email, { message: 'Invalid Email Format' });

    required(n.Password, { message: 'Password is required' });

    // required(n.UserName, { message: 'UserName is required' });
  });

  submited = false;
  data?: any;

  onSubmit() {
    if (this.logForm().valid()) {
      this.submited = true;
      this.data = { ...this.logIN() };
      this.logIN.set({
        Email: '',
        Password: '',
        UserName: '',
      });
      this.logForm().reset();
    }
  }
}
