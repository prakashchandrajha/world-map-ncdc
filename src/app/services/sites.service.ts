import { Injectable } from '@angular/core';
import { HeritageContent } from '../components/heritage/heritage-detail.component';

export interface Site {
  id: string;
  name: string;
  siteName:string;
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
      siteName: 'Maison Alphonce-Desjardins',
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
    {
      id: 'maison-alphonse-desjardins',
      name: 'Maison Alphonse-Desjardins',
      siteName:'The Square of Flowers and Solidarity',
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