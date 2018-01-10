import { Component, OnInit, Input, Output, EventEnitter } from '@angular/core';
import {Quote} from '../quotes'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote:Quote;
  constructor() { }

  ngOnInit() {
  }

}
