import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SidebarLink } from '../../types/types';

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

  sidebarLinks: SidebarLink[] = [
    {
      label: "Webapps",
      hrefTag: "webapps"
    },
    {
      label: "Games",
      hrefTag: "games"
    },
    {
      label: "Tools",
      hrefTag: "tools"
    }
  ]

  onNavClick() {
    this.sidebarItemClicked.emit();
  }
}
