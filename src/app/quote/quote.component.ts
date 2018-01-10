import { Component, OnInit } from '@angular/core';
import {Quote} from '../quotes'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes= [
    new Quote(1,'Live once, live well', 'Vicky Toms')
    new Quote(2,'You are who you think you are', 'Victor Biwott')
  ];

  toogleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
    }
  constructor() { }

  ngOnInit() {
  }

}
