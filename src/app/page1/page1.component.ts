import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
  postList: any = [];

  newPost: string = "";
  newDescription: string = "";
  constructor(private postServ: PostsService) { }

  ngOnInit(): void {
  }

  addPost() {
    this.postServ.addNewPost(this.newDescription, this.newPost).subscribe((data: any) => {
      console.log(data);
    })
  }


}
