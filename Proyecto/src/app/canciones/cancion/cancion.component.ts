import { Component, OnInit } from '@angular/core';
import { WebapiService } from 'src/app/services/webapi.service';
import { cancionInterface } from 'src/app/models/Cancion.models';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css']
})
export class CancionComponent implements OnInit {
 
  constructor(private datos: WebapiService) { }

  ngOnInit(): void {
   
  }
}
