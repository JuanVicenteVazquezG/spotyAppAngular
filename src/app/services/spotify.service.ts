import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('Spotify Service ready!');
  }

  getNewReleases(): void {

    const headers = new HttpHeaders({Authorization: 'Bearer BQAhWsgb7IC0EZd4HZTFwogNjy0ClRqxiUieHbWY97mfew2llvnYk_AaODufdSpuZ8B0mDrqjut8ED2om2s'});
    this.http
      .get('https://api.spotify.com/v1/browse/new-releases/?limit=20',{ headers })
      .subscribe((data) => {
        console.log(data);
      });
  }
}
