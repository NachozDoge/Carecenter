import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Perfil } from '../model/perfil';
import { PerfilService } from '../services/perfil.service';

@Component({
  selector: 'app-perfil-visualizar',
  templateUrl: './perfil-visualizar.page.html',
  styleUrls: ['./perfil-visualizar.page.scss'],
})
export class PerfilVisualizarPage implements OnInit {
  perfil : Perfil = new Perfil();

  constructor(private perfilServ : PerfilService,
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
    this.navCtrl.navigateForward(['/perfil-atualizar',this.perfil.id]);
  }

  excluir(){
    this.navCtrl.navigateForward(['/perfil-excluir',this.perfil.id]);
  }

}