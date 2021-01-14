import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public newSongs: any[] = [];
  public loading: boolean;

  public error: boolean;
  public homeErrorMessage: string;
  constructor(private spotifyService: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.spotifyService.getNewReleases().subscribe((data: any) => {
      this.newSongs = data;
    },(homeErrorService)=>{
      this.error = true;
      this.loading = false;
      this.homeErrorMessage = homeErrorService.error.error.message;
    });
    this.loading = false;
  }
}
