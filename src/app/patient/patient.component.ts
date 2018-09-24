import { Component, OnInit, OnDestroy } from '@angular/core';
import { patient } from '../Models/Patient.model';
import { PatientService } from '../Service/patient.service';
import { ActivatedRoute, Params } from '../../../node_modules/@angular/router';
import { Subscription } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit, OnDestroy {

  paramsSubscription: Subscription;
  patientDetails: patient;
  patientId: number;
  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute
  ) {

   }

  ngOnInit() {
    debugger;
  this.patientId = +this.route.snapshot.params['patientid'];
    this.patientDetails = this.patientService.GetPatientDetails(this.patientId);

    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.patientId = params['patientid'];
        this.patientDetails = this.patientService.GetPatientDetails(this.patientId);
      }
    );

  }

  ngOnDestroy(){
    this.paramsSubscription.unsubscribe(); 
  }



}
