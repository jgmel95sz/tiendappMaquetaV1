import { Component, OnInit } from '@angular/core';
import { TiendaService } from 'src/app/services/tienda/tienda.service';
import { TiendaDetallePage } from '../tienda-detalle/tienda-detalle.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  styleUrls: ['./tienda.page.scss'],
})
export class TiendaPage implements OnInit {

  constructor(public _service_tienda:TiendaService, public viewCtrl: ModalController ) {
    this._service_tienda.tiendas = [];
   }

  ngOnInit() {
    this._service_tienda.getTienda();
  }

  onClick(id:any){

  }

  siguiente_pagina(infinite){
    this._service_tienda.getTienda().then(()=> {
      infinite.target.complete();
    });
  }


  openTienda(tienda:any){
    console.log("TIENDA = "+tienda.id)
    this.abrirModal(tienda.id);
  }


  async abrirModal(ids){
    const myModal = await this.viewCtrl.create({
      component:TiendaDetallePage,
      componentProps:{id:ids}});
    await myModal.present();
  }

}
