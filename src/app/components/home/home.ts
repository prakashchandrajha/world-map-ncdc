import { Component, OnInit, OnDestroy } from '@angular/core';
import { WorldMapComponent } from "../world-map/world-map.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HomeService } from '../../services/home.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [WorldMapComponent,CommonModule,RouterLink,TranslateModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {
  cards: any[] = [];
  sections: any[] = [];
  selectedSection: any = null;
  selectedCard: any = null;

  currentImage = '1st.png';
  imageSequence = ['1st.png', '2nd.png', '3rd.png', '4th.png'];
  isAnimating = true;
  isImageVisible = true;

    isReadMoreModalOpen = false;


  constructor(
    private homeService: HomeService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    // Listen for language changes and reload data accordingly
    this.translate.onLangChange.subscribe(() => {
      this.loadTranslatedData();
    });

    // Load initial data
    this.loadTranslatedData();
    this.startImageSequence();
  }

  private async loadTranslatedData() {
    const currentLang = this.translate.currentLang || 'en';
    this.cards = await this.homeService.getTranslatedHomeCards(currentLang);
    this.sections = await this.homeService.getTranslatedSectionData(currentLang);
  }

  ngOnDestroy(): void {
  }

  // Handles modal open/close
  openModal(section: any): void {
    this.selectedSection = section;
  }

  closeModal(): void {
    this.selectedSection = null;
  }

  openCardModal(card: any): void {
    this.selectedCard = card;
  }

  closeCardModal(): void {
    this.selectedCard = null;
  }


   startImageSequence() {
  let index = 0;
  const interval = setInterval(() => {
    index++;
    if (index < this.imageSequence.length) {
      if (index >= 2) { // For 3rd and 4th image (index 2 and 3)
        this.currentImage = this.imageSequence[index];
      } else {
        this.isImageVisible = false; // Hide the image
        setTimeout(() => {
          this.currentImage = this.imageSequence[index];
          this.isImageVisible = true; // Show the new image, re-triggering animation
        }, 200); // A small delay to allow DOM update
      }
      
      // Stop when we reach the last image
      if (index === this.imageSequence.length - 1) {
        this.isAnimating = false;
        clearInterval(interval);
      }
    }
  }, 800); // Change image every 800ms
}

  closeModalOutside3(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('fixed')) {
      this.closeModal();
    }
  }


  openReadMoreModal(): void {
    this.isReadMoreModalOpen = true;
  }

  // Close modal
  closeReadMoreModal(): void {
    this.isReadMoreModalOpen = false;
  }

  // Close modal when clicking outside
  closeReadMoreModalOutside(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.classList.contains('fixed')) {
      this.isReadMoreModalOpen = false;
    }
  }
}
