import { ApiService } from './../../../services/api.service';
import { ModalController, LoadingController, ToastController } from '@ionic/angular';
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
    constructor(
        public modalCtrl: ModalController,
        public loadingController: LoadingController,
        public toastController: ToastController,
        private api: ApiService,
    ) { }

    ngOnInit() {
    }

    async salvar() {
        let loading = await this.loadingController.create({message: 'Cadastrando Produto'})
        loading.present()
        
        let produto = await this.api.post(JSON.stringify(this.produto), 'produtos')
        console.log('produto ==> ', produto);
        loading.dismiss()
        
        let toast = await this.toastController.create({message: "Produto cadastrado com sucesso", duration: 3000})
        toast.present()

        this.fechar()
    }

    fechar() {
        this.modalCtrl.dismiss()
    }

}
