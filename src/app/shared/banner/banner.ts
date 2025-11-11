import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [CommonModule],
  templateUrl: './banner.html',
  styleUrl: './banner.css'
})
export class Banner {
 /** Background image for the banner */
  @Input() centerImage: string = 'assets/images/banner.png';

  /** Main text (supports <br>) */
  @Input() titleText: string = 'Cultural<br>Heritage of<br>Cooperativism';

  /** Secondary text (optional) */
  @Input() titleText2: string = '';
}
