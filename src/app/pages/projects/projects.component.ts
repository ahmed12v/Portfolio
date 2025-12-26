import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  activePopup: number |null = null;
  NoLive=false;

  projects = [
    {
      title: 'Savior Website',
      badge: 'Graduation Project',
      date: '01/2025 – 05/2025',
      image: 'Savior.jpg',
      tech: ['Angular', 'TypeScript', 'REST APIs', 'ChatGPT Integration'],
      features: [
        'Full-feature Angular web app for managing medical services',
        'Secure authentication with user/admin roles',
        'Real-time AI chat support',
        'Doctor registration with admin approval system',
        'Modern, responsive design with clean architecture'
      ],
      liveUrl: 'https://savior-mu.vercel.app/about',
      codeUrl: '#'
    },
    {
      title: 'House Hub',
      badge: 'Real Project',
      date: '08/2024 – 11/2024',
      image: 'realState.jpg',
      tech: ['Angular', 'TypeScript', 'REST APIs', 'Role Management'],
      features: [
        'Angular-based real estate system',
        'Secure role management (Admin, Employee, User)',
        'Property browsing (sell/rent) with feedback system',
        'WhatsApp integration for direct contact',
        'Responsive and structured design'
      ],
      liveUrl: 'https://house-hdfikeozg-ahmeds-projects-61e24b6b.vercel.app/login',
      codeUrl: '#'
    },
    {
      title: 'Cafe System Management',
      badge: 'Real Project',
      date: '05/2024 – 07/2024',
      image: 'Cafee.jpg',
      tech: ['Angular', 'TypeScript', 'Role-Based Access', 'Billing System'],
      features: [
        'Angular app for managing café operations',
        'Role-based access (Admin & User)',
        'Admin features: Manage employees, drinks, billing',
        'Track bills by status (paid/unpaid)',
        'Clean, responsive interface with profile management'
      ],
      
      liveUrl: 'https://cafe-system-5qunk62uq-ahmeds-projects-61e24b6b.vercel.app/home',
      codeUrl: '#'
    },
    {
      title: 'E-Commerce Platform',
      badge: 'Academic Project',
      date: '03/2024 – 04/2024',
      image: 'e-Commerce.jpg',
      tech: ['Angular', 'TypeScript', 'Payment Gateway', 'Authentication'],
      features: [
        'Full e-commerce solution with Angular',
        'Authentication and Authorization system',
        'Reviews, Wishlist, Shopping Cart functionality',
        'Address management and coupon system',
        'Online payments with secure deployment'
      ],
      liveUrl: 'https://ec-store-ht2vlyyt8-ahmeds-projects-61e24b6b.vercel.app/login',
      codeUrl: '#'
    }
  ];
  private platformID = inject(PLATFORM_ID)

  openProject(index: number) {
    this.activePopup = index;
    if(isPlatformBrowser(this.platformID)){
    document.body.style.overflow = 'hidden';
    }
  }

  closeProject() {
    this.activePopup = null;
    if (isPlatformBrowser(this.platformID)) {
       document.body.style.overflow = 'auto';
    }
   
  }
}
