import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Perfil } from '../model/cadastrar';
import { PerfilsService } from '../services/perfils.service';

@Component({
  selector: 'app-perfils-visualizar',
  templateUrl: './perfils-visualizar.page.html',
  styleUrls: ['./perfils-visualizar.page.scss'],
})
export class PerfilsVisualizarPage implements OnInit {


  perfil : Perfil = new Perfil();

  constructor(private perfilServ : PerfilsService,
    private route: ActivatedRoute,
    private navCtrl : NavController) { }

  ngOnInit() {

    this.route.paramMap.subscribe(url=>{
      let id = url.get('id');
      
      this.perfilServ.buscaPorId(id).subscribe(response=>{
        this.perfil = response;
        
      })

    })

  }

  atualizar(){
    this.navCtrl.navigateForward(['/perfils-atualizar',this.perfil.id]);
  }

  excluir(){
    this.navCtrl.navigateForward(['/clientes-excluir',this.perfil.id]);
  }

}