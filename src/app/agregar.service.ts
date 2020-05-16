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
    if (pPost.categoria === '') {
      alert('Rellena campo categoría');
    } else {
      this.arrPost.push(pPost);
    }
  }

  getAllPosts(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrPost);
    });
  }

  getPostsByCategoria(pCat): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      let arrFiltrado: Post[] = [];
      for (let noticia of this.arrPost) {
        if (pCat === '') {
          arrFiltrado = this.arrPost;
        }
        else if (noticia.categoria === pCat) {
          arrFiltrado.push(noticia);
        }
      }
      resolve(arrFiltrado);
    });
  }

}
