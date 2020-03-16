import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  deleteForm = new FormGroup({
    id : new FormControl('',[Validators.required])
  })
  onSubmit(){
    if(this.deleteForm.valid){
      console.log('Deleted')
    }
  }

}
