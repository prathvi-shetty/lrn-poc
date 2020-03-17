import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  dataValue ="";
  constructor(private http: Http) { }

  ngOnInit() {
  }
  deleteForm = new FormGroup({
    id : new FormControl('',[Validators.required])
  })
  onSubmit(){
    var id = this.deleteForm.get("id").value;
    return this.http.post("http://localhost:8080/student/delete?id="+id,'POST',{}).subscribe(
      (data)=>{this.dataValue= data["_body"]}
    );
    }
  }


