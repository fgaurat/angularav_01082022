import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  @Input()
  name=""
  constructor() { }

  ngOnInit(): void {
  }

}
