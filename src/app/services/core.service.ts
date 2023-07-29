import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  sendEmail() {
    window.location.href="mailto:ammarisrar28@gmail.com"
  }

  downloadResume() {
    window.open("../../assets/Ammar Israr.pdf")
  }

  openGitHubSrc() {
    window.location.href="https://github.com/ammarisrar/ammarisrar.github.io"
  }
}
