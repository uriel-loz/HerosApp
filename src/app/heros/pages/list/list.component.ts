import { Component, OnInit, inject } from '@angular/core';
import { HerosService } from '../../services/heros.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  public heros: Hero[] = [];
  private heroesService = inject(HerosService);

  constructor() { }

  ngOnInit(): void {
    this.heroesService.getHeros()
      .subscribe(heros => this.heros = heros);
  }

}
