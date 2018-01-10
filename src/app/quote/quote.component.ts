import { Component, OnInit } from '@angular/core';
import {Quote} from '../quotes'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes= [
    new Quote(1,'Live once, live well', 'Vicky Toms', new Date(2018,3,14)),
    new Quote(2,'You are who you think you are', 'Victor Biwott', new Date(2017,10,10)),
  ];

  toogleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
  deleteQuote(isComplete,index){
   if (isComplete){
       this.quotes.splice(index,1);
       }
       }
  constructor() { }

  ngOnInit() {
  }

}
