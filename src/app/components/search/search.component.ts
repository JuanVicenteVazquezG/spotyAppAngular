import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  public artists: any[] = [];
  public loading: boolean;
  constructor(private spotify: SpotifyService) {}

  search = (term: string) => {
    this.loading = true;
    this.spotify.getArtists(term).subscribe((data) => {
      this.artists = data;
    });
    this.loading = false;
  };
}
