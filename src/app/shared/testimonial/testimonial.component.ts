import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {
  @Input() testimonial: string = ""
  @Input() name: string = ""
  @Input() designation: string = ""
  @Input() company: string = ""
}
