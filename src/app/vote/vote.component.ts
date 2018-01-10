import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  @Output() isComplete = new EventEmitter<boolean>();

  quotes= [
    new Quote(1,'Live once, live well', 'Vicky Toms'),
    new Quote(2,'You are who you think you are', 'Victor Biwott'),
  ];

  uvotes = 0;
  dvotes = 0;

  upVote(){
    this.uvotes = this.uvotes + 1;
  }

  downVote(){
    this.dvotes = this.dvotes + 1;
  }


  constructor() { }

  ngOnInit() {
  }

}
