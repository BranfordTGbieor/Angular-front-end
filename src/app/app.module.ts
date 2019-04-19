import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { AuthGuard } from './_guards/auth.guard';

import { AppComponent } from './app.component';
import { NavComponent } from './Component/nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './Component/Home/Home.component';
import { RegisterComponent } from './Component/register/register.component';
import { ListsComponent } from './Component/lists/lists.component';
import { MemberListComponent } from './Component/member-list/member-list.component';
import { MessagesComponent } from './Component/messages/messages.component';




@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      ListsComponent,
      MemberListComponent,
      MessagesComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
     AuthService,
     ErrorInterceptorProvider,
     AlertifyService,
     AuthGuard
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
