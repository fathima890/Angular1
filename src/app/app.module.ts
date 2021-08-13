import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { TextboxComponent } from './textbox/textbox.component';
import { GridImageComponent } from './grid-image/grid-image.component';
import { UserformComponent } from './userform/userform.component';
import { UserformcomponentComponent } from './userformcomponent/userformcomponent.component';
import { LoginformComponent } from './loginform/loginform.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    TextboxComponent,
    GridImageComponent,
    UserformComponent,
    UserformcomponentComponent,
    LoginformComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
