import { Routes } from '@angular/router';
import { InvalidComponent } from './invalid/invalid.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { BooksComponent } from './books/books.component';


export const routes: Routes = [
    
    {path:'technologies',component:TechnologiesComponent},
    {path:'books',component:BooksComponent},
    {path:'**',component:InvalidComponent}
];
