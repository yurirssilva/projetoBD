import { Component, OnInit } from '@angular/core';
import { AlertController, PopoverController, ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { BuscarFuncionarioPage } from '../../funcionarios/buscar-funcionario/buscar-funcionario.page';

@Component({
    selector: 'app-filtros',
    templateUrl: './filtros.page.html',
    styleUrls: ['./filtros.page.scss'],
})
export class FiltrosPage implements OnInit {
    filtros = {
        status: '',
        data_inicial: '',
        data_final: '',
        utilizouProduto: '',
        funcionario_criou: '',
        funcionario_atribuido: ''
    }
    funcionario_criou
    funcionario_atribuido
    constructor(
        public alertController: AlertController,
        public popoverController: PopoverController,
        public modalController: ModalController

    ) { }

    ngOnInit() {
    }

    async filtroStatus() {
        const alert = await this.alertController.create({
            header: 'Filtrar por Status',
            inputs: [
                {
                    name: 'todos',
                    type: 'radio',
                    label: 'Todos',
                    value: 'Todos',
                    checked: true
                },
                {
                    name: 'abertos',
                    type: 'radio',
                    label: 'Abertos',
                    value: 'Aberto'
                },
                {
                    name: 'cancelados',
                    type: 'radio',
                    label: 'Cancelados',
                    value: 'Cancelado'
                },
                {
                    name: 'resolvidos',
                    type: 'radio',
                    label: 'Resolvidos',
                    value: 'Resolvido'
                },
                {
                    name: 'resolvidos',
                    type: 'radio',
                    label: 'Não Resolvidos',
                    value: 'NaoResolvido'
                }
            ],
            buttons: ['OK']
        });

        await alert.present();
        // this.popoverController.dismiss(query)
        let dados = await alert.onDidDismiss();
        if (dados) {
            console.log('dados alerta', dados);
            this.filtros.status = dados.data.values
        }
    }

    async filtroProduto() {
        const alert = await this.alertController.create({
            header: 'Filtrar por Uso de Produtos',
            inputs: [
                {
                    type: 'radio',
                    label: 'Utilizou Produtos',
                    value: 'true',
                    checked: true
                },
                {
                    type: 'radio',
                    label: 'Não Utilizou Produtos',
                    value: 'false'
                }
            ],
            buttons: ['OK']
        });

        await alert.present();
        // this.popoverController.dismiss(query)
        let dados = await alert.onDidDismiss();
        console.log('dados alerta', dados);
        if (dados)
            this.filtros.utilizouProduto = dados.data.values
    }

    async filtroInicio() {
        const alert = await this.alertController.create({
            header: 'Filtrar pelo Período',
            inputs: [
                {
                    name: 'inicio',
                    label: 'Início',
                    type: 'date'
                },
                {
                    name: 'final',
                    label: 'Final',
                    type: 'date'
                },
            ],
            buttons: ['OK']
        })
        alert.present()
        let dados = await alert.onDidDismiss();
        console.log('dados alerta', dados);
        if (dados) {
            this.filtros.data_inicial = dados.data.values.inicio
            this.filtros.data_final = dados.data.values.final
        }
    }

    retornar() {
        let chaves = Object.keys(this.filtros)
        let query = '?'
        // let query = dados.data.values == 'Todos'? '' : '?status='+dados.data.values
        for (let filtro of chaves) {
            if (this.filtros[filtro])
                query += filtro + '=' + this.filtros[filtro] + '&'
            console.log(filtro, ': ', this.filtros[filtro]);

        }
        if (query.length == 1)
            query = ''
        else
            query = query.slice(0, query.length - 1)

        console.log('query ==> ', query);

        this.popoverController.dismiss(query)

    }

    retornarData(data) {
        return moment(data).format('DD/MM/YYYY')
    }

    async filtroFuncionario(funcionario) {
        let modal = await this.modalController.create({ component: BuscarFuncionarioPage, cssClass: 'modal-pequeno' })
        modal.present()
        modal.onDidDismiss().then(async dados => {
            console.log('dados ==> ', dados);
            if (dados.data.funcionario) {
                this.filtros[funcionario] = dados.data.funcionario.matricula
                this[funcionario] = dados.data.funcionario
            }
        })
    }

    sair(){
        this.popoverController.dismiss()
    }


}
