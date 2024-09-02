import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Chalkline';
  message!: string;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getTestMessage().subscribe(
      (response) => this.message = response.message,
      (error) => console.error('Error fetching message:', error)
    );
  }
}
