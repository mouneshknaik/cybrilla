import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcartComponent } from './ecart/ecart.component';


const routes: Routes = [
  { path: '**', component: EcartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
