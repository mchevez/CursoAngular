import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { GifService } from '../../services/gifs.services';


@Component({
  selector: 'app-trending-page',
  imports: [GifListComponent],
  templateUrl: './trending-page.component.html',
})
export default class TrendingPageComponent {

  gifService = inject(GifService)
  scrollDivRef = viewChild<ElementRef>('groupDiv')

  onScroll(event: Event){
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    console.log(scrollDiv)
  }
}
