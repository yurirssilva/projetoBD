import { BuscarFuncionarioPage } from './../../funcionarios/buscar-funcionario/buscar-funcionario.page';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, LoadingController } from '@ionic/angular';

@Component({
    selector: 'app-abrir-chamado',
    templateUrl: './abrir-chamado.page.html',
    styleUrls: ['./abrir-chamado.page.scss'],
})
export class AbrirChamadoPage implements OnInit {
    // descricao, funcionario_matricula, tipo_servico
    servicos = [
        { "nome": 'ALTERAR CPS', "prioridade": 'Baixa' },
        { "nome": 'AVISO DE LENTIDÃO', "prioridade": 'Alta' },
        { "nome": 'DESTRAVAR SAÍDA', "prioridade": 'Baixa' },
        { "nome": 'GERENCIAR USUÁRIO', "prioridade": 'Media' },
        { "nome": 'MANUT. DE CÃMERAS', "prioridade": 'Media' },
        { "nome": 'MANUT. DE COMPUTADOR', "prioridade": 'Alta' },
        { "nome": 'MANUT. DE EMAIL', "prioridade": 'Media' },
        { "nome": 'MANUT. DE IMP/SCAN.', "prioridade": 'Alta' },
        { "nome": 'MANUT. DE INTERNET', "prioridade": 'Alta' },
        { "nome": 'MANUT. OUTROS EQUIP.', "prioridade": 'Baixa' },
        { "nome": 'MANUT. OUTROS PROG.', "prioridade": 'Baixa' },
        { "nome": 'MANUT.DE TEL/RAMAL', "prioridade": 'Baixa' },
        { "nome": 'MANUT. CALL CENTER', "prioridade": 'Alta' },
        { "nome": 'MANUT. DO ECG/MAPA', "prioridade": 'Alta' },
        { "nome": 'MANUT. SISTEMA CPC', "prioridade": 'Alta' },
        { "nome": 'MANUT. SIS. DE PONTO', "prioridade": 'Alta' },
        { "nome": 'MANUT. SIS. DO SUS', "prioridade": 'Baixa' },
        { "nome": 'MANUT. SIS. DOMÍNIO', "prioridade": 'Alta' },
        { "nome": 'MANUT. UROFLUXO MICA', "prioridade": 'Alta' },
        { "nome": 'RETIRAR ALTA', "prioridade": 'Baixa' },
        { "nome": 'SOLICI. DESBLOQUEIOS', "prioridade": 'Baixa' },
        { "nome": 'SOLICI.EQUIPAMENTOS', "prioridade": 'Baixa' },
        { "nome": 'SUPORTE AO USUÁRIO', "prioridade": 'Baixa' },
        { "nome": 'TROCA DE TONER', "prioridade": 'Alta' },
        { "nome": 'UNIFICAR CADASTRO', "prioridade": 'Baixa' }
    ]

    chamado = {
        descricao: '',
        funcionario_matricula: '',
        funcionario_nome: '',
        tipo_servico: ''
    }

    constructor(
        public modalController: ModalController,
        public loadingController: LoadingController,
        public toastController: ToastController,
        private api: ApiService
    ) { }

    ngOnInit() {
    }

    fechar() {
        this.modalController.dismiss()
    }

    async buscarFuncionario() {
        let modal = await this.modalController.create({ component: BuscarFuncionarioPage, cssClass: 'modal-pequeno' })
        modal.present()
        modal.onDidDismiss().then(dados => {
            console.log('dados ==> ', dados);
            if (dados.data.funcionario) {
                this.chamado.funcionario_matricula = dados.data.funcionario.matricula
                this.chamado.funcionario_nome = dados.data.funcionario.nome
            }
        })
    }

    async salvar() {
        let loading = await this.loadingController.create({ message: 'Registrando Chamado...' })
        loading.present()

        let produto = await this.api.post(JSON.stringify(this.chamado), 'chamados')
        console.log('produto ==> ', produto);
        loading.dismiss()

        let toast = await this.toastController.create({ message: "Chamado registrado com sucesso", duration: 3000 })
        toast.present()

        this.fechar()
    }

}
