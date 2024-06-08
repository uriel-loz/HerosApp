import { Component, OnInit, inject } from '@angular/core';
import { HerosService } from '../../services/heros.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'heros-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  private herosService = inject(HerosService);
  private activateRoute = inject(ActivatedRoute);
  private router = inject(Router);

  public hero?: Hero;

  constructor(
    
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.
      pipe(
        switchMap(({id})  => this.herosService.getHeroById(id)),
      ).subscribe( hero => {
        if(!hero) return this.router.navigate(['/heros/list']);

        this.hero = hero;
        return;
      })
  }

}
