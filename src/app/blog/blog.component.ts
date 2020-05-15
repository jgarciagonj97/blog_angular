import { Component, OnInit } from '@angular/core';
import { AgregarService } from '../agregar.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private servicio: AgregarService) { }

  ngOnInit(): void {
  }

}
