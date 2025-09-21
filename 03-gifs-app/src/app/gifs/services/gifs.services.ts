import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import type { Gif } from '../interfaces/gif.interfaces';
import { GifMapper } from '../mapper/gif.mapper';
import { map, tap } from 'rxjs';

// {
//   'Goku': [gif1, gif2, gif3],
//   'Saitama': [gif1, gif2, gif3],
//   'Markc': [gif1, gif2, gif3],

// }

// Record<string, Gif[]>

@Injectable({providedIn: 'root'})
export class GifService {
  private http = inject(HttpClient)

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(true);

  searchHistory = signal<Record<string, Gif[]>>({});
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()))

  constructor(){
    this.loadTrendingGifs()
    // console.log('Servicio Invocado')
  }

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

  searchGifs(query: string) {

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
}
