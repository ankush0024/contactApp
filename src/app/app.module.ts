import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule} from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { Error404PageComponent } from './error404-page/error404-page.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { CreateUserComponent } from './create-user/create-user.component';

import { NgxSpinnerModule } from "ngx-spinner";
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactComponent,
    Error404PageComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,HttpClientModule,Ng2OrderModule,NgxSpinnerModule

  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
