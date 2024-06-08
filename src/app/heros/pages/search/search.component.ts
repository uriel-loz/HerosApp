import { Component, OnInit, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { HerosService } from '../../services/heros.service';

@Component({
  selector: 'heros-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchInput = new FormControl('');
  public heros: Hero[] = [];
  private herosService = inject(HerosService);

  constructor() { }

  ngOnInit() {
  }

  searchHero(){
    const value: string = this.searchInput.value || ''; 

    // if (value.trim().length == 0) return ;

    this.herosService.getSuggestions(value)
      .subscribe(heros => this.heros = heros);    
  }

}
