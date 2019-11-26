import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PesquisaBolsaFamiliaComponent } from './components/pesquisa-bolsa-familia/pesquisa-bolsa-familia.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'pesquisa',
    },
    {
        path: 'pesquisa',
        component: PesquisaBolsaFamiliaComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
