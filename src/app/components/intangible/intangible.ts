import { Component } from '@angular/core';
import { Banner } from "../../shared/banner/banner";
import { HeritageCardComponent, HeritageCard } from '../heritage/heritage-card.component';
import { HeritageService } from '../../services/heritage.service';

@Component({
  selector: 'app-intangible',
  imports: [Banner, HeritageCardComponent],
  templateUrl: './intangible.html',
  styleUrl: './intangible.css'
})
export class Intangible {
  cards: HeritageCard[] = [];

  constructor(private heritageService: HeritageService) {
    this.cards = this.heritageService.getIntangibleCards();
  }
}
