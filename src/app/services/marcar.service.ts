import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { Marcar } from '../model/marcar';

@Injectable()
export class marcarService {
    listaDeConsultas() {
      throw new Error('Method not implemented.');
    }
    openstate(value: any) {
      throw new Error('Method not implemented.');
    }
    marcar: Marcar = new Marcar();

    constructor(private firestore: AngularFirestore) {

    }

    listaDeMarcar(): Observable<any> {

        // Observable -> Aguardar resposta do servidor
        return from(new Observable(observe => { // converter para Observable

            // this.firestore.collection('marcar') -> Selecionar a coleção no Firestore
            // .snapshotChanges().subscribe -> Tentar buscar no servidor
            // response -> dados baixados do servidor, os marcars
            this.firestore.collection('marcar').snapshotChanges().subscribe(response => {
                // transformar response em array de marcars
                let lista: Marcar[] = [];
                response.map(obj => {
                    // será repetido para cada registro, cada registro do Firestore se chama obj
                    let marcar: Marcar = new Marcar();
                    marcar.setData(obj.payload.doc.data());// obj.payload.doc.data() -> Dados do marcar
                    marcar.id = obj.payload.doc.id; // inserindo ID
                    lista.push(marcar); // adicionando o marcar na lista // push é adicionar
                });
                observe.next(lista);
            })

        }))
    }


    buscaPorNome(nome: string): Observable<any> {

        // Observable -> Aguardar resposta do servidor
        return from(new Observable(observe => { // converter para Observable
            this.firestore.collection('marcar').ref.orderBy("nome")
                .startAt(nome).endAt(nome + "\uf8ff").get().then(response => {
                    let lista: Marcar[] = [];
                    response.docs.map(obj => {
                        // será repetido para cada registro, cada registro do Firestore se chama obj
                        let marcar: Marcar = new Marcar();
                        marcar.setData(obj.data());// obj.payload.doc.data() -> Dados do marcar
                        marcar.id = obj.id; // inserindo ID
                        lista.push(marcar); // adicionando o marcar na lista // push é adicionar
                    });
                    observe.next(lista);
                })

        }))
    }

    getmarcar(idUser) {
        return from(new Observable(observe => { // converter para Observable

            this.firestore.collection("marcar").doc(idUser).get().subscribe(response => { // .doc seleciona o marcar com base no id

                if (response.exists == false) {

                } else {

                }
            })
        }))
    }



    //

    cadastrar(marcar: any): Observable<any> {
        return from(new Observable(observe => {
            // add cria um novo documento
            this.firestore.collection('marcar').add(marcar).then(response => {
                observe.next("Cadastrado com sucesso!");
            }, (err) => {
                observe.error("Erro ao cadastrar!");
            })

        }));
    }

    buscaPorId(id: any): Observable<any> {
        return from(new Observable(observe => {
            // .doc(id).snapshotChanges() -> Busca pelo id do documento
            this.firestore.collection('marcar').doc(id).snapshotChanges().subscribe(response => {
                console.log(response);
                let marcar: Marcar = new Marcar();
                marcar.id = response.payload.id;
                marcar.setData(response.payload.data());
                observe.next(marcar);

            }, (err) => {
                observe.error("Erro ao buscar o ID!");
            })

        }));
    }



    atualizar(marcar: any): Observable<any> {
        return from(new Observable(observe => {

            this.firestore.collection('marcar').doc(marcar.id).set(marcar).then(response => {
                observe.next("Atualizado com sucesso!");
            }, (err) => {
                observe.error("Erro ao atualizar!");
            })

        }));
    }

    excluir(marcar: any): Observable<any> {
        return from(new Observable(observe => {

            this.firestore.collection('marcar').doc(marcar.id).delete().then(response => {
                observe.next("Excluído com sucesso!");
            }, (err) => {
                observe.error("Erro ao excluir!");
            })

        }));
    }

    // carregar o marcar do marcar (qualquer coleção)
    buscamarcarPorId(uid: any): Observable<any> { // uid -> authenticator
        return from(new Observable(observe => {
            this.firestore.collection('marcar').doc(uid).snapshotChanges().subscribe(response => {
                if (response.payload.exists !== false) {

                    let marcar: Marcar = new Marcar();
                    marcar.id = response.payload.id;
                    marcar.setData(response.payload.data());
                    observe.next(marcar);
                }

            }, (err) => {
                observe.error("Erro ao buscar o ID!");
            })

        }));
    }

    // Atualiza marcar, 
    atualizamarcar(uid, dados) {
        return from(new Observable(observe => {

            this.firestore.collection('marcar').doc(uid).set(dados).then(response => {
                observe.next("Atualizado com sucesso!");
            }, (err) => {
                observe.error("Erro ao atualizar!");
            })

        }));
    }

}