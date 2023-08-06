import { Component } from '@angular/core';

interface Project {
  company: string
  role: string
  projectTitle: string
  description: string[]
}

@Component({
  selector: 'app-project-showcase',
  templateUrl: './project-showcase.component.html',
  styleUrls: ['./project-showcase.component.css']
})
export class ProjectShowcaseComponent {
  projects: Project[] = [
    {
      company: "Autosphere",
      role: "Software Developer",
      projectTitle: "Autosphere Product Suite for Automation",
      description: [
        "Responsible for developing multiple B2B products as a MEAN stack developer.",
        "Created a complete dashboard from scratch using Angular.",
        "Created a companion tray using Angular and ElectronJS.",
        "Implemented communication with Jenkins by consuming its APIs.",
        "Implemented efficient polling using RxJS."
      ]
    },
    {
      company: "AI-XPRT",
      role: "Python Developer",
      projectTitle: "Digital Audit of financial statements",
      description: [
        "Responsible for developing a solution to read invoices using Abbyy FineReader OCR.",
        "Parsed the OCR data for calculation and reporting.",
        "Used MongoDB as the database."
      ]
    },
    {
      company: "Qvantel",
      role: "Python/Django Developer",
      projectTitle: "CSR Toolbox",
      description: [
        "Responsible for developing a B2B application for VEON group using Python/Django.", 
        "Developed multiple use-cases of a CSR application.",
        "Used PyTest for unit testing"
      ]
    }
  ]
}
