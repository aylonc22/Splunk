import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule], // Only CommonModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data: any[] = [];  // Array to store your data
  newNumber: number = 0; // New number to send when adding data

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getData(); // Fetch initial data when component loads
  }

  // Fetch data from the backend API
  getData(): void {
    this.apiService.getData().subscribe((response) => {
      this.data = response;  // Assign response data to the array
    });
  }

  // Method to start the data stream
  startDataStream(): void {
    if (this.newNumber) {
      this.apiService.start(this.newNumber).subscribe(() => {
        // Logic after data is added
        this.getData(); // Optionally refresh the data after adding
      });
    }
    console.log('Data stream started');
  }

  // Method to stop the data stream
  stopDataStream(): void {
   this.apiService.stop().subscribe(() => {
     console.log('Data stream stopped');
   });
  }
}
