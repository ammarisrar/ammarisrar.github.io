import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ButtonComponent } from '../shared/button/button.component';
import { TestimonialComponent } from '../shared/testimonial/testimonial.component';
import { FeatureComponent } from '../shared/feature/feature.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    ButtonComponent,
    TestimonialComponent,
    FeatureComponent
  ]
})
export class HomepageModule { }
