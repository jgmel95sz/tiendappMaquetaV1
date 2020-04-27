import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {

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
 
  constructor() {
    this.contactForm = this.createFormGroup();
   }

  ngOnInit() {

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


  get email(){ return this.contactForm.get('email');}
  get celular(){ return this.contactForm.get('celular');}
}
