import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Perfil } from '../model/cadastrar';
import { PerfilsService } from '../services/perfils.service';
@Component({
  selector: 'app-perfils',
  templateUrl: './perfils.page.html',
  styleUrls: ['./perfils.page.scss'],
})
export class PerfilsPage implements OnInit {
  
  @ViewChild("nome") nome; 

  lista : Perfil[] = [];

  constructor(private perfilsServ : PerfilsService,
    private navCtrl : NavController) { }

  ngOnInit() {
    this.perfilsServ.listaDePerfil().subscribe(response=>{
      // O servidor respondeu
      
      this.lista = response;
     

      
    },err=>{
      // erro
    })
  }

  visualizar(id){
    this.navCtrl.navigateForward(['/perfils-visualizar',id])
  }

  pesquisar(){
    console.log("Busca por: "+this.nome.value)
    this.perfilsServ.buscaPorNome(this.nome.value).subscribe(response=>{
      this.lista = [];
      this.lista = response;
    });
  }
  

}
