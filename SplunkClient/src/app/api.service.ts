import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Marks this service as available across the entire app
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/data'; // Backend API URL

  constructor(private http: HttpClient) {}

  // Method to get data from the backend
  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Method to send data to the backend
  start(number: number): Observable<any> {
    return this.http.post<any>(this.apiUrl, { number });
  }

  // Method to stop data stream
  stop(): Observable<any> {
    return this.http.post<any>('http://localhost:3000/stop',{});
  }
}
