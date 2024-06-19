import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  constructor() { }
  @Output() updateDataevent=new EventEmitter<string>(); 
  ngOnInit(): void{
  }


}
