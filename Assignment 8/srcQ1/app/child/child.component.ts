import { Component, EventEmitter, Input, Output } from '@angular/core';

//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Output() public laserlight=new EventEmitter()

  

  public SendMsg()
  {
    this.laserlight.emit("Hello from Child");
  }

  
}
