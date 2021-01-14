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
  public topTracks: any = [];
  public loadingArtist: boolean;
  public loadingTopTracks: boolean;
  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loadingArtist = true;
    this.loadingTopTracks = true;
    this.router.params.subscribe((params) => {
      this.getArtist(params.id);

      this.getTopTracks(params.id);
    });
  }

  getArtist = (id: string) => {
    this.spotify.getArtist(id).subscribe((artist: any) => {
      this.artist = artist;
    });
    this.loadingArtist = false;
  };

  getTopTracks = (id: string) => {
    this.spotify.getTopTracks(id).subscribe((topTracks: any) => {
      this.topTracks = topTracks.tracks;
    });
    this.loadingTopTracks = false;
  };
}
