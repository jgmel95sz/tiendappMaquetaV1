import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductoService } from 'src/app/services/producto/producto.service';
import { InicioService } from 'src/app/services/inicio/inicio.service';
import { IonList, ModalController } from '@ionic/angular';
import { PedidoPage } from '../pedido/pedido.page';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  @ViewChild('list',{static: false}) list: IonList;
  lstproduct :any;
  constructor(private _servcio_producto:ProductoService,private _service_inicio:InicioService, public viewCtrl: ModalController) { }

  ngOnInit() {
    this.loadList();
  }

  loadList(){
    this._servcio_producto.getListProductos().subscribe(
      res=>{
         this.lstproduct = res;
        console.log(res);
     }   
    );
  }

addProducto(item:any){
  console.log(item)
}

restarProducto(item:any){
  console.log(item)
  this.list.closeSlidingItems(); // efecto de cerrar los botones de los costados
}

eliminarProducto(item:any){
  console.log(item)
}

openPedido(){
  //this.router.navigate(["/categorias/",categoria.id]);
  this.abrirModalPedido();
}

async abrirModalPedido(){
const myModal = await this.viewCtrl.create({
  component:PedidoPage
});
await myModal.present();
}

}
