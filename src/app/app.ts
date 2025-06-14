import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Sidebar } from './sidebar/sidebar';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  standalone: true,
  imports: [CommonModule, Sidebar],
})
export class App {
  menuOpen = true;
  screenWidth = window.innerWidth;

  selectedSection = 'section1';

  constructor() {
    this.menuOpen = this.screenWidth >= 768;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 768) {
      this.menuOpen = false;
    } else {
      this.menuOpen = true;
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}