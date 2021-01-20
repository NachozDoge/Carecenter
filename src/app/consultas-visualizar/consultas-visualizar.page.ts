import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Marcar } from '../model/marcar';
import { marcarService } from '../services/marcar.service';
@Component({
  selector: 'app-consultas-visualizar',
  templateUrl: './consultas-visualizar.page.html',
  styleUrls: ['./consultas-visualizar.page.scss'],
})
export class ConsultasVisualizarPage implements OnInit {
  marcar : Marcar = new Marcar();

  constructor(private clienteServ : marcarService,
    private route: ActivatedRoute,
    private navCtrl : NavController) { }

  ngOnInit() {

    this.route.paramMap.subscribe(url=>{
      let id = url.get('id');
      
      this.clienteServ.buscaPorId(id).subscribe(response=>{
        this.marcar = response;
        
      })

    })

  }

  atualizar(){
    this.navCtrl.navigateForward(['/clientes-atualizar',this.marcar.id]);
  }

  excluir(){
    this.navCtrl.navigateForward(['/clientes-excluir',this.marcar.id]);
  }

}