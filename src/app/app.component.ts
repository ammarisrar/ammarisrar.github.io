import { Component } from '@angular/core';
import { ContactService } from './services/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public contactService: ContactService) {}

  title = 'ammarIsrar';
}
