import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-user-name',
  templateUrl: './input-user-name.component.html',
  styleUrls: ['./input-user-name.component.css'],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      multi:true,
      useExisting:InputUserNameComponent
    }
  ]
})

export class InputUserNameComponent implements OnInit,ControlValueAccessor {

  theUserName:string="";

  constructor() { }

  myRegisterOnChange = (value:string)=>{}
  myRegisterOnTouched = ()=>{}

  change(event:Event){
    console.log('change')
    this.theUserName = (event.target as HTMLInputElement).value
    this.myRegisterOnChange((event.target as HTMLInputElement).value)
  }

  writeValue(obj: any): void {
    console.log('writeValue')
    this.theUserName = obj
  }
  registerOnChange(fn: any): void {
    console.log('registerOnChange')
    this.myRegisterOnChange = fn
  }
  registerOnTouched(fn: any): void {
    console.log('registerOnTouched')
    this.myRegisterOnTouched = fn
  }

  ngOnInit(): void {
  }

}
