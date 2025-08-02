import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from './components/sidebar/sidebar';
import { MainContent } from './components/main-content/main-content';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

declare var bootstrap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, Sidebar, MainContent],
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

  onSidebarItemClicked() {
    if (window.innerWidth < 768)
      setTimeout(() => this.menuOpen = false, 100);
  }

  @HostListener('window:resize')
  onResize() {
    this.menuOpen = window.innerWidth >= 768;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}