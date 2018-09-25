import { Injectable, OnInit } from '@angular/core';
import { patient } from '../Models/Patient.model';



@Injectable({
  providedIn: 'root'
})
export class PatientService implements OnInit {
  patientList: patient[] = [
    { patientId: 1, patientName: 'Sam', dateOfBirth: new Date('01-05-1991'), age: 25 },
    { patientId: 2, patientName: 'Juned', dateOfBirth: new Date('02-06-1988'), age: 28 },
    { patientId: 3, patientName: 'Peter', dateOfBirth: new Date('12-02-1994'), age: 24 },
  ];

  deletedPatientList: patient[] = [];

  patientDetails: patient;
  deletedPatientDetails: patient;
  constructor() { }

  ngOnInit() {

  }

  GetAllPatients() {
    return this.patientList;
  }

  GetPatientDetails(id: number) {
    // this.patientDetails = patient;

    if (id > 0) {
      this.patientDetails = this.patientList.filter(x => x.patientId == id)[0];
      // var index = this.patientList.indexOf(this.patientDetails);
      // this.patientList.splice(index,1);
      // this.patientDetails = new patient(null,null,null,null);
      return this.patientDetails;
    }
  }

  deletePatient(id: number) {
    debugger;
    if (id > 0) {
      this.deletedPatientDetails = this.patientList.filter(x => x.patientId == id)[0];
      var index = this.patientList.indexOf(this.deletedPatientDetails);
      this.patientList.splice(index, 1);
      //this.patientDetails = new patient(null,null,null,null);

      this.deletedPatientList.push(this.deletedPatientDetails);
      return this.deletedPatientDetails;
    }
  }


  onSaveData(patientDetails: patient) {
    debugger;
    // if(patient.id == 0 || patient.id == null) {
    patientDetails.patientId = this.patientList.length + 1;
    // this.patientDetails = new patient(patient.id,patient.name, patient.email,patient.age);
    this.patientList.push(patientDetails);
    // }
    // else{
    //     this.patientList.find(x=>x.id == patient.id).name = patient.name;
    //     this.patientList.find(x=>x.id == patient.id).email = patient.email;
    //     this.patientList.find(x=>x.id == patient.id).age = patient.age;
    // }
  }


  onUndoDeletedData() {
    // if(this.deletedPatientList.length > 0){
    //   this.patientList = this.patientList.concat(this.deletedPatientList);
    //   this.deletedPatientList = [];
    // }
    this.patientList.splice(1, 0, ...this.deletedPatientList);
    this.clearDeletedPatientList();  
  }

  clearDeletedPatientList(){
    this.deletedPatientList.length = 0;
  }
}
