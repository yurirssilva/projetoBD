import { ApiService } from './../../../services/api.service';
import { ModalController, LoadingController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-cadastrar-funcionario',
    templateUrl: './cadastrar-funcionario.page.html',
    styleUrls: ['./cadastrar-funcionario.page.scss'],
})
export class CadastrarFuncionarioPage implements OnInit {
    setores = [
        'ADMINISTRAÇÃO',
        'ARQUIVO',
        'ESTAGIÁRIO',
        'AUDITÓRIA PRON.',
        'AUTORIZAÇÃO',
        'AUDITÓRIO',
        'BIOIMAGEM',
        'CENTRO CIRÚRG.',
        'COLONOSCOPIA',
        'COMERCIAL',
        'CONTABIL.  RH',
        'ELETROCARD.',
        'COOR. ENFERM.',
        'FARMÁCIA',
        'FATURAMENTO',
        'FINANCEIRO',
        'INTERNAMENTO',
        'LABORATÓRIO',
        'LECO',
        'MANUTENÇÃO',
        'HOTELARIA',
        'MARKET. QUAL.',
        'MÉDICOS',
        'PABX',
        'PORTARIA',
        'POSTO ENFERM.',
        'RECEPÇÃO',
        'MARCAÇÃO',
        'SND',
        'ULTRASSOM',
        'URODINÃMICA',
        'UROFLUXO',
        'TI',
        'SERVIDORES'
    ]
    funcionario = {
        nome: '',
        matricula: null,
        tipo: null,
        senha: '',
        setor: ''
    }
    constructor(
        public modalCtrl: ModalController,
        public loadingCtrl: LoadingController,
        public tostCtrl: ToastController,
        private api: ApiService
    ) { }

    ngOnInit() {
    }

    fechar() {
        this.modalCtrl.dismiss()
    }

    async salvar() {
        let loading = await this.loadingCtrl.create({ message: 'Cadastrando...' })
        loading.present()

        let funcionario = await this.api.post(JSON.stringify(this.funcionario), 'funcionarios')
        loading.dismiss()
        console.log('funcionario ==> ', funcionario);

        let toast = await this.tostCtrl.create({ message: "Funcionário cadastrado com sucesso!", duration: 3000 })
        toast.present()
        
        this.fechar()
    }

}
