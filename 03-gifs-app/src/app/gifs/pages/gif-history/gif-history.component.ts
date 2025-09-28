import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { GifService } from '../../services/gifs.services';
import { GifListItemComponent } from "../../components/gif-list/gif-list-item/gif-list-item.component";
import { GifListComponent } from "../../components/gif-list/gif-list.component";

@Component({
  selector: 'gif-history',
  imports: [GifListItemComponent, GifListComponent],
  templateUrl: './gif-history.component.html',
})
export default class GifHistoryComponent {

  // query = inject(ActivatedRoute).params.subscribe(value =>{
  //   console.log(value['query']);
  // })

  gifServices = inject(GifService);

  query = toSignal(inject(ActivatedRoute).params.pipe(
    map(params => params['query'])
  ))

  gifsByKey = computed(() => this.gifServices.getHistoryGifs(this.query()));

}
