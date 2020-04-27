import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Categoria, Producto } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  constructor(private http: HttpClient) { }

  getLista(){
    //return this.http.get<Categoria[]>(environment.urlServicios+"categoria");
    return this.http.get<Categoria[]>("assets/categoria.json");
    
  }
  
  getFiltroProducto(termino:string){
    //return this.http.get<any>(environment.urlServicios+"categoria");
    return this.http.get<Categoria[]>("assets/categoria.json");
  }

}
