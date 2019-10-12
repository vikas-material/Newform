import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coursename',
  templateUrl: './coursename.component.html',
  styleUrls: ['./coursename.component.css']
})
export class CoursenameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  categery = [
    { id:1 ,name:'E-mail'},
    { id:2 ,name:'Phone'},
    { id:3 ,name:'Address'}
  ]

  onlog(firstName)
  {
    console.log(firstName);
  }
  submit(f)
  {
    console.log(f);
  }

}
