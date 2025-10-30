import { Component } from '@angular/core';
import { WorldMapComponent } from "../world-map/world-map.component";
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HomeService } from '../../services/home.service';

interface HeritageSection {
  title: string;
  image: string;
  shortText: string;
  fullText: string;
}

@Component({
  selector: 'app-home',
  imports: [WorldMapComponent,CommonModule,RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  cards: any[] = [];
  tangibleButtons: string[] = [];

  constructor(private homeService: HomeService) {
    this.cards = this.homeService.getHomeCards();
    this.tangibleButtons = this.homeService.getTangibleButtons();
  }


  showMore = false;

  toggleReadMore() {
    this.showMore = !this.showMore;
  }
}
