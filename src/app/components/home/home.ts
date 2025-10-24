import { Component } from '@angular/core';
import { WorldMapComponent } from "../world-map/world-map.component";
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [WorldMapComponent,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {


  cards:any=[
    {img:'../../../assets/images/aunty1.png',badge:'../../../assets/images/b1 (1).png',title:'Intangible Heritage',desc:'Traditions, cultural practices, and knowledge passed down through generations',btn:'Cooming Soon'},
    {img:'../../../assets/images/uni2.png',badge:'../../../assets/images/b1 (2).png',title:'Tangible Heritage',desc:'Places, monuments, and physical structures that represent the cooperative cultural legacy.',btn:'read more'}
    
  ]


  tangibleButtons: string[] = [
  'Monuments',
  'Historic buildings',
  'Archaeological sites',
  '...',
];
}
