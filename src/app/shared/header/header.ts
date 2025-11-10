import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { filter, Subscription } from 'rxjs';
import { HeritageService } from '../../services/heritage.service';
import { HeritageCard } from '../../components/heritage/heritage-card.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule, FormsModule, TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
  standalone: true,
})
export class Header implements OnInit, OnDestroy {
  isHome = false;
  isMenuOpen = false;
  dropdownOpen = false;
  criteriaDropdownOpen = false;
  isSearchOpen = false;
  isMobileSearchOpen = false;
  isMobileLanguageOpen = false;
  searchQuery = '';
  filteredResults: HeritageCard[] = [];
  isHeaderHidden = false;

  constructor(
    private router: Router,
    private heritageService: HeritageService,
    private cdr: ChangeDetectorRef,
    private translate: TranslateService
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.isHome = event.urlAfterRedirects === '/' || event.url === '/home';
      });
  }

  ngOnInit(): void {
    this.setupScrollListener();
  }

  ngOnDestroy(): void {
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  closeDropdown() {
    this.dropdownOpen = false;
  }

  toggleCriteriaDropdown() {
    this.criteriaDropdownOpen = !this.criteriaDropdownOpen;
  }

  closeCriteriaDropdown() {
    this.criteriaDropdownOpen = false;
  }

  toggleMobileSearch() {
    this.isMobileSearchOpen = !this.isMobileSearchOpen;
    if (!this.isMobileSearchOpen) {
      this.searchQuery = '';
      this.filteredResults = [];
    }
  }

  toggleMobileLanguage() {
    this.isMobileLanguageOpen = !this.isMobileLanguageOpen;
  }

  closeMobileLanguage() {
    this.isMobileLanguageOpen = false;
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
    }
    else {
      this.filteredResults = [];
    }
  }

  selectResult(card: HeritageCard) {
    this.router.navigate(['/tangible'], { queryParams: { search: card.title } });
    this.toggleSearch();
  }

  private setupScrollListener() {
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Hide header when scrolling down, show when near top (within 50px)
      this.isHeaderHidden = scrollTop > 50;
    });
  }

}
