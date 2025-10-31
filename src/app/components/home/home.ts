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

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    // Load data from service (DRY)
    this.cards = this.homeService.getHomeCards();
    this.tangibleButtons = this.homeService.getTangibleButtons();
    this.inTangibleButtons = this.homeService.getInTangibleButtons();
    this.sections = this.homeService.getSectionData();
     // ✅ Load your new DRY services for "Principles for Identifying Cooperative Cultural Heritage"
    this.services2 = this.homeService.getPrinciplesServices();
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


   services = [
    {
      title: 'International Cooperative Identity',
      icon: '../../../assets/images/handshake.png',
      moreText: `
        <p>A thirteen point set of international standards on Cooperative Cultural Heritage was 
drawn up by the ICA Working Group on CCH in fall 2025. These standards, the first 
of its kind, will build on experiences through 2026, by which time, the ICA aims to 
list at least 50 CCH sites and 15 CCH intangible elements (through a separate set of 
criterions) from across all the regions, representing all ICA sectors, selected through a 
nomination process, open to the members of the ICA and their constituents. A unique 
ICA-CCH label will be granted to the selected sites that meet all the 13 criterions 
along with a Statement of Recognition, in a post launch (November 2025) exercise. 
</p>
      `,
    },
    {
      title: 'Cultural Significance and Legacy',
      icon: '../../../assets/images/military_tech.png',
      moreText: `
        <p>This represents the cultural impact and rich legacy left behind by cooperative movements in various communities.</p>
      `,
    },
    {
      title: 'Intergenerational Transmission',
      icon: '../../../assets/images/family_history.png',
      moreText: `
        <p>Cooperative knowledge and values are passed across generations, ensuring long-term sustainability and relevance.</p>
      `,
    },
    {
      title: 'Innovative and Inclusive Continuity',
      icon: '../../../assets/images/diamond.png',
      moreText: `
        <p>Innovation and inclusivity drive cooperative growth while maintaining fairness and shared purpose.</p>
      `,
    },
    {
      title: 'Unique Marque for Cooperatives Cultural Heritage',
      icon: '../../../assets/images/Group 50.png',
      moreText: `
        <p>This symbolizes unity, collaboration, and the shared strength that holds cooperatives together globally.</p>
      `,
    },
  ];

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
