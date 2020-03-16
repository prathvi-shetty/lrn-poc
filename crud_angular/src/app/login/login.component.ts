import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private router:Router) { }

  ngOnInit() {

  }
  profileForm =new FormGroup({
    Email : new FormControl('',[Validators.required,Validators.email]),
    Password: new FormControl('',[Validators.required,Validators.min(6),Validators.max(15)])
    })
    onSubmit(){
      if(this.profileForm.valid){
        console.log(this.profileForm.value)
        this.router.navigate(['./dashboard']);
      }
    }
  

}
