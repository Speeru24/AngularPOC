import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { patient } from '../Models/Patient.model';
import { PatientService } from '../Service/patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  newPatientDetails:patient = {patientId:null,patientName:null,dateOfBirth:null,age:null};
  constructor(private patientService:PatientService, 
              private router:Router) { }
  
  ngOnInit() {
  }

  onSavePatient(){
    debugger;
    this.patientService.onSaveData(this.newPatientDetails);
    this.router.navigate(['allpatients'])
  }

}
