import { Component, OnInit } from '@angular/core';
import { Banner } from "../../shared/banner/banner";
import { HeritageCardComponent, HeritageCard } from '../heritage/heritage-card.component';
import { SitesService, Site } from '../../services/sites.service';

@Component({
  selector: 'app-intangible',
  imports: [Banner, HeritageCardComponent],
  templateUrl: './intangible.html',
  styleUrl: './intangible.css'
})
export class Intangible implements OnInit {
  cards: HeritageCard[] = [];

  constructor(private sitesService: SitesService) {}

  ngOnInit() {
    const intangibleSites = this.sitesService.getSitesByType('intangible');
    this.cards = intangibleSites.map(site => this.siteToCard(site));
  }

  private siteToCard(site: Site): HeritageCard {
    return {
      img: site.content.mainImage,
      badge: '../../../assets/images/b1 (1).png', // intangible badge
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
