import { Component, OnInit } from '@angular/core';
import { WebapiService } from 'src/app/services/webapi.service';
import { cantanteInterface } from 'src/app/models/Cantante.models';
import { cancionInterface } from 'src/app/models/Cancion.models';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cantante',
  templateUrl: './cantante.component.html',
  styleUrls: ['./cantante.component.css']
})
export class CantanteComponent implements OnInit {
  public cantantes: cantanteInterface;
  public altaCantante = new cantanteInterface;
  public altaCancion = new cancionInterface;
 
  public cantanteBuscado: cantanteInterface ;
  form: FormGroup;
  formCancion: FormGroup;
  formCantanteSearch: FormGroup;

  constructor(private datos: WebapiService) {
    this.buildForm();
    this.buidlFormCancion();
    this.buidlFormCantanteSearch();
  }

  ngOnInit(): void {
    this.datos.obtenerCantantes().subscribe(data => {

      this.cantantes = data;

    });
  }

  private buidlFormCantanteSearch(){
    this.formCantanteSearch = new FormGroup({
      name: new FormControl('', [Validators.required])
    })
  }

  private buildForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      kindOfMusic: new FormControl('', [Validators.required])
    });

  }

  private buidlFormCancion(){
    this.formCancion = new FormGroup({
      idCantante: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required])

    });
  }

  agregarNuevoCantante(event: Event) {
    event.preventDefault();
    const value = this.form.value;
   
    this.altaCantante.name = this.form.value.name;
    this.altaCantante.kindOfMusic = this.form.value.kindOfMusic;
    this.altaCantante.kindOfMusic = this.form.value.kindOfMusic;

    this.datos.cargarNuevoCantante(this.altaCantante).subscribe(data => {
      console.log(data);
    });
  }


  agregarNuevaCancion(event: Event){
    event.preventDefault();
    const value = this.formCancion.value;
    
   
    this.altaCancion.nombreCancion = this.formCancion.value.name;
    this.altaCancion.idCantante = this.formCancion.value.idCantante;

    this.datos.cargarNuevaCancion(this.altaCancion).subscribe(data => {
      console.log(data);
    });
  }

  cantantePorNombre(event: Event){
    event.preventDefault();
    const value = this.formCantanteSearch.value;
    let nombre = this.formCantanteSearch.value.name;
    this.datos.cantantePorNombre(nombre).subscribe(data => {
      this.cantanteBuscado = data;
     
    });
  }



}
