import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { Error404PageComponent } from './error404-page/error404-page.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'contact/:id',component:ContactComponent},
  {path:'createuser',component:CreateUserComponent},
  {path:'**',component:Error404PageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
