import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  public token =
    'Bearer BQCyTWIuub_ECF8AAdU1gFj52AG_l5zQvb3-zzrA2LWTPFlrIaGso0cf3HP37kRmRzVgI4sLsJPmNN5gLJ8';
  constructor(private http: HttpClient) {
    console.log('Spotify Service ready!');
  }

  getQuery = (query: string) => {
    const url: string = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: this.token,
    });
    return this.http.get(url, { headers });
  }

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
