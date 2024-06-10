import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HerosService } from '../../services/heros.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'heros-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.css']
})
export class NewHeroComponent implements OnInit{

  public heroForm = new FormGroup({
    id: new FormControl(''),
    superhero: new FormControl('', { nonNullable: true }),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl(''),
  });

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];

  private heroService = inject(HerosService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private snackbar = inject(MatSnackBar);

  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero;

    return hero;
  }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;

    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.heroService.getHeroById(id)),
      ).subscribe(hero => {
        if (!hero) return this.router.navigateByUrl('/404')

        this.heroForm.reset(hero);

        return;
      })
  }

  onSubmit() : void {
    if (this.heroForm.invalid) return;

    if(this.currentHero.id) {
      this.heroService.updateHero(this.currentHero)
        .subscribe(hero => {
          this.showSnackbar('Hero updated');
        });

      return;
    }

    this.heroService.addHero(this.currentHero)
      .subscribe(hero => {
        this.router.navigateByUrl(`/heros/edit/${hero.id}`);
        this.showSnackbar('Hero created');
      });

    return;
    // this.heroService.updateHero(this.heroForm.value);
  }

  deleteHero(): void {
    if (!this.currentHero.id) return;    

    this.heroService.deleteHero(this.currentHero.id)
      .subscribe(resp => {
        this.router.navigateByUrl('/heros');
        this.showSnackbar('Hero deleted');
      });
  }


  showSnackbar(message: string): void {
    this.snackbar.open(message, 'done', {
      duration: 2500
    })
  }

}
