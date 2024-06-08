import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HerosRoutingModule } from './heros-routing.module';
import { HeroComponent } from './pages/hero/hero.component';
import { ListComponent } from './pages/list/list.component';
import { NewHeroComponent } from './pages/new-hero/new-hero.component';
import { SearchComponent } from './pages/search/search.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './components/card/card.component';
import { HeroImagePipe } from './pipes/hero-image.pipe';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LayoutComponent,
    HeroComponent,
    ListComponent,
    NewHeroComponent,
    SearchComponent,
    CardComponent,

    HeroImagePipe
  ],
  imports: [
    CommonModule,
    HerosRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class HerosModule { }
