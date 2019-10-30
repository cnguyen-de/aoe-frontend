import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlayerInfoComponent} from './components/player-info/player-info.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: PlayerInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
