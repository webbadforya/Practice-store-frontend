import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Admin } from '../interfaces/interfaces';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  private obj: Admin | null;

  constructor(
    private http: HttpService
  ) { }
  
  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
    this.obj = f.value;
    this.http.authAdm("http://localhost:3000/admins/login", this.obj).subscribe(data => {
      if(data){
        console.log(data)
      }
      else{
        alert("Login was not available.")
      }
    })
  }

  ngOnInit(): void {
  }

}
