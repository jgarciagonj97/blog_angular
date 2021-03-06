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
      const productos = JSON.stringify(this.arrPost);
      localStorage.setItem('productos', productos);
    }
  }

  // agregarPost(pPost: Post) {
  //   if (pPost.categoria === '') {
  //     alert('Rellena campo categoría');
  //   } else {
  //     this.arrPost.push(pPost);
  //   }
  // }

  getAllPosts(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      if (localStorage.getItem('productos')) {
        const productitos = JSON.parse(localStorage.getItem('productos'));
        this.arrPost = productitos;
      }
      resolve(this.arrPost);
    });
  }

  // getAllPosts(): Promise<Post[]> {
  //   return new Promise((resolve, reject) => {
  //     resolve(this.arrPost);
  //   });
  // }

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

  borrarBlog(pBlog: Post) {
    for (let i = 0; i < this.arrPost.length; i++) {
      if (pBlog === this.arrPost[i]) {
        this.arrPost.splice(i, 1);
      }
    }
  }

}
