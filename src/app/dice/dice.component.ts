import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent implements OnInit {
  diceImg: string = './assets/img/dice1.svg';
  diceNumber: number = 1;
  history: number[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  rollDices(): void {
    let repeats: number = 0;
    let rolledNumber = Math.round(Math.random() * 5) + 1;
    this.history.forEach((element, index) => {if(element == rolledNumber) {repeats++}} );
    if(repeats > 4) {
      this.rollDices();
      return;
    }
    this.diceImg = './assets/img/dice' + rolledNumber + '.svg';
    this.diceNumber = rolledNumber;
    if(this.history.length > 20) {
      this.history.pop();
    } 
    this.history.push(rolledNumber);
  }

}
