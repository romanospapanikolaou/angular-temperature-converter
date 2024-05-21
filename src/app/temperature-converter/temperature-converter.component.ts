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

// Function to update the background color based on the temperature
function updateBackgroundColor(): void {
  const celsiusInput = document.getElementById('celsius') as HTMLInputElement;
  const temperature = parseFloat(celsiusInput.value);
  const converter = document.querySelector(
    '.temperature-converter'
  ) as HTMLElement;

  let color: string;

  if (isNaN(temperature)) {
    color = '#c3cfe2'; // Default color for invalid input
  } else if (temperature < 0) {
    color = '#00f'; // Cold temperature (blue)
  } else if (temperature >= 0 && temperature <= 30) {
    color = '#0f0'; // Moderate temperature (green)
  } else if (temperature > 30 && temperature <= 60) {
    color = '#ff0'; // Warm temperature (yellow)
  } else {
    color = '#f00'; // Hot temperature (red)
  }

  converter.style.background = color;
}

// Function to convert Celsius to Fahrenheit
function convertTemperature(): void {
  const celsiusInput = document.getElementById('celsius') as HTMLInputElement;
  const fahrenheitInput = document.getElementById(
    'fahrenheit'
  ) as HTMLInputElement;
  const celsius = parseFloat(celsiusInput.value);

  if (!isNaN(celsius)) {
    const fahrenheit = (celsius * 9) / 5 + 32;
    fahrenheitInput.value = fahrenheit.toFixed(2);
  }
}

// Function to clear the inputs and reset the background color
function clearInputs(): void {
  const celsiusInput = document.getElementById('celsius') as HTMLInputElement;
  const fahrenheitInput = document.getElementById(
    'fahrenheit'
  ) as HTMLInputElement;
  const converter = document.querySelector(
    '.temperature-converter'
  ) as HTMLElement;

  celsiusInput.value = '';
  fahrenheitInput.value = '';
  converter.style.background =
    'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)';
}

// Adding event listeners
document.addEventListener('DOMContentLoaded', () => {
  const celsiusInput = document.getElementById('celsius') as HTMLInputElement;
  const convertButton = document.getElementById(
    'convert-button'
  ) as HTMLButtonElement;
  const clearButton = document.getElementById(
    'clear-button'
  ) as HTMLButtonElement;

  celsiusInput.addEventListener('input', updateBackgroundColor);
  convertButton.addEventListener('click', convertTemperature);
  clearButton.addEventListener('click', clearInputs);
});
