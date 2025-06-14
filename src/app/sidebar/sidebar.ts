import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  @Input() selectedSection: string = '';
  @Input() menuOpen: boolean = true;

  
  screenWidth = window.innerWidth;

  onClickSidebarButton(event: Event, id: string) {
    event.preventDefault();
    this.scrollToSection(id);
    history.pushState(null, '', `#${id}`);
  }

  scrollToSection(id: string){
    const el = document.getElementById(id);
    if (el) {
      this.selectedSection = id;
      el.scrollIntoView({ behavior: 'smooth' });
      if (this.screenWidth < 768) {
        this.menuOpen = false;
      }
    }
  }
}
