import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm = this.fb.group({
    userName:['root',Validators.required]
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
