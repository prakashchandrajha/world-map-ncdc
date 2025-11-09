import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Banner } from '../../shared/banner/banner';
import { HeritageCardComponent, HeritageCard } from '../heritage/heritage-card.component';
import { SitesService, Site } from '../../services/sites.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tangible',
  imports: [Banner, HeritageCardComponent, FormsModule],
  templateUrl: './tangible.html',
  styleUrl: './tangible.css'
})
export class Tangible implements OnInit {
  cards: HeritageCard[] = [];
  allCards: HeritageCard[] = [];
  selectedYear: string = '';
  selectedContinent: string = '';
  selectedCountry: string = '';
  years: string[] = [];
  continents: string[] = [];
  countries: string[] = [];

  constructor(private sitesService: SitesService, private route: ActivatedRoute) {}

  ngOnInit() {
    const tangibleSites = this.sitesService.getSitesByType('tangible');
    this.allCards = tangibleSites.map(site => this.siteToCard(site));
    this.populateFilterOptions();
    this.applyFilters();
    this.route.queryParams.subscribe(params => {
      const searchTerm = params['search'];
      if (searchTerm) {
        this.cards = this.allCards.filter(card =>
          card.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      } else {
        this.applyFilters();
      }
    });
  }

  private populateFilterOptions() {
    const tangibleSites = this.sitesService.getSitesByType('tangible');
    this.years = [...new Set(tangibleSites.map(site => site.coopYear?.toString()))].filter(y => y).sort();
    this.continents = [...new Set(tangibleSites.map(site => site.continent))].filter(c => c).sort();
    this.countries = [...new Set(tangibleSites.map(site => site.country))].filter(c => c).sort();
  }

  applyFilters() {
    this.cards = this.allCards.filter(card => {
      const yearMatch = !this.selectedYear || card.coopYear?.toString() === this.selectedYear;
      const continentMatch = !this.selectedContinent || card.continent === this.selectedContinent;
      const countryMatch = !this.selectedCountry || card.countryName === this.selectedCountry;
      return yearMatch && continentMatch && countryMatch;
    });
  }

  onFilterChange() {
    this.applyFilters();
  }

  private siteToCard(site: Site): HeritageCard {
    return {
      img: site.content.mainImage,
      badge: '../../../assets/images/b1 (2).png', // tangible badge
      countryName: site.country,
      haritageData: site.content.infoCard.entryYear.toString(),
      btn: 'Read More',
      title: site.siteName,
      desc: site.content.pageSubtitle,
      siteId: site.id,
      type: site.type,
      continent:site.continent,
      coopYear:site.coopYear

    };
  }
}
