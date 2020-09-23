import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';
import { cantanteInterface } from '../models/Cantante.models';
import { cancionInterface } from 'src/app/models/Cancion.models';


@Injectable({
  providedIn: 'root'
})
export class WebapiService {
  public urlAPI: string = 'http://localhost:54768/';
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });
  constructor(private http: HttpClient) { }

  obtenerCantantes(): Observable<cantanteInterface> {
    return this.http.get<cantanteInterface>(this.urlAPI + 'api/Cantantes');
  }

  obtenerCanciones(): Observable<cancionInterface> {
    return this.http.get<cancionInterface>(this.urlAPI + 'api/Cancions');
  }

  cargarNuevoCantante(cantante: cantanteInterface): Observable<cantanteInterface> {

    return this.http.post<cantanteInterface>(this.urlAPI + 'api/Cantantes', cantante, {headers: this.headers});
  }

  cargarNuevaCancion(cancion: cancionInterface): Observable <cancionInterface>{

    return this.http.post<cancionInterface>(this.urlAPI + 'api/Cancions', cancion,{headers: this.headers});
  }

  cantantePorNombre(nombreCantante: string): Observable<cantanteInterface>{
    return this.http.get<cantanteInterface>(this.urlAPI + 'api/Cantantes?nombreCantante=' + nombreCantante);
  }
}
