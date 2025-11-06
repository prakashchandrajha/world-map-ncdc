import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Banner } from '../../shared/banner/banner';

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
    learnMore: { title: string; resources: string[] };
  };
}

@Component({
  selector: 'app-heritage-detail',
  imports: [CommonModule, Banner],
  templateUrl: './heritage-detail.component.html',
  styleUrl: './heritage-detail.component.css'
})
export class HeritageDetailComponent implements OnInit {
  config!: HeritageDetailConfig;
  content!: HeritageContent;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const data = this.route.snapshot.data;
    this.config = data['config'];
    this.content = data['content'];
  }
}