import { Component, OnInit } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'hacker-news';
  isLoading$?: Observable<boolean>;
  constructor(private spinnerService: SpinnerService) {}

  ngOnInit(): void {
    this.isLoading$ = this.spinnerService.getStatus().pipe(delay(0));
  }
}
