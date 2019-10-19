import { ModalController } from '@ionic/angular';
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
        tipo: null
    }
    constructor(
        public modalCtrl: ModalController
    ) { }

    ngOnInit() {
    }

    fechar() {
        this.modalCtrl.dismiss()
    }

    salvar() {

    }

}
