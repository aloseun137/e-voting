import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectionsComponent } from './elections/elections.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';
import { ContestantsComponent } from './contestants/contestants.component';
import { AllContestantsComponent } from './all-contestants/all-contestants.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { ResultsComponent } from './results/results.component';
import { CreateContestantComponent } from './create-contestant/create-contestant.component';
import { ElectionResultComponent } from './election-result/election-result.component';
const routes: Routes = [
  {
    path: '', redirectTo: 'elections', pathMatch: 'full'
  },
  {
    path: 'login', component:  LoginComponent
  },
  {
    path: 'elections', component:  ElectionsComponent, canActivate: [LoginGuard]
  },
  {
    path: 'contestants/:id', component:  ContestantsComponent
  },
  {
    path: 'contestants', component:  AllContestantsComponent
  },
  {
    path: 'thankyou', component:  ThankyouComponent
  },
  {
    path: 'createcontenstant', component:  CreateContestantComponent
  },
  {
    path: 'election',
    children: [
        { path: 'result/:id', component: ElectionResultComponent },
        { path: '', component:  ResultsComponent, pathMatch: 'full'}
    ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
