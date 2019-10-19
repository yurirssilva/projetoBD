import { FiltrosPage } from './filtros/filtros.page';
import { BuscarFuncionarioPage } from './../funcionarios/buscar-funcionario/buscar-funcionario.page';
import { ResolverChamadoPage } from './resolver-chamado/resolver-chamado.page';
import { AbrirChamadoPage } from './abrir-chamado/abrir-chamado.page';
import { ModalController, LoadingController, ActionSheetController, ToastController, PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-chamados',
    templateUrl: './chamados.page.html',
    styleUrls: ['./chamados.page.scss'],
})
export class ChamadosPage implements OnInit {
    chamados = []
    constructor(
        public loadingController: LoadingController,
        public modalController: ModalController,
        public actionSheetController: ActionSheetController,
        public toastController: ToastController,
        public popoverController: PopoverController,
        private api: ApiService
    ) { }

    ngOnInit() {
        this.buscarChamados()
    }
    async addChamado() {
        let modal = await this.modalController.create({ component: AbrirChamadoPage, cssClass: 'modal-pequeno' })
        modal.present()
        modal.onDidDismiss().then(() => {
            this.buscarChamados()
        })
    }
    async resolverChamado() {
        let modal = await this.modalController.create({ component: ResolverChamadoPage, cssClass: 'modal-pequeno' })
        modal.present()
    }

    async buscarChamados(query='') {
        let loading = await this.loadingController.create({ message: "Carregando chamados..." })
        loading.present();

        let chamados = await this.api.get('chamados'+query)
        console.log('chamados ===> ', chamados);

        loading.dismiss()
        this.chamados = chamados
    }

    async abrirAction(id, e) {
        e.stopPropagation()
        let actionSheet = await this.actionSheetController.create({
            header: 'Opções',
            buttons: [
                {
                    text: 'Atribuir Funcionário',
                    handler: () => {
                        this.atribuirFuncionario(id)
                    }
                }
            ]
        })
        actionSheet.present()
    }

    async atribuirFuncionario(id_chamado) {
        let atribuir = { id: id_chamado, funcionario_matricula: null }
        let modal = await this.modalController.create({ component: BuscarFuncionarioPage, cssClass: 'modal-pequeno' })
        modal.present()
        modal.onDidDismiss().then(async dados => {
            console.log('dados ==> ', dados);
            if (dados.data.funcionario) {
                let loading = await this.loadingController.create({ message: "Atribuindo funcionário..." })
                loading.present();

                atribuir.funcionario_matricula = dados.data.funcionario.matricula
                console.log('atribuir ==> ', atribuir);

                let atribuirChamado = await this.api.post(JSON.stringify(atribuir), 'atribuir')
                loading.dismiss()
                let toast = await this.toastController.create({ message: "Funcionário atribuido com sucesso", duration: 3000 })
                toast.present()

            }
        })
    }

    async abrirChamado(id) {
        let modal = await this.modalController.create({ component: ResolverChamadoPage, cssClass: 'modal-pequeno', componentProps: { id: id } })
        modal.present()
        modal.onDidDismiss().then(() => {
            this.buscarChamados()
        })
    }

    async abrirFiltros(ev: any) {
        const popover = await this.popoverController.create({
            component: FiltrosPage,
            event: ev,
            translucent: true
        });
        await popover.present();
        let dados = await popover.onDidDismiss()
        console.log('dados ==> ', dados);
        if(dados)
            this.buscarChamados(dados.data)
    }
}
