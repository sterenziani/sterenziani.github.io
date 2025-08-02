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
  @Input() menuOpen = true;
  @Output() sidebarItemClicked = new EventEmitter<void>();

  onNavClick() {
    this.sidebarItemClicked.emit();
  }
}
