import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule], // Only CommonModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatePipe]  // Provide DatePipe here
})
export class AppComponent {
  data: any[] = [];  // Array to store your data
  newNumber: number = 0; // New number to send when adding data
  intervalId: any;  // Store the interval ID
  isStreamRunning: boolean = false; // Flag to track if the stream is running

  constructor(private apiService: ApiService, private datePipe: DatePipe) {}

  ngOnInit(): void {     
      this.getData();     
  }

  // Fetch data from the backend API
  getData(): void {
    this.apiService.getData().subscribe((response) => {
      this.data = response;  // Assign response data to the array
    });
  }

  startDataStream(): void {   
    this.apiService.start(this.newNumber).subscribe(() => {
      console.log('here');
      this.getData(); 
    });

    // Start an interval to fetch data every 3 seconds
    this.intervalId = setInterval(() => {
      this.getData();
    }, 3000);   
    this.isStreamRunning = true;
    console.log('Data stream started');    
  }

  stopDataStream(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;     
      
      this.apiService.stop().subscribe(() => {
        console.log('Data stream stopped');
      });
      this.isStreamRunning = false; 
    }
  }

  // Utility method to format timestamp using DatePipe
  formatTimestamp(timestamp: string): string {
    // Parse the ISO 8601 timestamp and format it as 'yyyy-MM-dd HH:mm:ss'
    const formattedTimestamp = this.datePipe.transform(timestamp, 'yyyy-MM-dd HH:mm:ss');
    return formattedTimestamp || timestamp;
  }
}
