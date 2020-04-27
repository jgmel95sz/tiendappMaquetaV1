import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ProductoPage } from '../producto/producto.page';
import { ProductoPageModule } from '../producto/producto.module';
import { CategoriasPage } from '../categorias/categorias.page';
import { CategoriasPageModule } from '../categorias/categorias.module';

@NgModule({
  entryComponents:[
    ProductoPage,
    CategoriasPage
   ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    InicioPageRoutingModule,
    ProductoPageModule,
    CategoriasPageModule
  ],
  declarations: [InicioPage]
})
export class InicioPageModule {}
