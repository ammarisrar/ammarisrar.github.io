import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectShowcaseComponent } from './project-showcase/project-showcase.component';
import { ProjectTileComponent } from './project-tile/project-tile.component';


@NgModule({
  declarations: [
    ProjectShowcaseComponent,
    ProjectTileComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
