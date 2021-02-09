import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Perfil } from '../model/perfil';
import { ClienteService } from '../services/cliente.service';
import { PerfilService } from '../services/perfil.service';

@Component({
  selector: 'app-ficha-medica',
  templateUrl: './ficha-medica.page.html',
  styleUrls: ['./ficha-medica.page.scss'],
})
export class FichaMedicaPage implements OnInit {

  @ViewChild("id") id; 

  cliente : Perfil = new Perfil();
  formGroup: FormGroup;

  constructor(private clienteService : ClienteService,
    private auth: AngularFireAuth,
    private navCtrl : NavController,
    private formBuilder: FormBuilder,) {
      this.iniciarForm();
    }

  ngOnInit() {
    this.auth.currentUser.then(response=>{
      
      this.clienteService.getPerfil(response.uid).subscribe(dados=>{
      
      this.cliente = dados;
      console.log(this.cliente)
    },err=>{
      // erro
    })
  })
}



  atualizar(){
    this.auth.currentUser.then(response=>{
   this.clienteService.atualizaPerfil(response.uid,this.formGroup.value).subscribe(response=>{
    console.log('Atualizado com sucesso')
   });
  })
   
  }

  iniciarForm() {
    this.formGroup = this.formBuilder.group({

      nome: [],
      idade: [],
      cpf: [],
      sangue: [],
      endereco: [],
      numero: [],
      cidade: [],
      estado: [],
      email: [],
      telefone: []
    })
  }
 

}
