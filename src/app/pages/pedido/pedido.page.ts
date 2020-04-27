import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {


  patternEmail : any = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  //creando la clase Formulario Group
  createFormGroup(){
     return new FormGroup({
      nombre: new FormControl('',[]),
      email: new FormControl('',[Validators.pattern(this.patternEmail)]),
      celular: new FormControl('',[Validators.required, Validators.minLength(9)]),
      descripcion: new FormControl('',[Validators.maxLength(100)])
     })
  };

  contactForm : FormGroup;
  constructor(private router:Router, public viewCtrl: ModalController) {
    this.contactForm = this.createFormGroup();
   }

  ngOnInit() {
  }

  close(){
    this.viewCtrl.dismiss();
  }

  
  onResetForm(){
    this.contactForm.reset();
  }

  onSaveForm() {
    console.log(this.contactForm.value)
    if(this.contactForm.valid){
      //llama servicio post
      this.onResetForm();
    }else{
      console.log("NO VALIDO")
    }
   
  }


  geolocalizacion(){
    console.log("PETICION DE GEOLOCALIZACION")
  }

  get email(){ return this.contactForm.get('email');}
  get celular(){ return this.contactForm.get('celular');}

}
