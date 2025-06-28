import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from './sidebar/sidebar';
import { MainContent } from './main-content/main-content';

declare var bootstrap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  standalone: true,
  imports: [CommonModule, Sidebar, MainContent],
})
export class App implements AfterViewInit {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  
  menuOpen = true;
  
  constructor() {
    this.menuOpen = window.innerWidth >= 768;
  }

  ngAfterViewInit(): void {
    const scrollElement = this.scrollContainer?.nativeElement;
    if (scrollElement) {
      bootstrap.ScrollSpy.getOrCreateInstance(scrollElement, {target: '#sidebar', offset: 0});
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.menuOpen = window.innerWidth >= 768;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}