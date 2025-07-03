import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
ngOnInit() {
    this.animateOnScroll();
  }
private plat = inject(PLATFORM_ID);
  animateOnScroll() {
    if(isPlatformBrowser(this.plat)){
const cards = document.querySelectorAll('.education-card, .languages-card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated');
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(card => {
      observer.observe(card);
    });
    }
    
  }
}
