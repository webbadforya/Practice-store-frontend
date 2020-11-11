import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Admin } from '../interfaces/interfaces';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  public obj: Admin | null;

  constructor(
    private http: HttpService
  ) { }
  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
    this.obj = f.value;
    this.http.authAdm("http://localhost:3000/admins/create", this.obj).subscribe(data => {
      if(data){
        alert("You are welcome!")
      }
      else{
        alert("Login was not available.")
      }
    })
  }
  ngOnInit(): void {
  }

}
