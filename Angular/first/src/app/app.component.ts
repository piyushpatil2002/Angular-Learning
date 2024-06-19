import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'first';
  // name = 'Hello';
  disable = true;
  // getFirstName(name:string){
  //   // alert("Function Called");
  //   alert(name);
  // }
  // getLastName(name2: string){
  //   // alert("Function Called Success!!");
  //   alert(name2);
  // }
  // getData(val:string){
  //   console.warn(val);
  // }
  // To get the value of input
  // displayval:string='';
  // getName(val:string){
  //   console.warn(val)
  //   this.displayval=val;
  // }

  // Counter 
  // count=0;
  // counter(type: string){
  //   type==='plus' ? this.count++ : this.count--;
  // }
  // show='yes';
  // color='Grey';
  // users=['abc','xyz','pqr','iot'];
  // userDetails=[
  //   { name: 'Piyush', Dept:'CS',College:'VIIT',City: 'Pune'},
  //   { name: 'abc', Dept:'Mech', College:'VIT', City: 'Pune'},
  // ];
  userss=[
    {name:'abc',phone:'1111'},
    {name:'sam',phone:'2222'},
    {name:'xyz',phone:'1111'},
  ]
  // style binding
  // color="violet"
  // bgColor='green';
  // updatecolor(){
  //   this.color="orange";  
  //   this.bgColor='red'
  // }

  // Form Data Display
  // userdata:any={};
  // getformdata(data:any){
  //   console.log(data)
  //   this.userdata=data
  // }

  // Toggle Logic
  // display=false
  // toggle(){
  //   this.display=!this.display
  // }

  Name='To Do List'

  // Add Task
  // list:any[]=[];
  // addtask(item:string){
  //   console.warn(item)
  //   this.list.push({id:this.list.length,name:item});
  //   console.warn(this.list)
  // }

  // remove Task
  // removetask(id:number){
  //   console.warn(id) 
  //   this.list=this.list.filter(item=>item.id!==id)
  // }

  // data=10;

  // updateChild(){
  //   this.data=Math.floor(Math.random()*10)
  // }

  // parent to child data
  // title='Reusable Component';
  // userDetails=[
  //   {name: 'Xyz', email:'xyz@gmail.com'},
  //   {name:'abc', email:'abc@gmail.com'},
  //   {name:'pqr', email:'pqr@gmail.com'}
  // ]

  // Child to Parent
  // title='Send Data Child to Parent';
  // data="";
  // updateData(item:string){
  //   console.warn(item)
  //   this.data=item
  // }

  
  // Two Way Binding
  // name:any;

  // Template Reference Variable
  title='Template Reference Variable'
  getval(item:any){
    console.warn(item)
  }
}
