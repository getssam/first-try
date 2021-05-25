import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
title ="new service";
date=new Date;
montant = 500;
jugo= "lorem ipsum predu took time like predent ";
contacts = [
  {id: 1,name:"contact1",tel:"066666", email:"email@tr.com"},
  {id: 2,name:"contact2",tel:"066666", email:"email@tr.com"},
  {id: 3,name:"contact3",tel:"066666", email:"email@tr.com"},
  {id: 4,name:"contact4",tel:"066666", email:"email@tr.com"}
];

  constructor() { }

  ngOnInit(): void {
  }

}
