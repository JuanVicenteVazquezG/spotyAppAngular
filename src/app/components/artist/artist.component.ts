import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [],
})
export class ArtistComponent {
  public artist: any = {};
  public topTracks: any = {};
  public loadingArtist: boolean;
  public loadingTopTracks: boolean;
  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loadingArtist = true;
    this.loadingTopTracks = true;
    this.router.params.subscribe((params) => {
      this.getArtist(params.id);
      this.loadingArtist = false;
      this.getTopTracks(params.id);
      this.loadingTopTracks = false;
    });
  }

  getArtist = (id: string) => {
    this.spotify
      .getArtist(id)
      .subscribe((artist: any) => (this.artist = artist));
  };

  getTopTracks = (id: string) => {
    this.spotify.getTopTracks(id).subscribe((topTracks: any) => {
      console.log(topTracks.tracks);
      this.topTracks = topTracks.tracks;
    });
  }
}
