import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  updateForm = new FormGroup(
    {id: new FormControl('',Validators.required),
    Name : new FormControl('',Validators.required),
    Place: new FormControl('',Validators.required)
  }
  )
  onSubmit(){
    console.log('Updated')
  }

}
