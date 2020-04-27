import { Component, OnInit } from '@angular/core';
import { InicioService } from 'src/app/services/inicio/inicio.service';
import { Categoria, Producto } from 'src/app/interfaces/interfaces';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ProductoPage } from '../producto/producto.page';
import { CategoriasPage } from '../categorias/categorias.page';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public lstCategoria: Categoria[]=[];
  public lstProductos: Producto[]=[];
  public slideOpts={
    slidesPerView: 2.0,
    freeMode:true
  };

  constructor(private _service_inicio:InicioService,private router:Router, public viewCtrl: ModalController) { }

  ngOnInit() {
   this.loadList();
  }

  loadList(){
    this._service_inicio.getLista().subscribe(
      res=>{
         this.lstCategoria = res;
         this.lstProductos = this.lstCategoria[0].producto;
        console.log(res);
     }   
    );
  }

  find(ev: any) {
   let valor = ev.target.value;
    console.log(valor);
    if(valor===undefined || valor === null || valor === ""){
      this.cancelFind();
    }else{
      this._service_inicio.getFiltroProducto(valor).subscribe(
        res=>{
            this.lstCategoria = res as Categoria[];

            let busqueda = valor;
            let expresion = new RegExp(`${busqueda}.*`, "i");
            let mascotasFiltradas = this.lstCategoria.filter(entidad => expresion.test(entidad.nombre));
            this.lstCategoria =  mascotasFiltradas;
            console.log(res);
            
        },
        error=>{
  
        }
      );
    }
 
  }

  cancelFind(){
    this.loadList();
  }

  openPorCategoria(categoria:any){
      //this.router.navigate(["/categorias/",categoria.id]);
      this.abrirModalCategorias(categoria.id);
  }

  async abrirModalCategorias(ids){
    const myModal = await this.viewCtrl.create({
      component:CategoriasPage,
      componentProps:{id:ids}});
    await myModal.present();
  }

  openProducto(producto:any){

    console.log("PRODUCTO = "+producto.id)
    this.abrirModal(producto.id);
  }


  async abrirModal(ids){
    const myModal = await this.viewCtrl.create({
      component:ProductoPage,
      componentProps:{id:ids}});
    await myModal.present();
  }
  

  

}
