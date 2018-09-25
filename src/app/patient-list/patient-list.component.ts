import { Component, OnInit } from '@angular/core';
import { PatientService } from '../Service/patient.service';
import { patient } from '../Models/Patient.model';
import { Observable } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  public patientList: patient[];
  public deletedPatientList: patient[] = [];
  public isDesc: boolean;

  //To Show Deleted data for 30 seconds
  public isDeleteSectionVisible: boolean = false;
  public t: any;
  constructor(public patientArray: PatientService) {
  }

  ngOnInit() {
    
    this.patientList = this.patientArray.GetAllPatients();
  }


  onPatientDelete(patientId: number) {
    debugger;
    this.patientArray.deletePatient(patientId);
    this.deletedPatientList = this.patientArray.deletedPatientList;
    console.log("deleted patient count = " + this.deletedPatientList.length);
    this.isDeleteSectionVisible = true;
    console.log("Onpatient Delete" + this.isDeleteSectionVisible);
    clearTimeout(this.t);
    this.t = setTimeout(() => {
      this.isDeleteSectionVisible = false;
      this.patientArray.clearDeletedPatientList();    
    },30000)
  
  }

  onUndoDelete() {
    debugger;
    this.patientArray.onUndoDeletedData();
    clearTimeout(this.t);
    this.isDeleteSectionVisible = false;

  }
  // //To change Sort direction
  // sort(property) {
  //   this.isDesc = !this.isDesc; //change the direction    
  //   // this.column = property;
  //   let direction = this.isDesc ? 1 : -1;

  //   this.patientList.sort(function (a, b) {
  //     if (a['age'] < b['age']) {
  //       return -1 * direction;
  //     }
  //     else if (a[property] > b[property]) {
  //       return 1 * direction;
  //     }
  //     else {
  //       return 0;
  //     }
  //   });
  // };
  // Declare local variable
  direction: number;
  column: string;
  // Change sort function to this: 
  sort(property) {
    this.isDesc = !this.isDesc; //change the direction    
    this.direction = this.isDesc ? 1 : -1;
    this.column = 'age';
    console.log("Direction:" + this.direction + " isDesc:" + this.isDesc);
  }


}
