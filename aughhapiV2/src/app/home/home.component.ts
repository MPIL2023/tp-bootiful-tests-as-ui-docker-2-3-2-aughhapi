import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentBase: number | undefined;
  newNumber: number | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getCurrentBase();
  }

  getCurrentBase(): void {
    const url = 'http://localhost:8085/adder/current';
    this.http.get<number>(url)
      .subscribe(currentBase => this.currentBase = currentBase);
  }

  addNumber(): void {
    const url = 'http://localhost:8085/adder';
    const data = { num: this.newNumber };
    this.http.post<number>(url, data.num)
      .subscribe(currentBase => {
        this.currentBase = currentBase;
        this.newNumber = 0;
      });
  }
  
}
