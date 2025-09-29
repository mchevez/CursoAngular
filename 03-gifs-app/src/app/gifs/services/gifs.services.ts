import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import type { Gif } from '../interfaces/gif.interfaces';
import { GifMapper } from '../mapper/gif.mapper';
import { map, Observable, tap } from 'rxjs';

// {
//   'Goku': [gif1, gif2, gif3],
//   'Saitama': [gif1, gif2, gif3],
//   'Markc': [gif1, gif2, gif3],

// }

// Record<string, Gif[]>

const GIF_KEYS = 'gifs';

function loadFromLocalStorage() {

  const gifsFromLocalStorage = localStorage.getItem(GIF_KEYS) ?? '{}';
  const gifs = JSON.parse(gifsFromLocalStorage);

  return gifs;
}

@Injectable({providedIn: 'root'})
export class GifService {
  private http = inject(HttpClient)

  constructor(){
    this.loadTrendingGifs()
  }

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(true);

  trendingGifGroup = computed(() =>{
    const groups = [];

    for(let i = 0; i< this.trendingGifs().length; i+=3){
      groups.push(this.trendingGifs().slice(i, i+3))
    }
    console.log({groups})
    return groups;
  })

  searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()))

  saveGifsToLocalStorage = effect(() =>{
    const historyString = JSON.stringify(this.searchHistory())
    localStorage.setItem(GIF_KEYS, historyString)
  })

  loadTrendingGifs(){

    this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`,{
      params:{
        api_key: environment.giphyApiKey,
        limit: 20
      }
    }).subscribe((resp) =>{
      const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
      // console.log(gifs);

      this.trendingGifs.set(gifs);
      this.trendingGifsLoading = signal(false);

    });
  }

  searchGifs(query: string): Observable<Gif[]> {

   return this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`,{
      params:{
        api_key: environment.giphyApiKey,
        limit: 20,
        q: query
      }
    }).pipe(

      map(({data}) => data),
      map((items) => GifMapper.mapGiphyItemsToGifArray(items)),

      //TODO: HISTORIAL DE BUSQUEDA
      tap((items) => {
        this.searchHistory.update((history) => ({
          ...history,
          [query.toLowerCase()]: items
        }))
      })
    )

    // .subscribe((resp) =>{
    //   console.log(resp);
    // });
  }

  getHistoryGifs(query: string): Gif[] {
    return this.searchHistory()[query] ?? [];
  }
}
