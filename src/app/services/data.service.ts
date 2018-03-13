import { Injectable } from '@angular/core';
// import $ from 'jquery';
import { Http } from '@angular/http';
// import 'rxjs/add/operator/map'
import 'rxjs/Rx'

@Injectable()
export class DataService {

  constructor(public ht:Http) { 

    console.log('Data Service running');
    
  }

getPosts(){
  return this.ht.get('https://jsonplaceholder.typicode.com/posts')
  .map(res=>res.json());



}
// getUser(username){
//   return $.ajax({
//       url:'https://api.github.com/users/'+ username,
//       datatype:'json'
//   })
// }

getUser(username){
  return this.ht.get('https://api.github.com/users/'+ username)
  .map(res=>res.json());
}


}
