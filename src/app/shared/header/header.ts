import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { filter } from 'rxjs';
import { HeritageService } from '../../services/heritage.service';
import { HeritageCard } from '../../components/heritage/heritage-card.component';
import { TranslationService } from '../../services/translation.service';


@Component({
  selector: 'app-header',
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  isHome = false;
  isMenuOpen = false;
  dropdownOpen = false;
  isSearchOpen = false;
  searchQuery = '';
  filteredResults: HeritageCard[] = [];
  currentLanguage = 'en';

  constructor(private router: Router, private heritageService: HeritageService, private translationService: TranslationService) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.isHome = event.urlAfterRedirects === '/' || event.url === '/home';
      });

    this.translationService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  closeDropdown() {
    this.dropdownOpen = false;
  }

  toggleSearch() {
    this.isSearchOpen = !this.isSearchOpen;
    if (!this.isSearchOpen) {
      this.searchQuery = '';
      this.filteredResults = [];
    }
  }

  onSearchInput() {
    if (this.searchQuery.trim()) {
      const allTangible = this.heritageService.getTangibleCards();
      this.filteredResults = allTangible.filter(card =>
        card.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredResults = [];
    }
  }

  selectResult(card: HeritageCard) {
    this.router.navigate(['/tangible'], { queryParams: { search: card.title } });
    this.toggleSearch();
  }

  switchLanguage(lang: string) {
    this.translationService.loadLanguage(lang);
  }

  translate(key: string): string {
    return this.translationService.translate(key);
  }
}
