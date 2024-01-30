import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule,FormBuilder,Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[FormBuilder,Validators]
})
export class AppComponent 
{
 
  constructor(public fbobj:FormBuilder)
  {  }

  cusform=this.fbobj.group(
    {
      firstname:['',[Validators.required,Validators.pattern("[a-zA-Z ]*")]],
    }
  )
}
