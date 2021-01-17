import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-consultas-marcadas',
  templateUrl: './consultas-marcadas.page.html',
  styleUrls: ['./consultas-marcadas.page.scss'],
})
export class ConsultasMarcadasPage implements OnInit {

  @ViewChild("nome") nome; 

  lista : Cliente[] = [];

  constructor(private clienteServ : ClienteService,
    private navCtrl : NavController) { }

  ngOnInit() {
    this.clienteServ.listaDeClientes().subscribe(response=>{
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
    console.log("Busca por: "+this.nome.value)
    this.clienteServ.buscaPorNome(this.nome.value).subscribe(response=>{
      this.lista = [];
      this.lista = response;
    });
  }
  

}
