import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Perfil } from '../model/perfil';
import { PerfilService } from '../services/perfil.service';

@Component({
  selector: 'app-ficha-medica',
  templateUrl: './ficha-medica.page.html',
  styleUrls: ['./ficha-medica.page.scss'],
})
export class FichaMedicaPage implements OnInit {

  @ViewChild("id") id; 

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

  visualizar(cliente){
    this.navCtrl.navigateForward(['/clientes-visualizar',cliente.id])
  }

  pesquisar(){
    console.log("Busca por: "+this.id.value)
    this.perfilServ.buscaPorNome(this.id.value).subscribe(response=>{
      this.lista = [];
      this.lista = response;
    });
  }
  

}
