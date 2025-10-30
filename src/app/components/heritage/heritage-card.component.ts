import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

export interface HeritageCard {
  img: string;
  badge: string;
  countryName: string;
  haritageData: string;
  btn: string;
  title: string;
  desc?: string;
}

@Component({
  selector: 'app-heritage-card',
  imports: [RouterLink, CommonModule],
  templateUrl: './heritage-card.component.html',
  styleUrl: './heritage-card.component.css'
})
export class HeritageCardComponent {
  @Input() card!: HeritageCard;
  @Input() desc?: string;
}