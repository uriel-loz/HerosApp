import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { enviroments } from '../../../environments/environments';

@Injectable({providedIn: 'root'})
export class HerosService {
    private baseUrl: string = enviroments.baseUrl;

    constructor(private http: HttpClient) { }

    getHeros(): Observable<Hero[]>{
        return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
    }

    getHeroById(id: string): Observable<Hero|undefined>{
        return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`)
            .pipe(
                catchError(error => of(undefined))
            );
    }
    
    getSuggestions(query: string): Observable<Hero[]> {
        return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=${query}&_limit=6`);
    }

    addHero(hero: Hero): Observable<Hero>{
        return this.http.post<Hero>(`${this.baseUrl}/heroes`, hero);
    }

    updateHero(hero: Hero): Observable<Hero>{
        if (!hero.id) throw new Error('Hero id is required');

        return this.http.put<Hero>(`${this.baseUrl}/heroes/${hero.id}`, hero);
    }

    deleteHero(id: string): Observable<boolean>{
        if (!id) throw new Error('Hero id is required');

        return this.http.delete(`${this.baseUrl}/heroes/${id}`)
            .pipe(
                catchError(error => of(false)),
                map(resp => true)
            );
    }
}