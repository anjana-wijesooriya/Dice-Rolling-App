import { Component, QueryList, ViewChild } from '@angular/core';
import { DiceComponent } from './dice/dice.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('diceOne') diceOne: DiceComponent = new DiceComponent();
  @ViewChild('diceTwo') diceTwo: DiceComponent = new DiceComponent();

  rollDices(): void {
    this.diceOne.rollDices();
    this.diceTwo.rollDices();
  }
}
