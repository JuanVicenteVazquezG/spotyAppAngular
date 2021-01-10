import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [],
})
export class CardComponent {
  @Input() items: any[] = [];

  constructor(private router: Router) {}

  seeArtist = (item: any) => {
    const artistId: string =
      item.type === 'artist' ? item.id : item.artists[0].id;
    console.log(artistId);
    this.router.navigate(['artist', artistId]);
  }
}
