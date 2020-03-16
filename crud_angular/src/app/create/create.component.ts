import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponents implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  createForm =new FormGroup({
    Name : new FormControl('',[Validators.required]),
    Place: new FormControl('',[Validators.required])
    })
    onSubmit(){
      if(this.createForm.valid){
        console.log(this.createForm.value)
      }
    }

}
