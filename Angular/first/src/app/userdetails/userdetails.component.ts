import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrl: './userdetails.component.css'
})
export class UserdetailsComponent {
  constructor() { }
    @Input() item: {name:string,email:string}={name:'',email:''}
    ngOnInit(): void{
      
    }
}
