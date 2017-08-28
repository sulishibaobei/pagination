import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginationComponent } from './pagination/pagination.component';
import { ComponentComponent } from './component/component.component'
const routes: Routes = [
    {
        path: '',
        redirectTo: '/pagination',
        pathMatch: 'full'
    },
    {
        path: 'pagination',
        component: PaginationComponent
    },

];
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }