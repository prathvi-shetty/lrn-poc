import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  readForm = new FormGroup(
    {id: new FormControl('',Validators.required)}
  )

}
