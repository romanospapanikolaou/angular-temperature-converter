import { Component } from '@angular/core';
import { TemperatureConverterComponent } from './temperature-converter/temperature-converter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TemperatureConverterComponent],
  template: '<app-temperature-converter></app-temperature-converter>',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'temperature-converter';
}
