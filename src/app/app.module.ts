import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientComponent } from './patient/patient.component';
import { SortAgeAsc } from './Pipe/SortAgeAsc.pipe';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NavigateGuard } from './Service/navigate-guard.service';

const appRoutes: Routes = [
  { path: '', component: PatientListComponent },
  { path: 'allpatients', component: PatientListComponent },
  { path: 'addpatient', canActivate: [NavigateGuard],component: AddPatientComponent },
  { path: 'patient/:patientid', component: PatientComponent },
  { path: 'pagenotfound', component: PagenotfoundComponent },
  { path: '**', redirectTo: 'pagenotfound' },
];

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    PatientComponent,
    SortAgeAsc,
    AddPatientComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [NavigateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
