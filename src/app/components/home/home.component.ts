import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public newSongs: any[] = [];
  public loading: boolean;
  constructor(private spotifyService: SpotifyService) {
    this.loading = true;
    this.spotifyService.getNewReleases().subscribe((data: any) => {
      this.newSongs = data;
    });
    this.loading = false;
  }
}
