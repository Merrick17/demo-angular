import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {
  postList: any = [];
  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe((data: any) => {
      console.log(data);
      if (data.success) {
        this.postList = data.result;
      }
    })
  }

}
