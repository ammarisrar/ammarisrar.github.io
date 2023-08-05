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
        "Responsible for developing a B2B application for VEON group using Python/Django.", 
        "Developed multiple use-cases of a CSR application."
      ]
    },
    {
      company: "AI-XPRT",
      role: "Python Developer",
      projectTitle: "Digital Audit of financial statements",
      description: [
        "Responsible for developing a solution to read invoices using Abbyy FineReader OCR, and to extract and parse data from them.", 
        "Used MongoDB as the database."
      ]
    },
    {
      company: "Qvantel",
      role: "Python/Django Developer",
      projectTitle: "CSR Toolbox",
      description: [
        "Responsible for developing a B2B application for VEON group using Python/Django.", 
        "Developed multiple use-cases of a CSR application."
      ]
    }
  ]
}
