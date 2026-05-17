import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { FromTest } from '../../models/model';
import { CommonModule } from '@angular/common';
import { email } from '@angular/forms/signals';
// import { NgIf } from '../../../node_modules/@angular/common/types/_common_module-chunk';

@Component({
  selector: 'app-template-deriven',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-deriven.html',
  styleUrls: ['./template-deriven.css'],
})
export class TemplateDeriven {
  data?: any;
  isValid?: boolean = false;

  onSubmut(kForm: any) {}

  createDiv(kForm: any) {
    if (kForm.valid) {
      this.isValid = true;

      this.data = { ...kForm.value };
      kForm.resetForm();
    }
  }
}
