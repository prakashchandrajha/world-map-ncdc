import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Banner } from '../../shared/banner/banner';
import { SitesService, Site } from '../../services/sites.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

export interface HeritageDetailConfig {
  type: 'tangible' | 'intangible';
  title: string;
  subtitle: string;
  gradientBackground: string;
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  bgColor: string;
  borderColor: string;
  buttonBg: string;
  buttonHover: string;
}

export interface HeritageContent {
  pageTitle: string;
  pageSubtitle: string;
  mainImage: string;
  thumbnails: string[];
  infoCard: {
    country: string;
    countryFlag: string;
    theme: string;
    entryYear: number;
    coordinates: string;
  };
  sections: {
    legacy: { title: string; content: string };
    criteria: { title: string; items: { heading: string; description: string }[] };
    virtualExperience: { title: string; content: string; image: string };
    community: { title: string; content: string };
    aditionalData: { title: string; content: string };
    aditionalData2: { title: string; content: string };
    aditionalDat3: { title: string; content: string };
    aditionalDat4: { title: string; content: string };
    aditionalDat5: { title: string; content: string };
    learnMore: { title: string; resources: string[] };
  };
}

@Component({
  selector: 'app-heritage-detail',
  imports: [CommonModule, Banner, RouterLink, TranslateModule],
  templateUrl: './heritage-detail.component.html',
  styleUrl: './heritage-detail.component.css'
})
export class HeritageDetailComponent implements OnInit {
  config!: HeritageDetailConfig;
  content!: HeritageContent;
  suggestedCooperatives: Site[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sitesService: SitesService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      const site = this.sitesService.getSiteById(id);
      if (site) {
        this.config = this.getConfigForType(site.type);

        // Listen for language changes and update content accordingly
        this.translate.onLangChange.subscribe(() => {
          this.loadTranslatedContent(id);
        });

        // Load initial content
        this.loadTranslatedContent(id);

        // Load suggested cooperatives
        this.suggestedCooperatives = this.getRandomSites(3, id);
      }
    });
  }

  private async loadTranslatedContent(id: string) {
    const currentLang = this.translate.currentLang || 'en';
    const translatedContent = await this.sitesService.getTranslatedSiteContent(id, currentLang);
    if (translatedContent) {
      this.content = translatedContent;
    }
  }

  private getConfigForType(type: 'tangible' | 'intangible'): HeritageDetailConfig {
    if (type === 'tangible') {
      return {
        type: 'tangible',
        title: 'List of Tangible<br>Cooperative<br>Cultural Heritage',
        subtitle: 'Explore the cooperative traditions, practices, <br>and knowledge recognized worldwide',
        gradientBackground: 'linear-gradient(to right, #7a004a, #7a004a)',
        primaryColor: 'text-[#7a004a]',
        secondaryColor: 'text-[#ff7a00]',
        textColor: 'text-gray-700',
        bgColor: 'bg-gray-100',
        borderColor: 'border-l-[#7a004a]',
        buttonBg: 'bg-gradient-to-r from-[#7a004a] to-[#c7007f] text-white',
        buttonHover: 'hover:brightness-110'
      };
    } else {
      return {
        type: 'intangible',
        title: 'List of Intangible<br>Cooperative<br>Cultural Heritage',
        subtitle: 'Explore the cooperative traditions, practices, <br>and knowledge recognized worldwide',
        gradientBackground: 'linear-gradient(to right, #6ec1e4, #fceabb)',
        primaryColor: 'text-[#5D737E]',
        secondaryColor: 'text-[#FFB347]',
        textColor: 'text-gray-600',
        bgColor: 'bg-gray-50',
        borderColor: 'border-l-[#FFD700]',
        buttonBg: 'bg-gradient-to-r from-[#FFD700] to-[#FFE87C] text-gray-800',
        buttonHover: 'hover:brightness-105'
      };
    }
  }

  navigateToCooperative(id: string) {
    const route = this.config.type === 'tangible' ? 'aboutTangiblePage' : 'aboutInTangiblePage';
    this.router.navigate([`/${route}`, id]);
  }

  private getRandomSites(count: number, excludeId: string): Site[] {
    const allSites = this.sitesService.getSites();
    const availableSites = allSites.filter(site => site.id !== excludeId);
    const shuffled = availableSites.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
}