import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  public token =
    'Bearer BQBr2bpAcNw6Amvn_B4BygkEDWXcpachneDHK41WiCtJEcD6LNN8PpKsMw_h340j_WMbiCbzofyZ7gkx7Tk';
  constructor(private http: HttpClient) {
  }

  getQuery = (query: string) => {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: this.token,
    });
    return this.http.get(url, { headers });
  }

  getNewReleases(): any {
    return this.getQuery('browse/new-releases/?limit=20').pipe(
      map((_) => _['albums'].items)
    );
  }

  getArtists(term: string): any {
    return this.getQuery(`search?q=${term}&type=artist&limit=15`).pipe(
      map((_) => _['artists'].items)
    );
  }

  getArtist(id: string): any {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks = (id: string): any => {
    return this.getQuery(`artists/${id}/top-tracks?country=us`);
  }
}
