import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './component/add-component/add-component.component';
import { ListComponent } from './component/list-component/list-component.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';



export const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'add', component: AddComponent },
  { path: 'list', component: ListComponent },
  { path: 'edit/:id', component: AddComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }

export const routingComponent = [AddComponent, ListComponent, PageNotFoundComponent];
