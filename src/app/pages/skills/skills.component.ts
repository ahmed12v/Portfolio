import { Component, computed, effect, signal } from '@angular/core';
import { sign } from 'node:crypto';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
// name =signal<string>("Ronaldo A" ,{
//   equal:(a,b)=> a.toLowerCase() === b.toLowerCase()
// })
// number=signal<number>(10)
// namePrefix= this.name.asReadonly()
// User =signal<{name : string , logedIn : boolean}>({
//     name:"ahmed",
//     logedIn:true
// })
// previx = computed(()=> (this.name()) )

// Count = signal(12)
// double = computed(()=> (this.Count() * 2))
// trible=computed(()=>(this.double()+ (this.double()/2)))

// changeDouble(newcount:number)
// {
//   this.Count.set(newcount)
// }

// changeName(name:string){
//   this.name.set(name)
// }

// UodateNumber(number:number)
// {
//   this.number.update((prevValu) => prevValu + number)
// }

// changeUser()
// {
//   this.User.update((prev)=>({
//      prev ,
//      logedIn:!prev.logedIn ,
//      name:prev.name
//     }) ) 
// }

// constructor(){
//   effect(()=>{
//     console.log("name Change Now " , this.name())
//   })
// }

  frontendSkills = [
    { name: 'Angular', level: 100 },
    { name: 'TypeScript', level: 95 },
    { name: 'JavaScript/ES6', level: 90 },
    { name: 'HTML/CSS', level: 100 },
    { name: 'Bootstrap/Tailwind', level: 100 },
    { name: 'PrimeNG', level: 85 },
    { name: 'Sass', level: 80 }
  ];

  backendSkills = [
    { name: '.NET', level: 70 },
    { name: 'C#', level: 90 },
    { name: 'APIs', level: 70 },
    { name: 'Database', level: 90 },
    { name: 'OOP', level: 90 },
    { name: 'LINQ', level: 70 },
    { name: 'MVC', level: 70 }
  ];

  otherSkills = [
    'UI/UX Design',
    'Figma',
    'Responsive Design',
    'FlexBox/Grid',
    'RxJS',
    'Dependency Injection',
    'Change Detection',
    'Signals',
    'Singleton',
    'Lazy Loading',
    'SOLID Principles',
    'Frontend Architecture',
    'Clean Code',
    'Agile',
    'CI/CD',
    'Git/GitHub',
    'Jenkins',
    'Jira',
    'Swagger',
    'DevOps Basics'
  ];

  ngOnInit() {
    // Delay animations for better visual effect
    setTimeout(() => {
      const elements = document.querySelectorAll('.animate__animated');
      elements.forEach(el => {
        el.classList.add('animate__fadeIn');
      });
    }, 300);
  }

}
