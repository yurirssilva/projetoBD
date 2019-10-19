import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';

@Component({
    selector: 'app-buscar-funcionario',
    templateUrl: './buscar-funcionario.page.html',
    styleUrls: ['./buscar-funcionario.page.scss'],
})
export class BuscarFuncionarioPage implements OnInit {
    funcionarios = []
    constructor(
        public loadingController: LoadingController,
        public modalController: ModalController,
        private api: ApiService
    ) { }

    ngOnInit() {
        this.buscarFuncionarios()
    }

    async buscarFuncionarios() {
        let loading = await this.loadingController.create({ message: "Carregando funcionários..." })
        loading.present();

        let funcionarios = await this.api.get('funcionarios')
        console.log('funcionarios ===> ', funcionarios);

        loading.dismiss()
        this.funcionarios = funcionarios
    }

    fechar(funcionario?) {
        this.modalController.dismiss({ funcionario: funcionario })
    }

}
