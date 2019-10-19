import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-buscar-produtos',
    templateUrl: './buscar-produtos.page.html',
    styleUrls: ['./buscar-produtos.page.scss'],
})
export class BuscarProdutosPage implements OnInit {
    produtos = []
    constructor(
        public loadingController: LoadingController,
        public modalController: ModalController,
        private api: ApiService
    ) { }

    ngOnInit() {
        this.buscarEstoque()
    }

    async buscarEstoque() {
        let loading = await this.loadingController.create({ message: "Buscando produtos do estoque..." })
        loading.present();

        let produtos = await this.api.get('produtos')
        loading.dismiss()
        this.produtos = produtos
    }

    fechar(produto?) {
        this.modalController.dismiss({ produto: produto })
    }

}
