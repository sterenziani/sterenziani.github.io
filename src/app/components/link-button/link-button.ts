import { Component, Input } from '@angular/core';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPlayCircle, faStar } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { LinkType } from '../../types/types';

@Component({
  selector: 'link-button',
  imports: [FaIconComponent],
  templateUrl: './link-button.html',
  styleUrl: './link-button.scss'
})
export class LinkButton {
  @Input() type!: LinkType;
  @Input() url!: string;

  faGithub = faGithub;
  faYoutube = faYoutube;
  faPlayCircle = faPlayCircle;
  faStar = faStar;

  iconMap = {
    source: this.faGithub,
    video: this.faYoutube,
    demo: this.faPlayCircle,
  };

  labelMap = {
    source: "Source",
    video: "Video",
    demo: "Demo",
  };

  get icon() {
    return this.iconMap[this.type] ?? this.faStar;
  }

  get label() {
    return this.labelMap[this.type] ?? "";
  }
}
