import { Component } from '@angular/core';
import { count } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   public Name : string="";
   public charcount:number=0;

   public Count()
   {
      this.charcount = this.Name.length;
     
   }
}
