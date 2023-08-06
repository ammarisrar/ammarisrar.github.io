import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, concat, concatMap, delay, first, from, ignoreElements, interval, map, mergeMap, of, repeat, take, takeUntil, timer } from 'rxjs';
import { ContactService } from 'src/app/services/contact.service';

interface Testimony {
  testimonial: string,
  name: string,
  designation: string,
  company: string
}

interface Type {
  word: string,
  speed: number,
  backwards?: boolean
}

interface Achievement {
  title: string,
  description: string,
  asset: string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  designation: string = ""
  allDesignations: string[] = ["a Frontend Developer", "a Python Developer", "a Django Developer", "an Automation Engineer"]

  nameUnsub = new Subject<void>();
  designationsUnsub = new Subject<void>();

  constructor(public contactService: ContactService) { }

  ngOnDestroy(): void {
    this.designationsUnsub.next()
    this.designationsUnsub.complete()
  }

  ngOnInit(): void {
    from(this.allDesignations).pipe(
      concatMap(this.typeEffect$),
      repeat()
    ).subscribe(
      {
        next: (val) => {
          this.designation = val
        }
      }
    )
  }

  type$ = ({ word, speed, backwards = false }: Type) =>
    interval(speed).pipe(
      map(x =>
        backwards ? word.substr(0, word.length - x - 1) : word.substr(0, x + 1)
      ),
      take(word.length)
    );

  typeEffect$ = (word: string) =>
    concat(
      this.type$({ word, speed: 120 }), // type forwards
      of("").pipe(
        delay(2000),
        ignoreElements()
      ), // pause
      this.type$({ word, speed: 60, backwards: true }), // delete
      of("").pipe(
        delay(300),
        ignoreElements()
      ) // pause
    );

  achievements: Achievement[] = [
    {
      title: "International Industry experience",
      description: "Worked with multiple reputed international organizations on B2B products, and received high praise.",
      asset: "favourite"
    },
    {
      title: "Gold Medalist",
      description: "Received a gold medal for excellent academic performance, receiving 5 academic scholarships. Got the degree with 3.78 CPGA.",
      asset: "winner"
    },
    {
      title: "Innovation Mindset",
      description: 'Quality first! Therefore, I always strive for improvement, coming up with with new ideas for features and overall product efficiency.',
      asset: "idea"
    },
    {
      title: "Adaptive Thinking",
      description: "I am always learning, and I adapt to the environment. I learn and I strive to improve myself, always growing my knowledge and thought-process.",
      asset: "options"
    }
  ]

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
