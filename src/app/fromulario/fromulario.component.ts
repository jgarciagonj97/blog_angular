import { Component, OnInit } from '@angular/core';
import { AgregarService } from '../agregar.service';

@Component({
  selector: 'fromulario',
  templateUrl: './fromulario.component.html',
  styleUrls: ['./fromulario.component.css']
})
export class FromularioComponent implements OnInit {

  constructor(private servicio: AgregarService) { }

  ngOnInit(): void {
  }

}
