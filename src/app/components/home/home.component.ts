import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  input1: string = '';
  input2: string = '';
  steps = [1, 2, 3, 4]; // Number of steps
  currentStep = 1; // Start from step 1

  nextStep() {
    if (this.currentStep < this.steps.length) {
      this.currentStep++;
    }
  }
  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
}
