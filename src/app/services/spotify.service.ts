import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  public token =
    'Bearer BQB4mAQ0T8cfcmiDqBipKZ-qT5RLmdDUQYJ1vQjBeX1fCT28uKCwBxP1ctnHXj1KFEoKnl3GS1tJ6pQsX-s';
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

  getNewReleases(): Observable<any> {
    return this.getQuery('browse/new-releases/?limit=20').pipe(
      map((_) => _.albums.items)
    );
  }

  getArtist(term: string): Observable<any> {
    return this.getQuery(`search?q=${term}&type=artist&limit=15`).pipe(
      map((_) => _.artists.items)
    );
  }
}
