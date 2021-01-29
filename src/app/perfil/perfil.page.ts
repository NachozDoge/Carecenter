import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Perfil } from '../model/perfil';
import { PerfilService } from '../services/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  @ViewChild("nome") nome; 

  lista : Perfil[] = [];

  constructor(private perfilServ : PerfilService,
    private navCtrl : NavController) { }

  ngOnInit() {
    this.perfilServ.listaDePerfil().subscribe(response=>{
      // O servidor respondeu
      
      this.lista = response;
     

      
    },err=>{
      // erro
    })
  }

  visualizar(nome){
    this.navCtrl.navigateForward(['/perfil-visualizar',nome])
  }

  pesquisar(){
    console.log("Busca por: "+this.nome.value)
    this.perfilServ.buscaPorNome(this.nome.value).subscribe(response=>{
      this.lista = [];
      this.lista = response;
    });
  }
  

}
