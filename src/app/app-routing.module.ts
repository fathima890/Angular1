import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridImageComponent } from './grid-image/grid-image.component';
import { RegistrationComponent } from './registration/registration.component';
import { TextboxComponent } from './textbox/textbox.component';


const routes: Routes = [
  {path:'register',component:RegistrationComponent},
  {path:'textbox',component:TextboxComponent},
  {path:'grid',component:GridImageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
