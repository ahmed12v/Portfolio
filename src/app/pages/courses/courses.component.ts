import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
 
  ngOnInit() {
    // Add intersection observer for scroll animations
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__fadeIn');
        }
      });
    }, { threshold: 0.1 });

    timelineItems.forEach(item => {
      observer.observe(item);
    });
  }

  viewCertificate(course: string) {
    // Implement certificate viewing logic here
    console.log(`Viewing certificate for ${course}`);
  }
}
