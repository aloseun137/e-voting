import { LoggingInterceptor } from './logging.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ElectionsComponent } from './elections/elections.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ContestantsComponent } from './contestants/contestants.component';
import { AllContestantsComponent } from './all-contestants/all-contestants.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { WinnersComponent } from './winners/winners.component';
import { ResultsComponent } from './results/results.component';
import { CreateContestantComponent } from './create-contestant/create-contestant.component';
import { ElectionResultComponent } from './election-result/election-result.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ElectionsComponent,
    LoginComponent,
    ContestantsComponent,
    AllContestantsComponent,
    ThankyouComponent,
    WinnersComponent,
    ResultsComponent,
    CreateContestantComponent,
    ElectionResultComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [FormsModule, {
    provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true
  },
  {provide : LocationStrategy , useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
