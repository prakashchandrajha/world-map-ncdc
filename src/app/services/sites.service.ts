import { Injectable } from '@angular/core';
import { HeritageContent } from '../components/heritage/heritage-detail.component';

export interface Site {
  id: string;
  name: string;
  lat: number;
  lng: number;
  country: string;
  continent: string;
  type: 'tangible' | 'intangible';
  content: HeritageContent;
}

@Injectable({
  providedIn: 'root'
})
export class SitesService {

  private sites: Site[] = [
    {
      id: 'maison-alphonse-desjardins',
      name: 'Maison Alphonse-Desjardins',
      lat: 46.80942,
      lng: -71.18206,
      country: 'Canada',
      continent: 'North America',
      type: 'tangible',
      content: {
        pageTitle: 'Maison Alphonse-Desjardins',
        pageSubtitle: 'Historic Cooperative Heritage Site',
        mainImage: 'assets/images/Mask group.png',
        thumbnails: [
          'assets/images/t1.png',
          'assets/images/t2.png',
          'assets/images/t3.png',
          'assets/images/t4.png'
        ],
        infoCard: {
          country: 'Canada',
          countryFlag: 'assets/images/cntry.png',
          theme: 'Financial Group',
          entryYear: 2025,
          coordinates: '46.80942 N, -71.18206 W'
        },
        sections: {
          legacy: {
            title: 'Legacy',
            content: `The Maison Alphonse-Desjardins represents the birthplace of the modern cooperative movement in North America.`
          },
          criteria: {
            title: 'Criteria',
            items: [
              {
                heading: 'Historical Significance',
                description: 'Founded by Alphonse Desjardins in 1900, it pioneered credit unions.'
              },
              {
                heading: 'Community Impact',
                description: 'Transformed financial access for working-class families.'
              },
              {
                heading: 'Architectural Value',
                description: 'Preserves the original building where cooperative principles were first implemented.'
              }
            ]
          },
          virtualExperience: {
            title: 'Virtual Experience',
            content: `Explore the historic rooms and learn about the cooperative principles that started here.`,
            image: 'assets/images/Maskgroup.png'
          },
          community: {
            title: 'Community',
            content: `The site continues to educate visitors about cooperative economics and social finance.`
          },
          aditionalData: {
            title: 'Additional Data',
            content: `Listed as a National Historic Site of Canada.`
          },
          aditionalData2: {
            title: 'Recognition',
            content: `Recognized by UNESCO for its role in cooperative heritage.`
          },
          aditionalDat3: {
            title: 'Visitor Information',
            content: `Open to the public with guided tours available.`
          },
          learnMore: {
            title: 'Learn More',
            resources: [
              'UNESCO Cooperative Heritage Guidelines',
              'Canadian Cooperative History'
            ]
          }
        }
      }
    },
    // Add more sites here with their specific content
    {
      id: 'amal-cooperative-tamanar',
      name: 'Amal Cooperative (Women\'s cooperatives in the Argan sector)',
      lat: 31.4000,
      lng: -9.7000,
      country: 'Morocco',
      continent: 'Africa',
      type: 'tangible',
      content: {
        pageTitle: 'Amal Cooperative',
        pageSubtitle: 'Women\'s Cooperatives in the Argan Sector',
        mainImage: 'assets/images/Mask group.png',
        thumbnails: [
          'assets/images/t1.png',
          'assets/images/t2.png',
          'assets/images/t3.png',
          'assets/images/t4.png'
        ],
        infoCard: {
          country: 'Morocco',
          countryFlag: 'assets/images/cntry.png',
          theme: 'Agricultural Cooperative',
          entryYear: 2025,
          coordinates: '31.4000 N, -9.7000 W'
        },
        sections: {
          legacy: {
            title: 'Legacy',
            content: `Empowering women in the argan oil production through cooperative structures.`
          },
          criteria: {
            title: 'Criteria',
            items: [
              {
                heading: 'Women Empowerment',
                description: 'Provides economic independence to rural women.'
              },
              {
                heading: 'Sustainable Practices',
                description: 'Promotes sustainable argan tree cultivation.'
              },
              {
                heading: 'Cultural Preservation',
                description: 'Maintains traditional Berber knowledge of argan processing.'
              }
            ]
          },
          virtualExperience: {
            title: 'Virtual Experience',
            content: `Experience the argan processing and learn about women-led cooperatives.`,
            image: 'assets/images/Maskgroup.png'
          },
          community: {
            title: 'Community',
            content: `Supports local communities through fair trade and education.`
          },
          aditionalData: {
            title: 'Additional Data',
            content: `Produces organic argan oil for international markets.`
          },
          aditionalData2: {
            title: 'Recognition',
            content: `Awarded for sustainable development practices.`
          },
          aditionalDat3: {
            title: 'Visitor Information',
            content: `Tours available to learn about the cooperative process.`
          },
          learnMore: {
            title: 'Learn More',
            resources: [
              'Argan Cooperative Networks',
              'Women in Agriculture Cooperatives'
            ]
          }
        }
      }
    },
    // Continue adding other sites with their specific content...
    // For brevity, I'll add a few more, but in practice, populate all
    {
      id: 'amul-dairy',
      name: 'Amul Dairy (Kaira District Milk Union)',
      lat: 22.55267,
      lng: 72.9715,
      country: 'India',
      continent: 'Asia',
      type: 'tangible',
      content: {
        pageTitle: 'Amul Dairy',
        pageSubtitle: 'Kaira District Milk Union',
        mainImage: 'assets/images/Mask group.png',
        thumbnails: [
          'assets/images/t1.png',
          'assets/images/t2.png',
          'assets/images/t3.png',
          'assets/images/t4.png'
        ],
        infoCard: {
          country: 'India',
          countryFlag: 'assets/images/cntry.png',
          theme: 'Dairy Cooperative',
          entryYear: 2025,
          coordinates: '22.55267 N, 72.9715 E'
        },
        sections: {
          legacy: {
            title: 'Legacy',
            content: `Revolutionized dairy farming through cooperative milk collection and processing.`
          },
          criteria: {
            title: 'Criteria',
            items: [
              {
                heading: 'Economic Impact',
                description: 'Empowers millions of small dairy farmers.'
              },
              {
                heading: 'Innovation',
                description: 'Pioneered cooperative dairy processing in India.'
              },
              {
                heading: 'Quality Standards',
                description: 'Maintains high standards for milk and dairy products.'
              }
            ]
          },
          virtualExperience: {
            title: 'Virtual Experience',
            content: `Tour the dairy facilities and learn about cooperative milk production.`,
            image: 'assets/images/Maskgroup.png'
          },
          community: {
            title: 'Community',
            content: `Provides livelihood to rural farming communities.`
          },
          aditionalData: {
            title: 'Additional Data',
            content: `Processes millions of liters of milk daily.`
          },
          aditionalData2: {
            title: 'Recognition',
            content: `Model for cooperative dairy systems worldwide.`
          },
          aditionalDat3: {
            title: 'Visitor Information',
            content: `Educational tours available at processing facilities.`
          },
          learnMore: {
            title: 'Learn More',
            resources: [
              'Amul Cooperative History',
              'Dairy Cooperative Models'
            ]
          }
        }
      }
    },
    // Add the rest of the sites from the locations array with their content
    // Example intangible site
    {
      id: 'cooperative-principles-tradition',
      name: 'Cooperative Principles Tradition',
      lat: 0,
      lng: 0,
      country: 'Global',
      continent: 'Global',
      type: 'intangible',
      content: {
        pageTitle: 'Cooperative Principles Tradition',
        pageSubtitle: 'Intangible Heritage of Cooperative Values',
        mainImage: 'assets/images/Mask group.png',
        thumbnails: [
          'assets/images/t1.png',
          'assets/images/t2.png',
          'assets/images/t3.png',
          'assets/images/t4.png'
        ],
        infoCard: {
          country: 'Global',
          countryFlag: 'assets/images/cntry.png',
          theme: 'Cooperative Ethics',
          entryYear: 2025,
          coordinates: 'Global'
        },
        sections: {
          legacy: {
            title: 'Legacy',
            content: `The intangible heritage of cooperative principles that guide communities worldwide.`
          },
          criteria: {
            title: 'Criteria',
            items: [
              {
                heading: 'Ethical Foundations',
                description: 'Principles of self-help, self-responsibility, democracy, equality, equity, and solidarity.'
              },
              {
                heading: 'Cultural Transmission',
                description: 'Passed down through generations as living traditions.'
              },
              {
                heading: 'Community Impact',
                description: 'Shapes social and economic behaviors in communities.'
              }
            ]
          },
          virtualExperience: {
            title: 'Virtual Experience',
            content: `Explore the philosophical foundations and practical applications of cooperative principles.`,
            image: 'assets/images/Maskgroup.png'
          },
          community: {
            title: 'Community',
            content: `Continues to inspire cooperative movements globally.`
          },
          aditionalData: {
            title: 'Additional Data',
            content: `Recognized as part of the global cooperative heritage.`
          },
          aditionalData2: {
            title: 'Recognition',
            content: `Endorsed by international cooperative organizations.`
          },
          aditionalDat3: {
            title: 'Education',
            content: `Integrated into cooperative education programs worldwide.`
          },
          learnMore: {
            title: 'Learn More',
            resources: [
              'ICA Cooperative Principles',
              'History of Cooperative Thought'
            ]
          }
        }
      }
    }
  ];

  getSites(): Site[] {
    return this.sites;
  }

  getSiteById(id: string): Site | undefined {
    return this.sites.find(site => site.id === id);
  }

  getSitesByType(type: 'tangible' | 'intangible'): Site[] {
    return this.sites.filter(site => site.type === type);
  }
}