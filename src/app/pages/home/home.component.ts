import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   
  constructor(private _Router:Router){}
  TOAbout()
  {
      this._Router.navigate(['/About'])
  }
  private Platform = inject(PLATFORM_ID);
  OpenMyCv()
  {
    if(isPlatformBrowser(this.Platform))
    {
    window.open('../../../assets/Images/Ahmed Sami Frontend Cv (2).pdf', '_blank');
    }
  }
}
