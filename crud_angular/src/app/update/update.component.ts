import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private http : Http) { }
  dataValue =""

  ngOnInit() {
  }
  updateForm = new FormGroup(
    {id: new FormControl('',Validators.required),
    Name : new FormControl('',Validators.required),
    Place: new FormControl('',Validators.required)
  }
  )
  onSubmit(){
    var id = this.updateForm.get('id').value;
    var name = this.updateForm.get('Name').value;
    var place = this.updateForm.get('Place').value;
    return this.http.post("http://localhost:8080/student/update?name="+name+"&place="+place+"&id="+id,'POST',{}).
    subscribe(
      (data) => {this.dataValue= data["_body"]}
    );
  }

}
