import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  { path: 'funcionarios', loadChildren: './pages/funcionarios/funcionarios.module#FuncionariosPageModule' },
  { path: 'estoque', loadChildren: './pages/estoque/estoque.module#EstoquePageModule' },
  { path: 'chamados', loadChildren: './pages/chamados/chamados.module#ChamadosPageModule' },
  { path: 'cadastrar-funcionario', loadChildren: './pages/funcionarios/cadastrar-funcionario/cadastrar-funcionario.module#CadastrarFuncionarioPageModule' },
  { path: 'cadastrar-setor', loadChildren: './pages/funcionarios/cadastrar-setor/cadastrar-setor.module#CadastrarSetorPageModule' },
  { path: 'cadastrar-produto', loadChildren: './pages/estoque/cadastrar-produto/cadastrar-produto.module#CadastrarProdutoPageModule' },
  { path: 'abrir-chamado', loadChildren: './pages/chamados/abrir-chamado/abrir-chamado.module#AbrirChamadoPageModule' },
  { path: 'resolver-chamado/:id', loadChildren: './pages/chamados/resolver-chamado/resolver-chamado.module#ResolverChamadoPageModule' },
  { path: 'buscar-funcionario', loadChildren: './pages/funcionarios/buscar-funcionario/buscar-funcionario.module#BuscarFuncionarioPageModule' },
  { path: 'relatorios', loadChildren: './pages/relatorios/relatorios.module#RelatoriosPageModule' },  { path: 'buscar-produtos', loadChildren: './pages/estoque/buscar-produtos/buscar-produtos.module#BuscarProdutosPageModule' },
  { path: 'filtros', loadChildren: './pages/chamados/filtros/filtros.module#FiltrosPageModule' }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
