import { Router, Routes, RouterModule, NavigationStart, NavigationError } from '@angular/router';
import { CadastroCliente } from './pages/cadastro-cliente/cadastro-cliente';
import { NgModule } from '@angular/core';
import { AlterarSenha } from './pages/alterar-senha/alterar-senha';

export const appRoutes: Routes = [
    /**
     * Definição das rotas que o sistema vai ter
     * para cada rota precisa de um componente
     */
    {
        path: 'cadastrar-cliente',
        component: CadastroCliente
    },{
        path:'alterar-senha',
        component:AlterarSenha
    }
]
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [RouterModule]
})
export class AppRoute {
    
    constructor(router: Router) {
    }
}