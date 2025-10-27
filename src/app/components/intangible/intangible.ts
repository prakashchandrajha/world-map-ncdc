import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-intangible',
  imports: [RouterLink],
  templateUrl: './intangible.html',
  styleUrl: './intangible.css'
})
export class Intangible {
cards: any = [
  {
    img: '../../../assets/images/t1.png',
    badge: '../../../assets/images/b1 (1).png',
    countryName: 'Brazil',
    haritageData: '2001',
    btn: 'Read More',
    title: 'Northeastern Artisan Cooperatives'
  },
  {
    img: '../../../assets/images/t2.png',
    badge: '../../../assets/images/b1 (1).png',
    countryName: 'Brazil',
    haritageData: '2001',
    btn: 'Read More',
    title: 'Rural Cooperative Traditions'
  },
  {
    img: '../../../assets/images/t3.png',
    badge: '../../../assets/images/b1 (1).png',
    countryName: 'Brazil',
    haritageData: '2001',
    btn: 'Read More',
    title: 'Cooperative Harvest Festival'
  },
  {
    img: '../../../assets/images/t4.png',
    badge: '../../../assets/images/b1 (1).png',
    countryName: 'Brazil',
    haritageData: '2001',
    btn: 'Read More',
    title: 'Cooperative Fishing Practices'
  },
  {
    img: '../../../assets/images/t5.png',
    badge: '../../../assets/images/b1 (1).png',
    countryName: 'Brazil',
    haritageData: '2001',
    btn: 'Read More',
    title: 'Ancient Wine Cooperatives'
  },
  {
    img: '../../../assets/images/t6.png',
    badge: '../../../assets/images/b1 (1).png',
    countryName: 'Brazil',
    haritageData: '2001',
    btn: 'Read More',
    title: 'Cooperative Weaving Techniques'
  }
];

}
