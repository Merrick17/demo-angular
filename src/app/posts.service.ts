import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }


  addNewPost(desc: any, title: any) {
    let token = localStorage.getItem('token') || "";
    let userId = localStorage.getItem('userID');
    return this.http.post('http://localhost:3000/post/add', {
      'title': title,
      'description': desc,
      'createdBy': userId
    }, { headers: { 'x-access-token': token } })
  }

  getAllPosts() {
    let token = localStorage.getItem('token') || "";
    return this.http.get('http://localhost:3000/post/', { headers: { 'x-access-token': token } })
  }
}
