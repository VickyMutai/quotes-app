import { Component } from '@angular/core';
import {Quote} from './quotes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes= [
    new Quote(1,'Live once, live well')
    new Quote(2,'You are who you think you are')
  ];
}
