import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LinkType, Project } from '../../types/types';
import { LinkButton } from "../link-button/link-button";

@Component({
  selector: 'project-card',
  imports: [CommonModule, LinkButton],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss'
})
export class ProjectCard {
  @Input() project!: Project;

  descriptionParagraphs() {
    return this.project.description.split(/\r?\n\s*\r?\n/).map(p => p.trim());
  }

  linkEntries(): { type: LinkType; url: string }[] {
    if(!this.project.links)
      return [];
    
    return Object.entries(this.project.links).map(([type, url]) => ({
      type: type as LinkType,
      url
    }));
  }
}
