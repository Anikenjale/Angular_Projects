import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

@Component({
  selector: 'app-root',
  standalone:true,
  template: `
      <h1>Demonstration of Inline HTML</h1>
      <div>
        <h1>Enter some text here:</h1>
        <input type="text">
        <h2 >{{Display()}}</h2>

      </div>
      
  `
})
@Component({
   selector:'App-root',
   standalone:true,
   styles:['h2{color:blue}']
})
export class AppComponent {

  public Display()
  {
    return "Marvellous Infosystem";
  }
  
}
