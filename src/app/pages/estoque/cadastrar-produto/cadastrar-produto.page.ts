import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-cadastrar-produto',
    templateUrl: './cadastrar-produto.page.html',
    styleUrls: ['./cadastrar-produto.page.scss'],
})
export class CadastrarProdutoPage implements OnInit {
    produto = {
        nome: '',
        descricao: '',
        quantidade: null
    }
    constructor(public modalCtrl: ModalController) { }

    ngOnInit() {
    }

    salvar(){

    }

    fechar() {
        this.modalCtrl.dismiss()
    }

}
