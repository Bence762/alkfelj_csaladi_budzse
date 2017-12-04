import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from "@angular/flex-layout";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule,
  MatFormFieldModule, MatInputModule,
  MatButtonToggleModule
} from "@angular/material";

import { RoutingModule } from "./routing/routing.module";
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MenuComponent } from './menu/menu.component';
import { MyRequestsComponent } from './my-requests/my-requests.component';
import { NewRequestsComponent } from './new-requests/new-requests.component';
import { MyTransactionsComponent } from './my-transactions/my-transactions.component';
import { NewTransactionsComponent } from './new-transactions/new-transactions.component';
import { MyTransactionsListComponent } from './my-transactions/my-transactions-list/my-transactions-list.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { TransactionCreateComponent } from './transaction-create/transaction-create.component';
import { TransactionService } from "./transaction.service";
import { RequestService } from "./request.service";
import { RequestFormComponent } from './request-form/request-form.component';
import { RequestCreateComponent } from './request-create/request-create.component';
import { MyRequestsListComponent } from './my-requests/my-requests-list/my-requests-list.component';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MenuComponent,
    MyRequestsComponent,
    NewRequestsComponent,
    MyTransactionsComponent,
    NewTransactionsComponent,
    MyTransactionsListComponent,
    TransactionFormComponent,
    TransactionCreateComponent,
    RequestFormComponent,
    RequestCreateComponent,
    MyRequestsListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonToggleModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [TransactionService, RequestService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
