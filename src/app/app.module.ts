import { FiltrosPageModule } from './pages/chamados/filtros/filtros.module';
import { BuscarProdutosPageModule } from './pages/estoque/buscar-produtos/buscar-produtos.module';
import { BuscarFuncionarioPageModule } from './pages/funcionarios/buscar-funcionario/buscar-funcionario.module';
import { ApiService } from './services/api.service';
import { ResolverChamadoPageModule } from './pages/chamados/resolver-chamado/resolver-chamado.module';
import { AbrirChamadoPageModule } from './pages/chamados/abrir-chamado/abrir-chamado.module';
import { CadastrarProdutoPageModule } from './pages/estoque/cadastrar-produto/cadastrar-produto.module';
import { CadastrarFuncionarioPageModule } from './pages/funcionarios/cadastrar-funcionario/cadastrar-funcionario.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CadastrarSetorPageModule } from './pages/funcionarios/cadastrar-setor/cadastrar-setor.module';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        CadastrarFuncionarioPageModule,
        CadastrarSetorPageModule,
        CadastrarProdutoPageModule,
        AbrirChamadoPageModule,
        ResolverChamadoPageModule,
        BuscarFuncionarioPageModule,
        BuscarProdutosPageModule,
        FiltrosPageModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        ApiService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
