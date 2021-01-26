import { Component, ViewChild } from "@angular/core";
import { MenuController, NavController } from "@ionic/angular";
import { Cliente } from "../model/cliente";
import { ClienteService } from "../services/cliente.service";
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup } from "@angular/forms";
@Component({
  selector: "app-home",
  templateUrl: "ficha-medica.page.html",
  styleUrls: ["ficha-medica.page.scss"]
})
export class FichaMedicaPage {
  public items: any = []; 
  @ViewChild("nome") cliente; 
  formGroup: FormGroup;
  perfil : Cliente = new Cliente(); 

  lista :Cliente[] = [];
  constructor(
    private formBuilder : FormBuilder,
    private menuCtrl : MenuController,
    private clienteservic: ClienteService,
    private navCtrl : NavController,
    private auth : AngularFireAuth) {

      this.iniciarForm(); 

      this.auth.currentUser.then(response=>{ // auth.currentUser -> Obten dados do usuario

        this.clienteservic.buscaPerfilPorId(response.uid).subscribe(response=>{
          // se houver o perfil, colocar os dados para a variavel perfil
          this.perfil = response; // dados preenchidos
          this.iniciarForm(); // atualizar os dados do formulário
        }

        )
      })
    
    this.items = [
      { expanded: false },
      { expanded: false }
    ];
  }

   iniciarForm() {
    this.formGroup = this.formBuilder.group({
      nome: [this.perfil.nome],
      cpf: [this.perfil.cpf],
      endereco: [this.perfil.endereco],
      numero: [this.perfil.numero],
      cidade: [this.perfil.cidade],
      estado: [this.perfil.estado],
      email: [this.perfil.email],
      telefone: [this.perfil.telefone]
    })
  }

  expandItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.items.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }
  
  ngOnInit() {
   
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  visualizar(nome){
    this.navCtrl.navigateForward(['/clientes-visualizar',nome.id])
  }

}