import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Banner } from "../../shared/banner/banner";
import { AboutService } from '../../services/about.service';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule, Banner, RouterLink, TranslateModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements OnInit, OnDestroy {
  faqs: any[] = [];

  constructor(
    private aboutService: AboutService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.faqs = this.aboutService.getFaqs();
  }

  ngOnDestroy(): void {
  }

}
