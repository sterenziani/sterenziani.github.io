import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from './sidebar/sidebar';

const sectionOrder = ['section1', 'section2', 'section3', 'section4'];

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  standalone: true,
  imports: [CommonModule, Sidebar],
})
export class App implements AfterViewInit, OnDestroy {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  
  menuOpen = true;
  selectedSection = sectionOrder[0];

  constructor() {
    this.menuOpen = window.innerWidth >= 768;
  }

  observer!: IntersectionObserver;
  visibleSections: { id: string; ratio: number }[] = [];

  ngAfterViewInit(): void {
    const options = {
      root: null,
      threshold: Array.from({ length: 101 }, (_, i) => i / 100), // 0.00 to 1.00
    };

    this.observer = new IntersectionObserver((entries) => {
      // If we're at the top of the page, select Section 1
      const scrollFromTop = this.scrollContainer?.nativeElement?.scrollTop ?? 0;

      if (scrollFromTop === 0 && this.selectedSection !== sectionOrder[0]) {
        this.selectedSection = sectionOrder[0];
        return;
      }

      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        if (!id) return;

        // If section is visible, update or add it to the list
        if (entry.isIntersecting) {
          const existing = this.visibleSections.find(s => s.id === id);
          if (existing) {
            existing.ratio = entry.intersectionRatio;
          } else {
            this.visibleSections.push({ id, ratio: entry.intersectionRatio });
          }
        } else {
          // Remove non-visible section
          this.visibleSections = this.visibleSections.filter(s => s.id !== id);
        }
      });

      // Sort by visibility ratio descending
      const sorted = this.visibleSections.sort((a, b) => {
        const ratioDiff = b.ratio - a.ratio;
        if (ratioDiff !== 0)
          return ratioDiff;
        return sectionOrder.indexOf(a.id) - sectionOrder.indexOf(b.id);
      });
      
      if (sorted.length && sorted[0].id !== this.selectedSection) {
        this.selectedSection = sorted[0].id;
      }
    }, options);

    // Observe each section
    sectionOrder.forEach((id) => {
      const el = document.getElementById(id);
      if (el) this.observer.observe(el);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }


  @HostListener('window:resize')
  onResize() {
    this.menuOpen = window.innerWidth >= 768;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  onSectionSelected(section: string) {
    this.selectedSection = section;
    history.pushState(null, '', `#${section}`);
  }

  onMenuCloseRequested() {
    this.menuOpen = false;
  }
}