import { Injectable } from '@angular/core';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class AgregarService {

  arrPost: Post[];

  constructor() {
    this.arrPost = [];
  }

  agregarPost(pPost: Post) {
    this.arrPost.push(pPost);
  }

  getAllPosts(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrPost);
    });
  }

  getPostsByCategoria() {

  }
}
