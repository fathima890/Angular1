import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from './model';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class RegistrationComponent implements OnInit {

  registrationForm = new FormGroup({

  });

  
  users:any;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'     
    })
  }
  constructor(private fb: FormBuilder,
    private  http: HttpClient,
    private _snackBar: MatSnackBar) { 
    this.users=[];
    this.GetUsers();  
  }

  ngOnInit(): void {
    this.registrationForm = this.fb.group(
      {
        firstName: [null, [Validators.required]],
        lastName: [null, [Validators.required]],
        dob: [null, [Validators.required]],
        gender:[null, [Validators.required]],
        email:[null, [Validators.required]]
      });
  }
  create(url: string, dataObject:any) {
    return this.http.post(url,dataObject,this.httpOptions).subscribe(r=> console.log(r));;
    
  }

  deleteUser(user:User)
  {
    const url = `https://cybersquare.herokuapp.com/user/${user.id}`;
    this.http.delete(url).subscribe();
    this.GetUsers();
  }

  public GetUsers() {
    const url = `https://cybersquare.herokuapp.com/user/`;
    var response= this.http.get(url).subscribe(data=>{
      this.users=data;
    });

  }

  createUser()
  {
    let dob=this.registrationForm.controls.dob.value;
    let dateOfBirth=`${dob.year}-${dob.month}-${dob.day}`;

 const user: User = {
      f_name:this.registrationForm.controls.firstName.value,
      l_name:this.registrationForm.controls.lastName.value,
      dob:dateOfBirth,
      email:this.registrationForm.controls.email.value,
      gender:this.registrationForm.controls.gender.value
    };

     this.create("https://cybersquare.herokuapp.com/user/",user);
     this._snackBar.open("Saved successfully.", "close");
     this.GetUsers();
  }

}
