import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  posts: Post[];


  constructor(private dataService:DataService) { }


  ngOnInit() {
    
    this.dataService.getPosts().subscribe(
      (posts) => {
        this.posts = posts;
      }
    )


  }

}

interface Post{
  id:number,
  title:string,
  body:string,
  userId :number

}