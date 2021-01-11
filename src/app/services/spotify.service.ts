import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  public token =
    'Bearer BQCgcbothQbA-WjrSwX68h9oaLBy05AuWew2XkGntO68AJoth0RhPXHCXUbm21I2n2Lv84gB_O3ySDZhxUg';
  constructor(private http: HttpClient) {
    console.log('Spotify Service ready!');
  }

  getQuery = (query: string) => {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: this.token,
    });
    return this.http.get(url, { headers });
  };

  getNewReleases(): any {
    return this.getQuery('browse/new-releases/?limit=20').pipe(
      map((_) => _['albums'].items)
    );
  }

  getArtist(term: string): any {
    return this.getQuery(`search?q=${term}&type=artist&limit=15`).pipe(
      map((_) => _['artists'].items)
    );
  }
}
