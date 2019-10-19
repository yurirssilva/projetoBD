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

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        CadastrarFuncionarioPageModule,
        CadastrarSetorPageModule,
        CadastrarProdutoPageModule,
        AbrirChamadoPageModule,
        ResolverChamadoPageModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
