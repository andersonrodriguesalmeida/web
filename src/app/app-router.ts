import { Router, Routes, RouterModule, NavigationStart, NavigationError } from '@angular/router';
import { CadastroCliente } from './pages/cadastro-cliente/cadastro-cliente';

export const appRoutes: Routes = [
    {
        path: '',
        component: CadastroCliente
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