import { Component, OnInit } from '@angular/core';
import { Banner } from '../../shared/banner/banner';
import { HeritageCardComponent, HeritageCard } from '../heritage/heritage-card.component';
import { HeritageService } from '../../services/heritage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tangible',
  imports: [Banner, HeritageCardComponent],
  templateUrl: './tangible.html',
  styleUrl: './tangible.css'
})
export class Tangible implements OnInit {
  cards: HeritageCard[] = [];
  allCards: HeritageCard[] = [];

  constructor(private heritageService: HeritageService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.allCards = this.heritageService.getTangibleCards();
    this.route.queryParams.subscribe(params => {
      const searchTerm = params['search'];
      if (searchTerm) {
        this.cards = this.allCards.filter(card =>
          card.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      } else {
        this.cards = this.allCards;
      }
    });
  }
}
