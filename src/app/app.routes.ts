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
        path:'**',
        loadComponent:()=>
            import('./ErorrInRouting/not-found/not-found.component').then((c)=>c.NotFoundComponent)
    },

    


];
