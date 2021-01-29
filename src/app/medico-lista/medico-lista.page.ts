import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Medico } from '../model/medico';
import { MedicoService } from '../services/medico.service';
@Component({
  selector: 'app-medico-lista',
  templateUrl: './medico-lista.page.html',
  styleUrls: ['./medico-lista.page.scss'],
})
export class MedicoListaPage implements OnInit {
  
  @ViewChild("nome") nome; 

  lista : Medico[] = [];


  constructor(private medicoServ : MedicoService,
    private navCtrl : NavController) { }

  ngOnInit() {
    this.medicoServ.listaDemedico().subscribe(response=>{
      // O servidor respondeu
      
      this.lista = response;
     

      
    },err=>{
      // erro
    })
  }

  visualizar(id){
    this.navCtrl.navigateForward(['/medico-visualizar',id])
  }

  pesquisar(){
    console.log("Busca por: "+this.nome.value)
    this.medicoServ.buscaPorNome(this.nome.value).subscribe(response=>{
      this.lista = [];
      this.lista = response;
    });
  }
  

}
