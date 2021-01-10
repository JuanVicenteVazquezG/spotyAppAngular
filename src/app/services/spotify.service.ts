import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  public token =
    'Bearer BQCc075CJNJGPhL81yOVLTl3S5DCafDRb2I118hO9Fus2xL6vNGrvVNZjIBHP6uojJgbghuA0-VYjreWo1s';
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
