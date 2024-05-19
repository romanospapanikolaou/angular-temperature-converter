import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temperature-converter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './temperature-converter.component.html',
  styleUrls: ['./temperature-converter.component.css'],
})
export class TemperatureConverterComponent {
  celsius: number | null = null;
  fahrenheit: number | null = null;

  convertToCelsius(): void {
    if (this.fahrenheit !== null) {
      this.celsius = ((this.fahrenheit - 32) * 5) / 9;
    }
  }

  convertToFahrenheit(): void {
    if (this.celsius !== null) {
      this.fahrenheit = (this.celsius * 9) / 5 + 32;
    }
  }

  clearFields(): void {
    this.celsius = null;
    this.fahrenheit = null;
  }
}
