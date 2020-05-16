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

}
