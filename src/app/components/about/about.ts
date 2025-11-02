import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Banner } from "../../shared/banner/banner";
import { AboutService } from '../../services/about.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [CommonModule, Banner,RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  faqs: any[] = [];

  constructor(private aboutService: AboutService) {
    this.faqs = this.aboutService.getFaqs();
  }
}
