import { BuscarProdutosPage } from './../../estoque/buscar-produtos/buscar-produtos.page';
import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, ToastController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { BuscarFuncionarioPage } from '../../funcionarios/buscar-funcionario/buscar-funcionario.page';

@Component({
    selector: 'app-resolver-chamado',
    templateUrl: './resolver-chamado.page.html',
    styleUrls: ['./resolver-chamado.page.scss'],
})
export class ResolverChamadoPage implements OnInit {
    chamado = null
    atribuir = null
    finalizar = {
        descricao: '',
        status: ''
    }
    produto = {
        produto_id: '',
        produto_nome: '',
        quantidade: null
    }

    id

    constructor(
        public loadingController: LoadingController,
        public modalController: ModalController,
        public toastController: ToastController,
        public navParams: NavParams,
        private api: ApiService
    ) { }

    ngOnInit() {
        this.id = this.navParams.get('id')
        this.carregarChamado(this.id);
    }

    async carregarChamado(id) {
        // let loading = await this.loadingController.create({ message: "Carregando chamado..." })
        // loading.present();

        let chamado = await this.api.get('chamados/' + id)
        console.log('chamado ===> ', chamado);

        // loading.dismiss()
        this.chamado = chamado
    }

    fechar() {
        this.modalController.dismiss()
    }

    retornarData(data) {
        return moment(data).format('DD/MM/YYYY HH:mm')
    }

    async finalizarChamado() {
        this.finalizar['id'] = this.id
        let loading = await this.loadingController.create({ message: "Finalizando chamado..." })
        loading.present();

        await this.api.post(JSON.stringify(this.finalizar), 'finalizar')
        loading.dismiss()

        let toast = await this.toastController.create({ message: "Chamado finalizado com sucesso", duration: 3000 })
        toast.present()
        this.fechar();
    }

    async atribuirFuncionario() {
        let atribuir = { id: this.id, funcionario_matricula: null }
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
                this.carregarChamado(this.id)
            }
        })
    }

    // produto = {
    //     produto_id: '',
    //     produto_nome: '',
    //     quantidade: null
    // }
    async buscarProduto() {
        let modal = await this.modalController.create({ component: BuscarProdutosPage, cssClass: 'modal-pequeno' })
        modal.present()
        modal.onDidDismiss().then(dados => {
            console.log('dados ==> ', dados);
            if (dados.data.produto) {
                this.produto.produto_id = dados.data.produto._id
                this.produto.produto_nome = dados.data.produto.nome
            }
        })
    }

    async adicionarProduto() {
        this.produto['id'] = this.id
        let loading = await this.loadingController.create({ message: "Adicionando produto..." })
        loading.present();

        let atribuirChamado = await this.api.post(JSON.stringify(this.produto), 'addProduto')
        loading.dismiss()

        let toast = await this.toastController.create({ message: "Produto adicionado com sucesso", duration: 3000 })
        toast.present()

        this.carregarChamado(this.id)
    }

}
