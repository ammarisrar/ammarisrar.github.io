import { Component } from '@angular/core';

interface Testimony {
  testimonial: string,
  name: string,
  designation: string,
  company: string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  testimonials: Testimony[] = [
    {
      testimonial: "[Ammar] is an independent tech that requires minimal supervision and is also known as an individual who is willing to take risks and he will reach out to people and involve them with projects which already demonstrate that Ammar has been effective in his role and has gained respect from all his peers! An individual who never fears with providing suggestions and opinions with strong characteristics and justification!",
      name: "Amanda Lai",
      designation: "Client Delivery Manager",
      company: "AI-XPRT"
    },
    {
      testimonial: "Ammar has done an excellent job in the Barclays project. In every task that has been assigned to him, Ammar has always ensured to go above and beyond. He is self-motivated, has excellent verbal and written communication skills, and is able to work effectively to ensure the completion of all projects in a timely manner. In addition, Ammar was always willing to offer his assistance and had an excellent rapport with his colleagues, as well as our clients.",
      name: "Hasheni Jeyakumaran",
      designation: "Human Resource Manager",
      company: "AI-XPRT"
    }
  ]
}
