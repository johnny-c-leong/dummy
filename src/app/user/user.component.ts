import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'
import { Observable } from "rxjs/Rx"
import $ from 'jquery';
// import 'rxjs/Rx'



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string ;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  posts: Post[];
  isEdit:boolean=false;





  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.name = 'Susan';
    this.age=30;
    this.address={
      street:'50 Main st',
      city:'boston',
      state:'MA'
    };
    this.hobbies=['Sing','Dance','Play'];
    this.dataService.getPosts().subscribe(
      (posts) => {
        this.posts = posts;
      }
    )


   this.dataService.getUser('BradTraversy').subscribe(x=>{console.log(x)})
   Observable.fromEvent($("#myinput"),'keyup').subscribe(x=>{})

 // const s$ =  Observable.fromEvent($("#myinput"),'keyup')
  // .map(e=> log e.target.value)
  // .switchMap(v=>{
  //     return Observable.fromPromise( this.dataService.getUser(v));
  // })

  // s$.subscribe(x=>{
  //     $("#name").text(x.name);
  //         $("#blog").text(x.blog);
  //         $("#repos").text(x.public_repos);
  // })


  }


onClick(){
 this.name ='Robert'
 this.hobbies.push('New Hobby')
}

addHobby(hobby){
  this.hobbies.unshift(hobby);
  return false;
}

toggleEdit(){
this.isEdit =!this.isEdit;

}


deleteHobby(hobby){
  for (let i=0;i < this.hobbies.length; i++){
    if (this.hobbies[i]==hobby){
      this.hobbies.splice(i,1);
      break;
    }

  }
}


}





interface Address{
  street:string,
  city:string,
  state:string


}


interface Post{
  id:number,
  title:string,
  body:string,
  userId :number

}
