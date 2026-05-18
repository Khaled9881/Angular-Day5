import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateDeriven } from '../components/template-deriven/template-deriven';
import { ReactiveForm } from '../components/reactive-form/reactive-form';
import { SignalForm } from '../components/signal-form/signal-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TemplateDeriven, ReactiveForm, SignalForm],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Angular_Day5');
}
