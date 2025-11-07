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
        pageTitle: 'Maison Alphonce-Desjardins',
        pageSubtitle: 'Preserving the Spirit of Cooperation: The Alphonse Desjardins Historical Society',
        mainImage: 'assets/images/Mask group.png',
        thumbnails: [
          'assets/images/sites_files/sub-icon/Alphonce-Desjardins1.png',
          'assets/images/sites_files/sub-icon/Alphonce-Desjardins2.png',
          'assets/images/sites_files/sub-icon/Alphonce-Desjardins3.png',
          'assets/images/sites_files/sub-icon/Alphonce-Desjardins4.png'
        ],
        infoCard: {
          country: 'Canada',
          countryFlag: 'assets/images/sites_files/country-img/canada.png',
          theme: 'Financial Group',
          entryYear: 2025,
          coordinates: '46.80942 N, -71.18206 W'
        },
        sections: {
          legacy: {
            title: 'A Legacy of Vision and Community',
            content: `In 1979, officers of the Desjardins Group took a visionary step to ensure that the roots of the cooperative movement in North America would never fade from memory. They founded the Alphonse Desjardins Historical Society, an institution dedicated to preserving and celebrating the remarkable heritage of Alphonse and Dorimène Desjardins, the founders of the first credit union in North America.

The Society’s mission is both simple and profound: “to safeguard and promote the history and heritage of the Desjardins Group and its founder, for the benefit of current and future generations.” More than a historical archive, it is a living bridge connecting the ideals of cooperation, solidarity, and financial self-empowerment that shaped the movement to the realities of today’s world.`
          },
          criteria: {
            title: 'Criteria Considered',
            items: [
              {
                heading: 'Criterion 1. Historical Significance',
                description: 'Through exhibitions, educational programs, guided tours, and multimedia storytelling, the Society brings history to life. It invites visitors, students, and cooperators to engage directly with the ideas and human values that inspired Desjardins’ model  values that remain as relevant today as they were in 1900.'
              },
              {
                heading: 'Criterion 7. Research and Knowledge Sharing',
                description: 'Dedicated researchers delve into the origins and evolution of the Desjardins Group, tracing its expansion from a modest savings cooperative in Lévis, Quebec, into one of the world’s leading cooperative financial institutions. Their work not only illuminates the past but also provides valuable insight into how cooperation and ethical finance can thrive in the modern economy.'
              },
              {
                heading: 'Criterion 10. Preservation and Safeguarding',
                description: 'The Society meticulously preserves artifacts, documents, photographs, and personal belongings related to Alphonse and Dorimène Desjardins, as well as the cooperative pioneers who followed them. These materials tell the story of how one couple’s determination to offer fair and accessible financial services sparked a movement that continues to shape communities across Canada and beyond.'
              }
            ]
          },
          virtualExperience: {
            title: 'Step Into History: A Virtual Experience',
            content: `For those unable to visit in person, the Society offers an engaging 15-minute virtual tour of the birthplace of cooperation. This online experience immerses visitors in the world of Alphonse and Dorimène Desjardins, allowing them to explore the very rooms where ideas of mutual aid, trust, and economic democracy were first shaped.

Through this digital journey, one can witness history as though standing alongside the founders themselves  hearing their story, seeing their environment, and understanding how one couple’s vision laid the groundwork for an entire cooperative movement.`,
            image: 'assets/images/Maskgroup.png'
          },
          community: {
            title: 'Serving a Broad Community',
            content: `The services of the Alphonse Desjardins Historical Society extend well beyond the walls of its archives. They are available to Desjardins Group officers, employees, and members, as well as to cooperators in Canada and abroad  and indeed to the general public. Whether one is a researcher exploring the roots of cooperative banking or a visitor seeking inspiration, the Society offers a wealth of knowledge and a warm invitation to discover how ordinary people, united by shared purpose, can transform their communities.`
          },
          aditionalData: {
            title: 'Why It Matters Today',
            content: `The Alphonse Desjardins Historical Society is far more than a custodian of the past. It is a reminder that the cooperative model  rooted in trust, solidarity, and shared responsibility  remains one of the most humane and resilient approaches to economic life. In a world often defined by competition and inequality, the Society keeps alive the message that financial systems can and should serve people first.

Through its commitment to education, preservation, and interpretation, the Society ensures that the legacy of Alphonse and Dorimène Desjardins continues to inspire new generations to believe in the enduring power of cooperation.`
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
              'PDF report on Maison Alphonce Desjardins',
              'virtual tour'
              
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
    // Intangible sites
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
    },
    {
      id: 'cooperative-education-practices',
      name: 'Cooperative Education Practices',
      lat: 0,
      lng: 0,
      country: 'Global',
      continent: 'Global',
      type: 'intangible',
      content: {
        pageTitle: 'Cooperative Education Practices',
        pageSubtitle: 'Knowledge Transmission in Cooperative Movements',
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
          theme: 'Educational Heritage',
          entryYear: 2025,
          coordinates: 'Global'
        },
        sections: {
          legacy: {
            title: 'Legacy',
            content: `Traditional methods of teaching cooperative values and practices through generations.`
          },
          criteria: {
            title: 'Criteria',
            items: [
              {
                heading: 'Knowledge Preservation',
                description: 'Methods for transmitting cooperative knowledge and skills.'
              },
              {
                heading: 'Community Learning',
                description: 'Participatory education approaches in cooperative communities.'
              },
              {
                heading: 'Cultural Continuity',
                description: 'Maintaining cooperative traditions through education.'
              }
            ]
          },
          virtualExperience: {
            title: 'Virtual Experience',
            content: `Experience traditional cooperative teaching methods and learning approaches.`,
            image: 'assets/images/Maskgroup.png'
          },
          community: {
            title: 'Community',
            content: `Supports ongoing cooperative development through education.`
          },
          aditionalData: {
            title: 'Additional Data',
            content: `Essential for sustaining cooperative movements.`
          },
          aditionalData2: {
            title: 'Recognition',
            content: `Recognized as vital intangible heritage.`
          },
          aditionalDat3: {
            title: 'Practice',
            content: `Continues in cooperative training programs worldwide.`
          },
          learnMore: {
            title: 'Learn More',
            resources: [
              'Cooperative Education Methods',
              'Knowledge Transmission in Cooperatives'
            ]
          }
        }
      }
    },
    {
      id: 'cooperative-festivals-traditions',
      name: 'Cooperative Festivals and Traditions',
      lat: 0,
      lng: 0,
      country: 'Global',
      continent: 'Global',
      type: 'intangible',
      content: {
        pageTitle: 'Cooperative Festivals and Traditions',
        pageSubtitle: 'Cultural Celebrations of Cooperative Heritage',
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
          theme: 'Cultural Celebrations',
          entryYear: 2025,
          coordinates: 'Global'
        },
        sections: {
          legacy: {
            title: 'Legacy',
            content: `Festivals and traditions that celebrate cooperative achievements and values.`
          },
          criteria: {
            title: 'Criteria',
            items: [
              {
                heading: 'Community Celebration',
                description: 'Events that bring cooperative communities together.'
              },
              {
                heading: 'Cultural Expression',
                description: 'Traditional ways of expressing cooperative identity.'
              },
              {
                heading: 'Knowledge Sharing',
                description: 'Opportunities for sharing cooperative experiences.'
              }
            ]
          },
          virtualExperience: {
            title: 'Virtual Experience',
            content: `Participate in virtual cooperative festivals and cultural celebrations.`,
            image: 'assets/images/Maskgroup.png'
          },
          community: {
            title: 'Community',
            content: `Strengthens cooperative identity and solidarity.`
          },
          aditionalData: {
            title: 'Additional Data',
            content: `Includes harvest festivals, cooperative anniversaries, and cultural events.`
          },
          aditionalData2: {
            title: 'Recognition',
            content: `Celebrated as living cooperative heritage.`
          },
          aditionalDat3: {
            title: 'Participation',
            content: `Open to cooperative members and the wider community.`
          },
          learnMore: {
            title: 'Learn More',
            resources: [
              'Cooperative Cultural Festivals',
              'Traditional Cooperative Celebrations'
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