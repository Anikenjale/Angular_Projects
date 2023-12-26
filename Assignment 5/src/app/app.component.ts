import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { FirstcompComponent } from './firstcomp/firstcomp.component';
import { SecondcompComponent } from './secondcomp/secondcomp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,DemoComponent,FirstcompComponent,SecondcompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FirstComp';
}
