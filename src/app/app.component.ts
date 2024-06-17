import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'belajar_angular';

  dummyData = {
    title: 'MyFirst Project',
    content: 'This is my first angular application project',
  };

  internalMessage: string = 'This is my internal message app.component';

  constructor(private route: Router) {}

  ngOnInit(): void {
    initFlowbite();
  }

  receiveMessage($message: string): void {
    this.internalMessage = $message;
  }

  navigateToPage(page: string): void {
    this.route.navigate([page]);
  }
}
