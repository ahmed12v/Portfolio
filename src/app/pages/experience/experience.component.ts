import { isPlatformBrowser } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit {
ngOnInit() {
  
    this.animateOnScroll();
  }
  private plat = inject(PLATFORM_ID);


  animateOnScroll() {

    if (isPlatformBrowser(this.plat)) {

      const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    const cards = document.querySelectorAll('.exp-alt-card');
    cards.forEach(card => {
      observer.observe(card);
    });
    }
   
  }
}
