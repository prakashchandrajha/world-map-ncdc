import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, ChangeDetectorRef, HostListener, ElementRef } from '@angular/core';
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
  isSearchOpen = false;
  isMobileSearchOpen = false;
  isMobileLanguageOpen = false;
  isLanguageDropdownOpen = false;
  searchQuery = '';
  filteredResults: HeritageCard[] = [];
  isHeaderHidden = false;

  constructor(
    private router: Router,
    private heritageService: HeritageService,
    private cdr: ChangeDetectorRef,
    private translate: TranslateService,
    private elementRef: ElementRef
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

  toggleLanguageDropdown() {
    this.isLanguageDropdownOpen = !this.isLanguageDropdownOpen;
  }

  closeLanguageDropdown() {
    this.isLanguageDropdownOpen = false;
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

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isSearchOpen = false;
      this.isLanguageDropdownOpen = false;
      this.isMobileSearchOpen = false;
      this.isMobileLanguageOpen = false;
    }
  }

  private setupScrollListener() {
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Hide header when scrolling down, show when near top (within 50px)
      this.isHeaderHidden = scrollTop > 50;
    });
  }

}
