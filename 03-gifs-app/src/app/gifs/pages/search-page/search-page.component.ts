import { Component, inject, signal } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { GifService } from '../../services/gifs.services';
import { Gif } from '../../interfaces/gif.interfaces';

@Component({
  selector: 'app-search-page',
  imports: [ GifListComponent],
  templateUrl: './search-page.component.html',
})
export default class SearchPageComponent {

  gifService = inject(GifService);
  gif = signal<Gif[]>([]);
  search = signal('');

  onSearch(query:string){
    console.log({query})
    this.gifService.searchGifs(query).subscribe( resp  =>{
      // console.log(resp)
      this.gif.set(resp);
    })
    this.search.set('')
  }
}
