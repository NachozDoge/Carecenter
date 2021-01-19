import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Marcar } from '../model/marcar';
import { marcarService } from '../services/marcar.service';
@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.page.html',
  styleUrls: ['./consultas.page.scss'],
})
export class ConsultasPage implements OnInit {
  
  @ViewChild("nome") nome; 

  lista : Marcar[] = [];

  constructor(private marcarServ : marcarService,
    private navCtrl : NavController) { }

  ngOnInit() {
    this.marcarServ.listaDeMarcar().subscribe(response=>{
      // O servidor respondeu
      
      this.lista = response;
     

      
    },err=>{
      // erro
    })
  }

  visualizar(nome){
    this.navCtrl.navigateForward(['/clientes-visualizar',nome.id])
  }

  pesquisar(){
    console.log("Busca por: "+this.id.value)
    this.marcarServ.buscaPorNome(this.id.value).subscribe(response=>{
      this.lista = [];
      this.lista = response;
    });
  }
  

}
