import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  dataValue ="";

  constructor(private http: Http) { }

  ngOnInit() {
  }
  readForm = new FormGroup(
    {id: new FormControl('',Validators.required)}
  )
  onSubmit(){
    var id = this.readForm.get("id").value;
    return this.http.post("http://localhost:8080/student/listStudent?id="+id,'POST',{}).subscribe(
      (data)=>{this.dataValue= data["_body"]}
    )
  }

}
