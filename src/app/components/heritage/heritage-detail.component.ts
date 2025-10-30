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

@Component({
  selector: 'app-heritage-detail',
  imports: [CommonModule, Banner],
  templateUrl: './heritage-detail.component.html',
  styleUrl: './heritage-detail.component.css'
})
export class HeritageDetailComponent implements OnInit {
  config!: HeritageDetailConfig;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.config = this.route.snapshot.data['config'];
  }
}