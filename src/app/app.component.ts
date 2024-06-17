import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    initFlowbite();
  }
}
