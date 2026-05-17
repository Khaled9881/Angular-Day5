import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateDeriven } from '../components/template-deriven/template-deriven';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TemplateDeriven],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Angular_Day5');
}
