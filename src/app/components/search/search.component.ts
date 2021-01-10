import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  public artists: any[] = [];
  constructor(private spotify: SpotifyService) {}

  search = (term: string) => {
    console.log(term);
    this.spotify.getArtist(term).subscribe((data) => {
      console.log(data);
      this.artists = data;
    });
  };
}
