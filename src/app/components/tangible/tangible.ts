import { Component } from '@angular/core';
import { Banner } from '../../shared/banner/banner';
import { HeritageCardComponent, HeritageCard } from '../heritage/heritage-card.component';
import { HeritageService } from '../../services/heritage.service';

@Component({
  selector: 'app-tangible',
  imports: [Banner, HeritageCardComponent],
  templateUrl: './tangible.html',
  styleUrl: './tangible.css'
})
export class Tangible {
  cards: HeritageCard[] = [];

  constructor(private heritageService: HeritageService) {
    this.cards = this.heritageService.getTangibleCards();
  }
}
