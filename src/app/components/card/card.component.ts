import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  label1:string= "action 1";
  label2:string= "action 2";

  @Input() data: string[];
  @Input() nameText: string;

  constructor() { }

  ngOnInit(): void {
  }

}
