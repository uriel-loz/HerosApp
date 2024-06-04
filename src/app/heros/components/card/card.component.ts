import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'heros-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() hero!: Hero;

  constructor() { }

  ngOnInit(): void {
    if (!this.hero) throw new Error('Hero is required');
  }

}
