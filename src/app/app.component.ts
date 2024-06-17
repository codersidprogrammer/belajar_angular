import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'belajar_angular';

  @ViewChild('sampleDiv') elementDiv!: ElementRef<HTMLDivElement>;

  dummyData = {
    title: 'MyFirst Project',
    content: 'This is my first angular application project',
  };

  internalMessage: string = 'This is my internal message app.component';
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private route: Router
  ) {}

  ngOnDestroy(): void {
    this.dummyData = {
      title: '',
      content: '',
    };
    console.log('--- on destroy ---');
    console.log(this.dummyData);
  }
  ngAfterViewInit(): void {
    console.log('--- after view init ---');
    console.log(this.elementDiv);
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      initFlowbite();
    }
    console.log('--- on init ---');
    console.log(this.elementDiv);
    console.log(this.dummyData);
  }

  receiveMessage($message: string): void {
    this.internalMessage = $message;
  }

  navigateToPage(page: string): void {
    this.route.navigate([page]);
  }
}
