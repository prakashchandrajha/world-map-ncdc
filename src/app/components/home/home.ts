import { TranslationService } from '../../services/translation.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { WorldMapComponent } from "../world-map/world-map.component";
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HomeService } from '../../services/home.service';

interface HeritageSection {
  title: string;
  image: string;
  shortText: string;
  fullText: string;
}

@Component({
  selector: 'app-home',
  imports: [WorldMapComponent,CommonModule,RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  cards: any[] = [];

 inTangibleButtons: string[] = [];

  tangibleButtons: string[] = [];
  sections: any[] = [];
  selectedSection: any = null;
  selectedCard: any = null;
  services2: any[] = [];

  private languageSubscription: Subscription = new Subscription();

  constructor(private homeService: HomeService, private translationService: TranslationService) {}

  ngOnInit(): void {
    // Load data from service (DRY)
    this.cards = this.homeService.getHomeCards();
    this.tangibleButtons = this.homeService.getTangibleButtons();
    this.inTangibleButtons = this.homeService.getInTangibleButtons();
    this.sections = this.homeService.getSectionData();
     // ✅ Load your new DRY services for "Principles for Identifying Cooperative Cultural Heritage"
    this.services2 = this.homeService.getPrinciplesServices();

    // Force re-render when language changes
    this.languageSubscription = this.translationService.currentLanguage$.subscribe(() => {
      // Trigger change detection for template updates
    });
  }

  ngOnDestroy(): void {
    this.languageSubscription.unsubscribe();
  }

  translate(key: string): string {
    return this.translationService.translate(key);
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




  selectedSection2: any = null;

  openModal2(service: any) {
    this.selectedSection = service;
  }

  closeModal2() {
    this.selectedSection = null;
  }

  // ✅ Close modal when clicking outside
  closeModalOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('fixed')) {
      this.closeModal();
    }
  }
  isPrinciplesModalOpen = false;

  openPrinciplesModal() {
    this.isPrinciplesModalOpen = true;
  }

  closePrinciplesModal() {
    this.isPrinciplesModalOpen = false;
  }


   // ✅ Modal controls
  selectedPrinciple: any = null;
  modalText: string = '';



  openModal3(service: any) {
    this.selectedPrinciple = service;
    this.modalText = this.homeService.getPrinciplesText(service.title);
  }

  closeModal3() {
    this.selectedPrinciple = null;
    this.modalText = '';
  }

  closeModalOutside3(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('fixed')) {
      this.closeModal();
    }
  }
}
