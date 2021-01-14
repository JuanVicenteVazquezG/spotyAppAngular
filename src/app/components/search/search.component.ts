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
  public error: boolean;
  public searchErrorMessage: string;
  constructor(private spotify: SpotifyService) {}

  search = (term: string) => {
    this.loading = true;
    this.spotify.getArtists(term).subscribe(
      (data) => {
        this.artists = data;
      },
      (searchErrorService) => {
        this.error = true;
        this.loading = false;
        this.searchErrorMessage = searchErrorService.error.error.message;
      }
    );
    this.loading = false;
  };
}
