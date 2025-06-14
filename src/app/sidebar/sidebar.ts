import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class Sidebar {
  @Input() selectedSection: string = '';
  @Input() menuOpen: boolean = true;

  @Output() sectionSelected = new EventEmitter<string>();
  @Output() menuCloseRequested = new EventEmitter<void>();

  onClickSidebarButton(event: Event, id: string) {
    event.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      this.sectionSelected.emit(id);

      if (window.innerWidth < 768) {
        this.menuCloseRequested.emit();
      }
    }
  }
}
