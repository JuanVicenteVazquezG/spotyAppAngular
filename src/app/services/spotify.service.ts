import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {

  public token='Bearer BQDy48U0ZiI_rJd57y-fEFlcsBiQZ1gi8ECiT0xqz_U14DN7LPsln34K6lgANcDuexMMk_Ia7FWr1sjEoZU'
  constructor(private http: HttpClient) {
    console.log('Spotify Service ready!');
  }

  getNewReleases(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization:
        this.token,
    });
    return this.http
      .get('https://api.spotify.com/v1/browse/new-releases/?limit=20', {
        headers,
      })
      .pipe(map((data) => data['albums'].items));
  }

  getArtist(term: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization:
        this.token,
    });
    return this.http
      .get(`https://api.spotify.com/v1/search?q=${term}&type=artist&limit=15`, {
        headers,
      })
      .pipe(map((data) => data['artists'].items));
  }
}
