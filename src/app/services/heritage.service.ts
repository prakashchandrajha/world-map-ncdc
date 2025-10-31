import { Injectable } from '@angular/core';
import { HeritageCard } from '../components/heritage/heritage-card.component';

@Injectable({
  providedIn: 'root'
})
export class HeritageService {

  getTangibleCards(): HeritageCard[] {
    return [
      {
        img: '../../../assets/images/t1.png',
        badge: '../../../assets/images/b1 (2).png',
        countryName: 'Brazil',
        haritageData: '2001',
        btn: 'Read More',
        title: 'Northeastern Artisan Cooperatives'
      },
      {
        img: '../../../assets/images/t2.png',
        badge: '../../../assets/images/b1 (2).png',
        countryName: 'Brazil',
        haritageData: '2001',
        btn: 'Read More',
        title: 'Rural Cooperative Traditions'
      },
      {
        img: '../../../assets/images/t3.png',
        badge: '../../../assets/images/b1 (2).png',
        countryName: 'Brazil',
        haritageData: '2001',
        btn: 'Read More',
        title: 'Cooperative Harvest Festival'
      },
      {
        img: '../../../assets/images/t4.png',
        badge: '../../../assets/images/b1 (2).png',
        countryName: 'Brazil',
        haritageData: '2001',
        btn: 'Read More',
        title: 'Cooperative Fishing Practices'
      },
      {
        img: '../../../assets/images/t5.png',
        badge: '../../../assets/images/b1 (2).png',
        countryName: 'Brazil',
        haritageData: '2001',
        btn: 'Read More',
        title: 'Ancient Wine Cooperatives'
      },
      {
        img: '../../../assets/images/t6.png',
        badge: '../../../assets/images/b1 (2).png',
        countryName: 'Brazil',
        haritageData: '2001',
        btn: 'Read More',
        title: 'Cooperative Weaving Techniques'
      }
    ];
  }

  getIntangibleCards(): HeritageCard[] {
    return [
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
}