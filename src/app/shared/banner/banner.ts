import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [CommonModule],
  templateUrl: './banner.html',
  styleUrl: './banner.css'
})
export class Banner {
/** Example: 'linear-gradient(to right, #7a004a, #520035, #1a0011)' */
  @Input() gradientBackground: string = 'linear-gradient(to right, #7a004a, #520035, #1a0011)';

  /** Example: '/assets/images/aaa.png' */
  @Input() centerImage: string = '/assets/images/aaa.png';

  /** Example: 'Cultural<br>Heritage of<br>Cooperativism' */
  @Input() titleText: string = 'Cultural<br>Heritage of<br>Cooperativism';

  /** Example: 'Cultural<br>Heritage of<br>Cooperativism' */
  @Input() titleText2: string = '';
}
