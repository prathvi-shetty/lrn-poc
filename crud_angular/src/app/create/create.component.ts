import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponents implements OnInit {

  constructor(private http : Http) { }
   dataValue =""
  ngOnInit() {
  }
  createForm =new FormGroup({
    Name : new FormControl('',[Validators.required]),
    Place: new FormControl('',[Validators.required])
    })
    onSubmit()  {
      var name = this.createForm.get('Name').value;
      var place = this.createForm.get('Place').value;
      return this.http.post("http://localhost:8080/student/add?name="+name+"&place="+place,'POST',{}).
      subscribe(
        (data) => {this.dataValue= data["_body"]}
      );

    }

}
