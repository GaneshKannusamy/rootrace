import { Component, OnInit } from '@angular/core';
import { Role } from '../models/role';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  Role = Role;

  constructor() { }

  ngOnInit() {
  }

  onDetailsFormSubmit(){
    alert('Saved Successfully');
  }

}