import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { PokemonList } from "../models/pokemon.list";
import { PokemonDetail } from "../models/pokemon.detail";
import { map } from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class PokemonService {
    private baseUrl = 'https://pokeapi.co/api/v2/';
    
    constructor(private http: HttpClient) { }


    getPokemonList(offset: number, limit: number = 20) : Observable<PokemonList[]> {
        return this.http.get<PokemonList[]>(this.baseUrl + 'pokemon?offset=' + offset + '&limit=' + limit)
        .pipe(
            map((x: any) => x.results)
        );
    }

    getPokemonDetail(pokemon: number | string): Observable<PokemonDetail> {
        return this.http.get<PokemonDetail>(this.baseUrl + 'pokemon/' + pokemon);
    }
    
}