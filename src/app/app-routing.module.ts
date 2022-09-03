import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaComponent } from './media/media.component';
import { Media2Component } from './media2/media2.component';

const routes: Routes = [
  {
    path:'media', component:MediaComponent
  },
  {
    path:'media2', component:Media2Component
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
