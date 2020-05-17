import { Component, OnInit } from '@angular/core';
import { AgregarService } from '../agregar.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  arrPostHechos: Post[];

  constructor(private servicio: AgregarService) { }

  async ngOnInit() {
    this.arrPostHechos = await this.servicio.getAllPosts();
  }

  async filtrarCat($event) {
    this.arrPostHechos = await this.servicio.getPostsByCategoria($event.target.value);
  }

  onBorrar(pPost: Post) {
    if (confirm('¿Seguro que quieres borrarlo?')) {
      this.servicio.borrarBlog(pPost);
    }
  }

}
