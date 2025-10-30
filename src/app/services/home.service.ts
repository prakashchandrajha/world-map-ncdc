import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  getHomeCards() {
    return [
        {img:'../../../assets/images/uni2.png',badge:'../../../assets/images/b1 (2).png',title:'Tangible Heritage',desc:'Physical sites, Landscapes, Buildings, Archives, and infrastructure directly associated with cooperative heritage.',btn:'read more'},
         {img:'../../../assets/images/aunty1.png',badge:'../../../assets/images/b1 (1).png',title:'Intangible Heritage',desc:'Traditions, governance systems, cultural values, and collective practices underpinning cooperation and Cooperative Culture passed down throigh generations. (Launch in 2026)',btn:'Cooming Soon'},
    
    ];
  }

  getTangibleButtons(): string[] {
    return [
      'Buildings',
      'Sites',
      'Museums',
      'Assembly Halls',
      'Villages & Cities'
    ];
  }
    getInTangibleButtons(): string[] {
    return [
      'Buildings',
      'Sites',
      'Museums',
      'Assembly Halls',
      'Villages & Cities'
    ];
  }
}