import { Component, OnInit } from '@angular/core';
import {Quote} from '../quotes'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes= [
    new Quote(1,'Vicky Toms','Live once, live well',),
    new Quote(2,'Victor Biwott', 'You are who you think you are'),
  ];

  toogleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
  deleteQuote(isComplete,index){
   if (isComplete){
       this.quotes.splice(index,1);
       }
       }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit() {
  }

}
