import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Marcar } from '../model/marcar';
import { marcarService } from '../services/marcar.service';

@Component({
  selector: 'app-consultas-marcadas',
  templateUrl: './consultas-marcadas.page.html',
  styleUrls: ['./consultas-marcadas.page.scss'],
})
export class ConsultasMarcadasPage implements OnInit {

  @ViewChild("id") id; 

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

  visualizar(cliente){
    this.navCtrl.navigateForward(['/clientes-visualizar',cliente.id])
  }

  pesquisar(){
    console.log("Busca por: "+this.id.value)
    this.marcarServ.buscaPorNome(this.id.value).subscribe(response=>{
      this.lista = [];
      this.lista = response;
    });
  }
  

}
