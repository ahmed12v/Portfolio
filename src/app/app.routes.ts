import { ExperienceComponent } from './pages/experience/experience.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './ErorrInRouting/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path:'' , redirectTo:'home' , pathMatch:'full'
    },

    {
        path:'home',
        loadComponent:()=>
            import('./pages/home/home.component').then((c)=>c.HomeComponent)
    },

    {
        path:'About',
        loadComponent:()=>
            import('./pages/about/about.component').then((c)=>c.AboutComponent)
    },

    {
        path:'Skills',
        loadComponent:()=>
            import('./pages/skills/skills.component').then((c)=>c.SkillsComponent)
    },

    {
        path:'Cours',
        loadComponent:()=>
            import('./pages/courses/courses.component').then((c)=>c.CoursesComponent)
    },

    {
        path:'Project',
        loadComponent:()=>
            import('./pages/projects/projects.component').then((c)=>c.ProjectsComponent)
    },
    {
        path:'exper',
        loadComponent:()=>
            import('./pages/experience/experience.component').then((c)=>c.ExperienceComponent)
    },

    {
        path:'**',
        loadComponent:()=>
            import('./ErorrInRouting/not-found/not-found.component').then((c)=>c.NotFoundComponent)
    },

    


];
