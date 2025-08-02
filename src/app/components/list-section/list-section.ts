import { Component, Input } from '@angular/core';
import { faGamepad, faToolbox, faGlobe, faStar } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'list-section',
  imports: [FaIconComponent],
  templateUrl: './list-section.html',
  styleUrl: './list-section.scss'
})
export class ListSection {
  @Input() symbol!: 'toolbox' | 'globe' | 'gamepad';
  @Input() title!: string;
  @Input() description!: string;

  faToolbox = faToolbox;
  faGlobe = faGlobe;
  faGamepad = faGamepad;
  faStar = faStar;

  iconMap = {
    toolbox: this.faToolbox,
    globe: this.faGlobe,
    gamepad: this.faGamepad,
  };

  get icon() {
    return this.iconMap[this.symbol] ?? this.faStar;
  }
}
