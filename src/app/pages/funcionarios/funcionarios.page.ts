import { ApiService } from './../../services/api.service';
import { CadastrarSetorPage } from './cadastrar-setor/cadastrar-setor.page';
import { CadastrarFuncionarioPage } from './cadastrar-funcionario/cadastrar-funcionario.page';
import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';

@Component({
    selector: 'app-funcionarios',
    templateUrl: './funcionarios.page.html',
    styleUrls: ['./funcionarios.page.scss'],
})
export class FuncionariosPage implements OnInit {
    funcionarios = []
    constructor(
        public modalCtrl: ModalController,
        public loadingController: LoadingController,
        private api: ApiService
    ) { }

    ngOnInit() {
        this.buscarFuncionarios()
    }

    async addFuncionario() {
        let modal = await this.modalCtrl.create({ component: CadastrarFuncionarioPage, cssClass: 'modal-pequeno' })
        modal.present();
        modal.onDidDismiss().then(()=>{
            this.buscarFuncionarios()
        })
    }

    async addSetor() {
        let modal = await this.modalCtrl.create({ component: CadastrarSetorPage, cssClass: 'modal-pequeno' })
        modal.present();
    }

    async buscarFuncionarios(){
        let loading = await this.loadingController.create({message: "Carregando funcionários..."})
        loading.present();

        let funcionarios = await this.api.get('funcionarios')
        console.log('funcionarios ===> ', funcionarios);
        
        loading.dismiss()
        this.funcionarios = funcionarios
    }
}
