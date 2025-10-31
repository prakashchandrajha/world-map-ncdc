import { Injectable } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
}

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  getFaqs(): FaqItem[] {
    return [
      {
        question: 'The Vision for the Cooperative Cultural Heritage',
        answer: `The ICA's ambitious initiative to establish a Cooperative Cultural Heritage registration program represents a recognition of the cooperative movement's enduring legacy and its unique contribution to global human history and, through its continuous service, to sustainable development. This initiative aims to systematically identify, document, and safeguard the tangible and intangible manifestations of cooperative principles across all continents.`
      },
      {
        question: 'What is the Cooperative Cultural Heritage?',
        answer: `The Cooperative Cultural Heritage List aims to recognize and preserve the most meaningful elements of cooperative heritage, ensuring that future generations can learn from and build upon them. Being included on this list highlights a site, settlement, tradition, or institution as a living example of the cooperative spirit — one that continues to offer valuable lessons in today's fast-changing world.`
      },
      {
        question: 'Why a Cooperative Cultural Heritage List?',
        answer: `lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
      },
      {
        question: 'What is the ICA?',
        answer: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
      },
      {
        question: 'The building process',
        answer: `lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
      }
    ];
  }
}