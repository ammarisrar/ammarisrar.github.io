import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-tile',
  templateUrl: './project-tile.component.html',
  styleUrls: ['./project-tile.component.css']
})
export class ProjectTileComponent {
  @Input() company: string = ''
  @Input() role: string = ''
  @Input() projectTitle: string = ''
  @Input() description: string[] = []
}
