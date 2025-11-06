import { Component, OnInit } from '@angular/core';
import { Banner } from '../../shared/banner/banner';
import { HeritageCardComponent, HeritageCard } from '../heritage/heritage-card.component';
import { SitesService, Site } from '../../services/sites.service';
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

  constructor(private sitesService: SitesService, private route: ActivatedRoute) {}

  ngOnInit() {
    const tangibleSites = this.sitesService.getSitesByType('tangible');
    this.allCards = tangibleSites.map(site => this.siteToCard(site));
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

  private siteToCard(site: Site): HeritageCard {
    return {
      img: site.content.mainImage,
      badge: '../../../assets/images/b1 (2).png', // tangible badge
      countryName: site.country,
      haritageData: site.content.infoCard.entryYear.toString(),
      btn: 'Read More',
      title: site.name,
      desc: site.content.pageSubtitle,
      siteId: site.id,
      type: site.type
    };
  }
}
