import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HerosRoutingModule } from './heros-routing.module';
import { HeroComponent } from './pages/hero/hero.component';
import { ListComponent } from './pages/list/list.component';
import { NewHeroComponent } from './pages/new-hero/new-hero.component';
import { SearchComponent } from './pages/search/search.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeroComponent,
    ListComponent,
    NewHeroComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    HerosRoutingModule
  ]
})
export class HerosModule { }
