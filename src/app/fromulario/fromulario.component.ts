import { Component, OnInit } from '@angular/core';
import { AgregarService } from '../agregar.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'fromulario',
  templateUrl: './fromulario.component.html',
  styleUrls: ['./fromulario.component.css']
})
export class FromularioComponent implements OnInit {

  post: Post;

  constructor(private servicio: AgregarService) {
    this.post = new Post();
  }

  ngOnInit(): void {
  }

  onAgregacion(pPost: Post) {
    this.servicio.agregarPost(pPost);
    this.post = new Post();
  }

}
