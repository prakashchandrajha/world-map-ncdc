import { Injectable } from '@angular/core';
import { HeritageContent } from '../components/heritage/heritage-detail.component';
import { TranslateService } from '@ngx-translate/core';

export interface Site {
  id: string;
  name: string;
  siteName:string;
  coopYear:number;
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

  constructor(private translate: TranslateService) {}

  private sites: Site[] = [
    // Canada Site
    {
      id: 'maison-alphonse-desjardins',
      name: 'Maison Alphonse-Desjardins',
      siteName: 'Maison Alphonce-Desjardins',
      coopYear: 2025,
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
          theme: 'Museum Celebrating Cooperatives',
          entryYear: 2025,
          coordinates: '46.80942, -71.18206'
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
                heading: 'Criterion 2. Connection to Cooperative Pioneers or Communities',
                description: 'Sites must demonstrate a tangible link to cooperative pioneers, enterprises, federations, or communities that shaped cooperative practice and identity.'
              },
              {
                heading: 'Criterion 6. Educational Mission',
                description: 'Sites shall actively promote cooperative literacy through exhibitions, archives, guided tours, and programmes that teach the ICA Statement on the Cooperative Identity.'
              },
              {
                heading: 'Criterion 9. Accessibility for All',
                description: 'Sites must guarantee accessibility to the public—physically, digitally, or through interpretive materials—and ensure inclusivity for all people regardless of age, gender, background, or ability.'
              }
            ]
          },
          virtualExperience: {
            title: 'Step Into History: A Virtual Experience',
            content: `For those unable to visit in person, the Society offers an engaging 15-minute virtual tour of the birthplace of cooperation. This online experience immerses visitors in the world of Alphonse and Dorimène Desjardins, allowing them to explore the very rooms where ideas of mutual aid, trust, and economic democracy were first shaped.

Through this digital journey, one can witness history as though standing alongside the founders themselves  hearing their story, seeing their environment, and understanding how one couple’s vision laid the groundwork for an entire cooperative movement.`,
            image: 'assets/images/Mask group.png'
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
            title: '',
            content: ``
          },
          aditionalDat3: {
            title: '',
            content: ``
          },
                aditionalDat4: {
        title: '',
        content: ``
      },
      aditionalDat5: {
        title: '',
        content: ``
      },
          learnMore: {
            title: 'Learn More',
            resources: [
              'https://www.desjardins.com/'
              
            ]
          }
        }
      }
    },
    // Brazil Site
    {
      id: 'theodor-amstad-monument',
      name: 'Monumento ao Cooperativismo: A Living Symbol in Nova Petrópolis, Brazil',
      siteName:'Monumento ao Cooperativismo: A Living Symbol in Nova Petrópolis, Brazil',
      coopYear: 2025,
      lat: -29.3804,
      lng: -51.1087,
      country: 'Brazil',
      continent: 'South America',
      type: 'tangible',
      content: {
        pageTitle: 'Monumento ao Cooperativismo: A Living Symbol in Nova Petrópolis, Brazil',
        pageSubtitle: 'A city celebrated as Brazil’s Capital Nacional do Cooperativismo (National Capital of Cooperativism)',
        mainImage: 'assets/images/sites_files/sub-icon/brazilM.png',
        thumbnails: [
          'assets/images/sites_files/sub-icon/brazil1.png',
          'assets/images/sites_files/sub-icon/brazil2.png',
          'assets/images/sites_files/sub-icon/brazil3.png',
          'assets/images/sites_files/sub-icon/brazil1.png'
        ],
        infoCard: {
          country: 'Brazil',
          countryFlag: 'assets/images/sites_files/country-img/brazil.png',
          theme: 'Early Worker Cooperative',
          entryYear: 2025,
          coordinates: '-29.3804, -51.1087'
        },
        sections: {
          legacy: {
            title: 'The Square of Flowers and Solidarity',
            content: `Tucked into the green heart of Nova Petrópolis, in Brazil’s picturesque Serra Gaúcha region, lies the Praça das Flores,a place where beauty, peace, and purpose intertwine. Amid the flowerbeds, trees, and gentle walkways stands a powerful emblem of shared human endeavour: the Monumento ao Cooperativismo.

Created by artist Gustavo Nagler, this striking sculpture depicts seven larger-than-life bronze figures, each carrying a symbolic stone. Together, they represent the collective effort that defines the cooperative spirit,a reminder that progress is achieved not by solitary strength, but by many hands working in unity.`
          },
          criteria: {
            title: 'Featured Criteria ',
            items: [
              {
                heading: 'Criterion 1. Historical Significance',
                description: 'Sites must be at least thirty (30) years old, preferably sixty (60), or directly associated with foundational events, milestones, or figures in the cooperative movement.'
              },
              {
                heading: 'Criterion 2. Connection to Cooperative Pioneers or Communities',
                description: 'Sites must demonstrate a tangible link to cooperative pioneers, enterprises, federations, or communities that shaped cooperative practice and identity.'
              },
              {
                heading: 'Criterion 3. Archival, Architectural, or Symbolic Value',
                description: 'Represents milestones in cooperative development. Preserves stories, traditions, or knowledge tied to cooperative evolution.'
              }
            ]
          },
          
          community: {
            title: 'A Tribute to Cooperation and History',
            content: `The monument holds deep meaning for Nova Petrópolis, a city celebrated as Brazil’s Capital Nacional do Cooperativismo (National Capital of Cooperativism). Inaugurated to commemorate the centenary of Brazil’s first credit union (1902–2002), the sculpture honours a legacy born in this very region,one rooted in solidarity, mutual aid, and community enterprise.

Each of the seven figures embodies one of the seven international cooperative principles: voluntary and open membership, democratic governance, member economic participation, autonomy and independence, education and training, cooperation among cooperatives, and concern for the community.

The monument is both art and manifesto,a visual declaration that cooperation is a human force built through shared labour and trust.`
          },
          virtualExperience: {
            title: 'The Lesson of Theodor Amstad',
            content: `The inspiration for Nagler’s work traces back to a story told by Theodor Amstad, the Swiss Jesuit priest and cooperative pioneer who founded Brazil’s first rural credit union in 1902. On 25 February 1900, Amstad offered a vivid metaphor that still echoes through Brazil’s cooperative culture:

“If a large stone blocks the path and twenty people try to move it one by one, they will fail; but if they act together under one guide, they will shift the stone and open the way for all.”

The Monumento ao Cooperativismo gives this metaphor physical form. The seven figures, straining together to lift a great stone, make tangible the essence of Amstad’s lesson: that cooperation is not theory but action,muscle, mind, and purpose moving as one.`,
            image: 'assets/images/sites_files/brazilbelowimg.png'
          },
          aditionalData: {
            title: 'A Journey Through the Square',
            content: `Visitors approaching the Praça das Flores are first drawn to the park’s serenity,its colourful blooms, quiet benches, and soft light filtering through trees. At the square’s heart, the monument rises in bronze and stone, commanding attention not through grandeur but through meaning.

The figures, representing different professions and walks of life, lift and balance the heavy stone in a moment of shared exertion. Their diversity underscores the cooperative principle of inclusiveness, while their unity captures the strength of common purpose. The sculpture tells a silent story of building, lifting, and freeing,an allegory for what the cooperative movement has always sought to do: raise burdens together and create space for collective progress.`
          },
          aditionalData2: {
            title: 'The Spirit of a City and Its People',
            content: `For Nova Petrópolis, the monument is more than an artwork,it is part of the city’s identity. Cooperation has shaped its institutions, schools, and economy since the arrival of German settlers in the late 19th century, whose community values gave rise to Brazil’s early mutual aid and credit associations.

Positioned in the city’s central square, the Monumento ao Cooperativismo ensures that the ideals of mutual help, democratic participation, and community solidarity remain visible in everyday life. School groups, visitors, and residents alike encounter it not as a distant relic, but as a living reminder of what binds them together.`
          },
          aditionalDat3: {
            title: 'A Symbol Still Relevant Today',
            content: `In an era often marked by competition, division, and isolation, the monument offers another vision: people leaning together, lifting together, walking together. It asserts that collective well-being grows from shared effort,that hope itself is a cooperative act.

Rooted in the migrations, settlements, and cooperative experiments that shaped southern Brazil in the late 19th and early 20th centuries, the spirit of cooperation remains as vital as ever. Nova Petrópolis’ Monumento ao Cooperativismo transforms that heritage into living form,an enduring invitation to build the future not alone, but together.`
          },
    aditionalDat4: {
        title: '',
        content: ``
      },
      aditionalDat5: {
        title: '',
        content: ``
      },
          learnMore: {
            title: 'Learn More',
            resources: [
            'https://www.novapetropolisturismo.com.br/pagina/o-que-fazer/atrativos-turisticos/monumento-ao-cooperativismo'
              
            ]
          }
        }
      }
    },
    // India Site
    {
      id: 'amul-dairy',
      name: 'Dairy Plants of Anand Milk United Limited (AMUL) and the Verghese Kurien Museum',
      siteName:'Dairy Plants of Anand Milk United Limited (AMUL) and the Verghese Kurien (Dairy) Museum,India',
      coopYear: 2025,
      lat: 22.55267,
      lng: 72.9715,
      country: 'India',
      continent: 'Asia',
      type: 'tangible',
      content: {
        pageTitle: 'Dairy Plants of Anand Milk United Limited (AMUL) and the Verghese Kurien (Dairy) Museum,India',
        pageSubtitle: 'The Amul Museum, Anand: A Living Chronicle of India’s Cooperative Spirit',
        mainImage: 'assets/images/sites_files/amulMain.png',
        thumbnails: [
          'assets/images/sites_files/sub-icon/amul1.png',
          'assets/images/sites_files/sub-icon/amul2.png',
          'assets/images/sites_files/sub-icon/amul3.png',
          'assets/images/sites_files/sub-icon/amul4.png'
        ],
        infoCard: {
          country: 'India',
          countryFlag: 'assets/images/sites_files/country-img/india.png',
          theme: 'Birthplace “White Revolution”',
          entryYear: 2025,
          coordinates: '22.55267, 72.9715'
        },
        sections: {
          legacy: {
            title: 'Where a Revolution Was Churned',
            content: `In the green heart of Anand, Gujarat, stands a building that tells one of India’s most extraordinary stories. The Amul Museum is not merely a gallery of exhibits it is a living tribute to the cooperative ideals that transformed a nation. Here, the intertwined narratives of India’s freedom struggle and milk revolution unfold side by side, showing how the dream of self-reliance found lasting expression in the cooperative movement.

Within its bright halls, the story of Amulborn of necessity and nurtured by solidaritycomes alive through immersive galleries, archival photographs, and audiovisual installations. Each display celebrates the spirit of ordinary milk producers who, united by trust and purpose, helped build one of the world’s most respected dairy cooperatives.`
          },
          criteria: {
            title: 'Featured Criteria ',
            items: [
              {
                heading: 'Criterion 3. Archival, Architectural, or Symbolic Value',
                description: 'Represents milestones in cooperative development. Preserves stories, traditions, or knowledge tied to cooperative evolution.'
              },
             {
                heading: 'Criterion 6. Educational Mission',
                description: 'Sites shall actively promote cooperative literacy through exhibitions, archives, guided tours, and programmes that teach the ICA Statement on the Cooperative Identity.'
              },
              {
                heading: 'Criterion 13. Networking and International Solidarity',
                description: 'Sites shall connect to cooperative networks—regional, national, and international—participating in exchanges, research, and cooperative tourism to strengthen global cooperative heritage.'
              }
            ]
          },
          
          community: {
            title: 'A Museum of People, Purpose, and Progress',
            content: `The Amul Museum’s exhibitions trace the rise of a movement that was as social as it was economic. The journey begins with the Kaira District Cooperative Milk Producers’ Union, established in 1946, when local farmers, frustrated by exploitation and middlemen, decided to take control of their livelihoods.

Under the visionary guidance of Tribhuvandas Patel and later Dr. Verghese Kurien, their collective effort gave birth to Amula brand that came to symbolize not just quality dairy products, but also India’s experiment in economic democracy.

Towering photographic panels and vintage memorabilia recall the early days of milk collection, processing, and distribution. Archival footage shows how a small union of farmers evolved into an industrial giant, powered by the same cooperative principles that fueled India’s struggle for independenceself-reliance, unity, and perseverance.`
          },
          virtualExperience: {
            title: 'A Tribute to the Hands Behind the Success',
            content: `At the heart of the museum lies a humble yet powerful dedicationto the half a million milk producers of Kaira District, whose collective strength turned Amul from a dream into a daily reality.

These men and women, many from small rural households, contributed not just milk but faith in a shared vision. Together, they built not merely an industry, but a movementone that continues to feed millions and sustain rural prosperity across the nation.

The museum’s audio-visual presentation (currently in Hindi) vividly captures this journey, celebrating the cooperative’s early struggles, innovations, and its rise as the symbol of India’s “White Revolution.”`,
            image: 'assets/images/sites_files/amulSubImg.jpg'
          },
          aditionalData: {
            title: 'Behind the Scenes: The Two-Hour Guided Tour',
            content: `A visit to Anand is incomplete without the two-hour guided tour of Amul’s butter and milk powder plants. Visitors witness firsthand the intricate process of transforming raw milk into finished productseach step a testament to precision, innovation, and cooperation.

From the rhythmic hum of the cleaning and standardisation lines to the seamless coordination of automated packaging units, every detail reflects the marriage of human labour and advanced technology. It is an experience that reveals how discipline, transparency, and teamwork sustain an enterprise of national scale.

Today, Amul operates 78 processing plants and handles over 280 lakh litres of milk each day, transported across India by a fleet of GPS-equipped tankers. Behind these numbers lies a human network of over 3.7 million small and medium-scale producerseach one part of the same story of shared prosperity and cooperative purpose.`
          },
          aditionalData2: {
            title: 'Honouring the Architect of the White Revolution',
            content: `The museum itself was inaugurated on 26 November 2000, a date chosen to mark the 80th birthday of Dr. Verghese Kurienthe man whose vision transformed India’s dairy landscape forever.

Known as the Father of the White Revolution and affectionately remembered as the Milkman of India, Dr. Kurien masterminded Operation Flood, often described as “the billion-litre idea.” This monumental programme turned India from a milk-deficient nation into the world’s largest producer of milk, reshaping both rural economies and national nutrition.

Dr. Kurien’s influence extended far beyond Amul. His pioneering cooperative model empowered millions of rural families and inspired similar initiatives worldwide. In recognition of his global leadership, he became the first recipient of the Rochdale Pioneers Award, the highest international honour in the field of cooperative enterprise.`
          },
          aditionalDat3: {
            title: 'A Legacy That Still Nourishes the Nation',
            content: `Every year, on 26 November, India celebrates National Milk Daya tribute to Dr. Kurien’s enduring legacy and to the movement he built. Within the museum, walls lined with photographs of dignitaries from India and abroad silently testify to the scale of Amul’s global impact.

Yet beyond the machinery, numbers, and accolades, the Amul Museum tells a more human story: of farmers who dared to unite, of a leader who taught them to dream, and of a country that learned that true progress flows not from competition, but from cooperation.

In Anand, the cradle of the White Revolution, that story continues to be toldnot in words alone, but in every drop of milk that nourishes the nation and every life it uplifts.`
          },

    aditionalDat4: {
        title: '',
        content: ``
      },
      aditionalDat5: {
        title: '',
        content: ``
      },
          learnMore: {
            title: 'Learn More',
            resources: [
              'https://amul.com/'
              
            ]
          }
        }
      }
    },
    // Switzerland Site
    {
      id: 'ilo-cooperative-geneva',
      name: 'International Labour Organization (ILO) Cooperative, Social and Solidarity Economy Unit',
      siteName:'International Labour Organization (ILO) Cooperative, Social and Solidarity Economy Unit, Geneva, Switzerland',
      coopYear: 2025,
      lat: 46.2268,
      lng: 6.1400,
      country: 'Switzerland',
      continent: 'Europe',
      type: 'tangible',
      content: {
        pageTitle: 'International Labour Organization (ILO) Cooperative, Social and Solidarity Economy Unit, Geneva, Switzerland',
        pageSubtitle: 'A Century of Global Cooperation and Shared Heritage.',
        mainImage: 'assets/images/sites_files/SwitzerlandMain.jpg',
        thumbnails: [
          'assets/images/sites_files/subImgSwitzerland.jpg',
          'assets/images/sites_files/SwitzerlandSubImg2.jpg',
          'assets/images/sites_files/SwitzerlandMain.jpg',
        ],
        infoCard: {
          country: 'Switzerland',
          countryFlag: 'assets/images/sites_files/country-img/Flag_of_Switzerland.svg',
          theme: 'International Tripartite Organization',
          entryYear: 2025,
          coordinates: '46.2268, 6.1400'
        },
        sections: {
          legacy: {
            title: 'A Century of Global Cooperation and Shared Heritage',
            content: `Few institutions have carried the spirit of cooperation into the international sphere as faithfully and persistently as the International Labour Organization’s Cooperative and Social and Solidarity Economy (SSE) Unit. Established in 1920, only a year after the founding of the ILO itself, this small but pioneering office has, for over a century, safeguarded and promoted the values of democracy, self-help, solidarity, and Self responsibility as guiding principles of work and development.`
          },
          criteria: {
            title: 'Featured Criteria ',
            items: [
              {
                heading: 'Criterion 1. Historical Significance',
                description: 'Sites must be at least thirty (30) years old, preferably sixty (60), or directly associated with foundational events, milestones, or figures in the cooperative movement.'
              },
              {
                heading: 'Criterion 4. Active Cooperative Connection',
                description: 'Sites must either remain in operation as cooperatives or be explicitly dedicated to preserving and interpreting cooperative history.'
              },
              {
                heading: 'Criterion 13. Networking and International Solidarity',
                description: 'Sites shall connect to cooperative networks—regional, national, and international—participating in exchanges, research, and cooperative tourism to strengthen global cooperative heritage.'
              }
            ]
          },
          
          community: {
            title: 'Origins in a Time of Reconstruction',
            content: `In the aftermath of the First World War, the world faced profound social and economic dislocation. The newly created ILO founded under the Treaty of Versailles (1919)  was designed to give workers, employers, and governments a shared voice. Importantly, the ILO Constitution explicitly included “co-operators” among its key constituents, placing them at the heart of international labour dialogue.

The organization’s first Director-General, Albert Thomas, a visionary social reformer and long-time advocate of the cooperative movement, was himself a member of the International Co-operative Alliance (ICA) Central Committee. Thomas believed that social justice depended on democratic ownership and that cooperative enterprise was not merely an economic mechanism, but a cultural movement essential to peace and human progress. Under his direction, the ILO became the first international institution to establish a dedicated Cooperative Section  now known as the Cooperative and SSE Unit.

`
          },
          virtualExperience: {
            title: 'Building the Foundations of Cooperative Policy',
            content: `Throughout the 1920s and 1930s, the Cooperative Unit undertook comparative research, advised governments on cooperative legislation, and supported education programmes linking labour rights to cooperative principles. Its experts travelled widely from rural Europe to Asia, Africa, and Latin America  helping to shape cooperative law and practice across emerging economies.

The Unit’s work continued after the Second World War, when cooperatives became key tools for reconstruction, food security, and local economic recovery. During the decolonization era, the Unit’s guidance helped many newly independent nations design their first cooperative development policies, often using them as vehicles for self-reliance and social inclusion.`,
            image: 'assets/images/sites_files/SwitzerlandSubImg2.jpg'
          },
          aditionalData: {
            title: 'Recommendation No. 193,A Milestone for the 21st Century',
            content: `In 2002, the ILO reaffirmed its century-old commitment to cooperation with the adoption of ILO Recommendation No. 193 on the Promotion of Cooperatives. This landmark text, drafted under the leadership of the Cooperative Unit  remains the most comprehensive international framework for cooperative development.

Recommendation 193 recognizes cooperatives as “autonomous associations of persons united voluntarily to meet their common economic, social and cultural needs through a jointly owned and democratically controlled enterprise.” It urges governments to create supportive legal environments and to integrate cooperative education into national strategies. Today, it serves as a global touchstone for legislation, education, and policy in over a hundred countries.`
          },
          aditionalData2: {
            title: 'The 100th Anniversary: Celebrating a Century of Cooperation',
            content: `In 2020, the Cooperative Unit celebrated its centenary  marking 100 years of continuous service to the global cooperative movement. The occasion was commemorated through the publication of A Century of Cooperation, international symposia, and a virtual global gathering uniting cooperators, policymakers, and ILO staff. The celebration reaffirmed the enduring relevance of the cooperative model in addressing contemporary challenges such as climate change, digital transformation, and economic inequality.

The Unit also curated an online historical exhibition highlighting key moments: Albert Thomas’s leadership in the 1920s, cooperative recovery work in post-war Europe, the drafting of Recommendation 193, and the integration of the cooperative agenda into the United Nations 2030 Sustainable Development Goals. Through these initiatives, the ILO emphasized that cooperative principles remain vital tools for building inclusive economies.

`
          },
          aditionalDat3: {
            title: 'A Living Heritage of Solidarity',
            content: `Today, the Cooperative and Social and Solidarity Economy Unit stands not just as a technical office, but as a living monument to international cooperation. It serves as a bridge between local movements and global policy, between history and innovation. By integrating cooperatives into the heart of the decent-work agenda, it continues to advance the ideal that economies can be democratic, fair, and community-owned.

For any effort to chart the world’s cooperative cultural heritage, the ILO Cooperative/SSE Unit in Geneva is a keystone. It anchors 100 years of cooperative advocacy, policymaking, and education an enduring symbol that when people unite through shared ownership and shared purpose, they shape a fairer, more peaceful world.`
          },
  aditionalDat4: {
        title: '',
        content: ``
      },
      aditionalDat5: {
        title: '',
        content: ``
      },
          learnMore: {
            title: 'Learn More',
            resources: [
              'https://www.ilo.org/topics/cooperatives',
             
              
              
            ]
          }
        }
      }
    },
// France Site
    {
      id: 'ardelaine-france',
      name: 'Ardelaine and the Spirit of Collective Work',
      siteName:'Weaving a Future Together: Ardelaine and the Spirit of Collective Work, France',
      coopYear: 2025,
      lat: 44.8141,
      lng: 4.4859,
      country: 'France',
      continent: 'Europe',
      type: 'tangible',
      content: {
        pageTitle: 'Weaving a Future Together: Ardelaine and the Spirit of Collective Work, France',
        pageSubtitle: 'A Cooperative of Place, People & Purpose',
        mainImage: 'assets/images/sites_files/franceMainImg.jpg',
        thumbnails: [
          'assets/images/sites_files/franceSubImg.jpg',
          'assets/images/sites_files/franceMainImg.jpg',
          'assets/images/sites_files/franceSubImg.jpg',
        ],
        infoCard: {
          country: 'France',
          countryFlag: 'assets/images/sites_files/country-img/Flag_of_France.svg',
          theme: 'Cooperative Employee Ownership',
          entryYear: 2025,
          coordinates: '44.9378, 4.4964'
        },
        sections: {
          legacy: {
            title: 'A Cooperative of Place, People & Purpose',
            content: `Nestled in the mountainous heart of France’s Ardèche region, the cooperative SCOP Ardelaine emerged in 1982 as a bold response to economic decline, rural exodus and the erosion of local industry. Founded on the site of a former wool-spinning mill in the village of Saint-Pierreville, Ardelaine set out to reclaim a local resource,the wool of regional sheep,and to turn it into a socially-just, ecologically-grounded enterprise.`
          },
          criteria: {
            title: 'Featured Criteria ',
            items: [
              {
                heading: 'Criterion 4. Active Cooperative Connection',
                description: 'Sites must either remain in operation as cooperatives or be explicitly dedicated to preserving and interpreting cooperative history.'
              }
,
              {
                heading: 'Criterion 12. Sustainability and Inclusivity',
                description: 'Sites shall embody cooperative values of social and environmental sustainability, inclusivity, gender equity, youth engagement, and cultural diversity.'
              },
             {
                heading: 'Criterion 13. Networking and International Solidarity',
                description: 'Sites shall connect to cooperative networks—regional, national, and international—participating in exchanges, research, and cooperative tourism to strengthen global cooperative heritage.'
              }
            ]
          },
          
          community: {
            title: 'From Fleece to Fabric: Crafting Local Value',
            content: `In the early years, the cooperative focused on reviving the wool supply chain: sheep shearing, sorting, washing, carding, spinning, and finally producing mattresses, duvets, blankets, garments and children’s textiles,all from local fleece. The conscious choice to work in short circuits (circuit-court), processing wool locally and selling directly to consumers, remains central.
By anchoring production in-house and region-based, Ardelaine kept value in the territory, prevented depopulation, and offered meaningful employment in a remote area.`
          },
          virtualExperience: {
            title: 'A Cooperative Model That Lives Its Values',
            content: `What makes Ardelaine distinctive is not only what it produces, but how it is governed. From the outset the enterprise chose the SCOP (Société Coopérative et Participative) model, in which employees are also co-owners: they hold the majority of capital, they elect their management, and decisions are made democratically,one person, one vote.
In Ardelaine’s own words:

“Dans une SCOP … les salariés sont les associés majoritaires et [...] les décisions stratégiques sont l’expression du plus grand nombre.”

Profit-sharing also reflects the cooperative ethos: at Ardelaine, when there is surplus, 45 % goes to all employees, 45 % into reserves for the enterprise’s sustainability, and 10 % to shares held by the co-owners. Salaries are tightly ranged (a ratio of about 1.2 between highest and lowest) to reflect respect, complementarity and mutual trust rather than hierarchical divide.`,
            image: 'assets/images/sites_files/franceSubImg.jpg'
          },
          aditionalData: {
            title: 'Territory, Heritage and Regeneration',
            content: `Ardelaine is more than a factory; it is a territorial cooperative. Set in the Parc Naturel Régional des Monts d’Ardèche, the site draws thousands of visitors annually to its museum of wool, guided tours, creative workshops, café-bookstore and shop of pure-wool products. By repurposing a former industrial site in a remote rural region, Ardelaine contributed to local regeneration,creating jobs, revitalising the village, embracing tourism, and strengthening links between craft, ecology and community.`
          },
          aditionalData2: {
            title: 'Why “Vive le Collectif”?',
            content: `Ardelaine’s narrative is grounded in the belief that cooperation is not just an economic form but a cultural practice. In the section titled “Vive la coopération!”, the cooperative lays out the cooperative principles it embraces: voluntary and open membership, democratic control by members, economic participation, autonomy and independence, education/training, cooperation among cooperatives, and concern for community.
These are not abstract ideals: at Ardelaine they have concrete consequences. Decisions are transparent, management is collegially elected, capital is fixed so the enterprise cannot be subject to speculative takeover, and the mission is centred on remettre l’économie au service de l’humain (“placing the economy back at the service of humanity”).`
          },
          aditionalDat3: {
            title: 'The Cooperative Movement in Action',
            content: `Walking through the workshops, the store, and the museum at Saint-Pierreville, one sees more than wool and machines. One sees a collective culture of work: people who share responsibility, contribute to decision-making, and value the well-being of the whole. The enterprise spans production, retail, tourism, training and territory. It shows that cooperatives can be flexible, diversified and modern, while remaining rooted in local environment and democratic governance.

In a world dominated by globalised supply-chains, anonymous capital and remote ownership, Ardelaine stands as a reminder that another way is possible,one where economic activity is embedded in community, where value is shared, where people are owners not just workers, and where ecology, craft and cooperation converge.`
          },

  aditionalDat4: {
        title: '',
        content: ``
      },
      aditionalDat5: {
        title: '',
        content: ``
      },
          learnMore: {
            title: 'Learn More',
            resources: [
              'https://www.ardelaine.fr'
             
              
              
            ]
          }
        }
      }
    },
        // America Site
    {
      id: 'america-credit-union-museum',
      name: 'America’s Credit Union Museum',
      siteName: 'America ’s Credit Union Museum, Manchester, New Hampshire (USA)',
      coopYear: 2025,
      lat: 42.9933,
      lng: -71.4758,
      country: 'United States of America',
      continent: 'North America',
      type: 'tangible',
      content: {
        pageTitle: 'America ’s Credit Union Museum, Manchester, New Hampshire (USA)',
        pageSubtitle: 'A Historic Home with a Living Legacy',
        mainImage: 'assets/images/sites_files/am.jpg',
        thumbnails: [
          'assets/images/sites_files/America’sCreditUnionMuseum.jpg'
        ],
        infoCard: {
          country: 'United States of America',
          countryFlag: 'assets/images/sites_files/country-img/Flag_of_the_United_States.svg',
          theme: 'Museum Celebrating Cooperatives',
          entryYear: 2025,
          coordinates: '42.9955, -71.4637'
        },
        sections: {
          legacy: {
            title: 'A Historic Home with a Living Legacy',
            content: `In the quiet heart of Manchester, New Hampshire, at 418–420 Notre Dame Avenue, stands a modest three-story home that helped shape a national movement. Today, this residence is the America’s Credit Union Museum,a living archive built on the very site where the United States’ first credit union was founded in 1908.
            
Once the home of Joseph Boivin, who volunteered as the first manager of the St. Mary’s Cooperative Credit Association, the house now stands as a beacon of financial democracy and community solidarity. Under the leadership of Monsignor Pierre Hevey, and with guidance from Canadian pioneer Alphonse Desjardins, this small parish initiative in a French-Canadian immigrant community planted the seeds of what would become a nationwide cooperative movement.`
          },
          criteria: {
            title: 'Criteria Considered',
            items: [
              {
                heading: 'Criterion 1. Historical Significance',
                description: 'Through exhibitions, educational programs, guided tours, and multimedia storytelling, the Society brings history to life. It invites visitors, students, and cooperators to engage directly with the ideas and human values that inspired Desjardins’ model  values that remain as relevant today as they were in 1900.'
              },
              {
                heading: 'Criterion 2. Connection to Cooperative Pioneers or Communities',
                description: 'Sites must demonstrate a tangible link to cooperative pioneers, enterprises, federations, or communities that shaped cooperative practice and identity.'
              },
              {
                heading: 'Criterion 11. Visibility and Symbolism',
                description: 'Sites shall enhance the visibility of cooperation in public spaces through monuments, plaques, murals, and symbolic interpretation integrated within broader heritage narratives.'
              }
            ]
          },
          virtualExperience: {
            title: 'The Birth of a Movement',
            content: `At the turn of the 20th century, Manchester’s French-Canadian mill workers faced daily hardship. Conventional banks were beyond their reach, and informal lending often meant exploitation. Monsignor Hevey, recognizing both the material needs and the moral strength of his parishioners, sought a new model,one grounded in trust, self-help, and shared responsibility.

With Boivin’s commitment and Desjardins’ mentorship, the St. Mary’s Cooperative Credit Association opened its doors in November 1908. The credit union’s guiding principle was simple yet revolutionary: people helping people. Members pooled their modest savings, made affordable loans, and discovered collective dignity through cooperation.

That first act of faith became the cornerstone of a national tradition. The very walls of Boivin’s home,where ledgers were kept, coins counted, and decisions made,still resonate with the determination of those early pioneers.`,
            image: 'assets/images/sites_files/am.jpg'
          },
          community: {
            title: 'A Museum with a Mission',
            content: `Walking through the museum today, visitors sense immediately that this is more than a collection of historical objects. According to its mission, “America’s Credit Union Museum is the soul of an unwavering national movement of people helping people.”
            The first floor transports guests to the early years, 1908–1933, depicting how immigrant workers turned the idea of mutual aid into a functioning financial cooperative. Authentic artifacts, handwritten ledgers, and vintage photographs bring the story to life.
            The second floor continues from 1934 onward, chronicling milestones such as the creation of the Credit Union National Association (CUNA) and the passing of the Federal Credit Union Act, which established the legal framework for the cooperative banking system across the United States. Together, the exhibits reveal how a local act of solidarity evolved into a movement serving millions.`
          },
          aditionalData: {
            title: 'Honouring the Unsung Builders',
            content: `Beyond documenting the past, the museum looks boldly to the future. Its educational programs, rotating exhibits, and archival initiatives ensure that the cooperative message continues to inspire new generations.

Among its most powerful projects is “Unsung Heroes,” a storytelling initiative that honours individuals whose dedication and leadership sustained the credit union movement from behind the scenes. These were the tellers, volunteers, organizers, and educators who, in the museum’s own words, “built the movement by the sweat of their brows.” Their stories remind visitors that the strength of a cooperative lies not in profit, but in people.`
          },
          aditionalData2: {
            title: 'From Preservation to Inspiration',
            content: `The building itself carries history in its bricks. In 1996, it was listed on the National Register of Historic Places, officially recognizing its role in the social and economic fabric of America. A major restoration followed, funded by the SMB Charitable Foundation and other organizations, culminating in the museum’s grand opening in 2002.
            This transformation turned an ordinary home into an extraordinary educational space,a place where visitors can not only learn about credit union history, but also reflect on the values that sustain it: trust, equality, and collective progress.  `
          },
          aditionalDat3: {
            title: 'A Symbol of Cooperative Resilience',
            content: `Today, the America’s Credit Union Museum continues to expand its reach through digital archives, community partnerships, and national exhibits. It serves not just as a keeper of memories, but as a beacon for modern cooperators, reminding them that the movement’s foundation rests on empathy and shared purpose.
            From the moment one steps inside, the atmosphere feels both intimate and monumental. The creak of the wooden stairs, the sepia photographs, and the preserved meeting room all whisper the same timeless truth,when people unite for common good, they build something that lasts.
            Here, in this humble New England home, the promise of financial justice was first spoken aloud. And from that single spark in 1908, a light spread across the nation,illuminating a path of cooperation that continues to guide millions of Americans today.           `
          },
    aditionalDat4: {
        title: '',
        content: ``
      },
      aditionalDat5: {
        title: '',
        content: ``
      },

          learnMore: {
            title: 'Learn More',
            resources: [
              'https://www.acumuseum.org/'
              
            ]
          }
        }
      }
    },

      // Morocco Site
    {
      id: 'site-morocco',
      name: 'Al Amal and other Women led cooperatives in the Argan Oil Sector in Morocco',
      siteName: 'Al – Amal and other Women led cooperatives in the Argan Oil Sector in Morocco',
      coopYear: 2025,
      lat: 30.3967,
      lng: 9.6849,
      country: 'Morocco',
      continent: 'Africa',
      type: 'tangible',
      content: {
        pageTitle: 'Al Amal and other Women led cooperatives in the Argan Oil Sector in Morocco',
        pageSubtitle: 'Seeds of Hope: Women, Argan, and the Cooperative Spirit of Morocco',
        mainImage: 'assets/images/sites_files/amal.jpg',
        thumbnails: [
          
        ],
        infoCard: {
          country: 'Morocco',
          countryFlag: 'assets/images/sites_files/country-img/Flag_of_Morocco.svg',
          theme: 'Women led Cooperative',
          entryYear: 2025,
          coordinates: '30.88, 8.10'
        },
        sections: {
          legacy: {
            title: 'Where the Argan Trees Whisper',
            content: `In the sun-sculpted landscapes of southwestern Morocco, where ancient argan trees trace the contours of desert hills, a quiet revolution began. The argan tree, a symbol of endurance, had long been the lifeblood of these arid landsits oil prized for centuries for nourishment, healing, and beauty. Yet for generations, the women who harvested and cracked its hard nuts labored in silence, their work unrecognized and their potential untapped.
            
Then, in the mid-1990s, under the guidance and mentorship of Professor Zoubida Charrouf, a new idea took root in the small town of Tamanar. The Amal Cooperativeits name meaning “Hope”was born. It became the first argan oil cooperative fully managed by women, transforming an ancestral practice into a symbol of empowerment and sustainability.`
          },
          criteria: {
            title: 'Criteria Considered',
            items: [
              {
                heading: 'Criterion 4. Active Cooperative Connection',
                description: 'Sites must either remain in operation as cooperatives or be explicitly dedicated to preserving and interpreting cooperative history.'
              },
              {
                heading: 'Criterion 8. Community and Member Engagement',
                description: 'Sites shall be embedded within their communities, ensuring active participation, ownership, and collective stewardship by local members and residents.'
              },
            {
                heading: 'Criterion 12. Sustainability and Inclusivity',
                description: 'Sites shall embody cooperative values of social and environmental sustainability, inclusivity, gender equity, youth engagement, and cultural diversity.'
              }
            ]
          },
          virtualExperience: {
            title: 'Amal Cooperative: The Dawn of a Movement',
            content: `Amal began as a modest gathering of women determined to turn their skill into self-sufficiency. Through training, fair wages, and shared ownership, they transformed their lives and, in time, their entire community. What had once been an informal cottage activity evolved into a model of ethical production and social solidarity.

Visitors to Tamanar today can walk through the cooperative’s sunlit workrooms, where women sit in a rhythmic harmonycracking argan nuts, pressing oil, bottling Morocco’s famed “liquid gold.” Each gesture is both ancient and newly empowered, a dance of patience, precision, and pride. Amal’s success inspired dozens of similar initiatives, proving that economic equality could grow from the very soil of tradition.
Amal’s story also lives on through its sister cooperatives in Tidzi and Mesti, spreading its mission across the argan forest. Together, they form a living network of resiliencewomen working for women, protecting their ecosystem, and securing a sustainable future for their families.`,
            image: 'assets/images/sites_files/amal.jpg'
          },
          community: {
            title: 'Targanine: A Beacon of Quality and Ethics',
            content: `Standing alongside Amal is Targanine, a pioneering federation of women’s cooperatives in the Essaouira region. Targanine gathers hundreds of women from surrounding villages, united by a commitment to quality, traceability, and environmental stewardship.
Here, fair trade principles meet ecological awareness. The cooperative ensures that every bottle of argan oil represents not exploitation, but empowermentproviding income, preserving biodiversity, and reinforcing the role of women as stewards of their land. Through Targanine, Moroccan argan oil gained international recognition not just for its purity, but for the human values infused within it.`
          },
          aditionalData: {
            title: 'Al Amal of Ighrem: Hope in the Anti-Atlas',
            content: `Further south, beneath the ochre slopes of the Anti-Atlas Mountains in Ighrem, another chapter unfolded. Founded in 1991, the Al Amal Cooperative emerged from a community of predominantly Berber women living amid vast argan groves shimmering under desert light.
Before its creation, opportunities were few. Women carried the weight of domestic life without access to education or income. But through the cooperative, they found both livelihood and voice. The production and trade of argan oil became a means to build confidence, education, and solidaritya pathway from dependency to dignity.
Today, Al Amal stands as proof that even in the most remote villages, collective action can transform circumstance into strength. Families have been uplifted, children educated, and the once-quiet village economy now hums with activity and pride.
`
          },
          aditionalData2: {
            title: 'The Argan Tree’s Living Legacy',
            content: `Across Tamanar, Essaouira, and Ighrem, the argan cooperatives are more than producersthey are custodians of a legacy. They embody the balance between people and nature, tradition and innovation, self-reliance and community care.
Through the hands of these women, the argan tree continues to whisper its timeless message: that hope, when shared, becomes powerand from the heart of the Moroccan desert, that power can bloom into prosperity.
  `
          },
          aditionalDat3: {
            title: '',
            content: ` `
          },
    aditionalDat4: {
        title: '',
        content: ``
      },
      aditionalDat5: {
        title: '',
        content: ``
      },

          learnMore: {
            title: 'Learn More',
            resources: [
              'https://worldartisanguild.com/women-s-co-op',
              'https://ich.unesco.org/en/RL/argan-practices-and-know-how-concerning-the-argan-tree-00955'
            ]
          }
        }
      }
    },
 // Argentina Site
    {
      id: 'site-argentina-sunchales',
      name: 'Sunchales – National Capital of Cooperativism Santa Fe, Argentina',
      siteName: 'Sunchales – National Capital of Cooperativism Santa Fe, Argentina',
      coopYear: 2025,
      lat: -30.933,
      lng: -61.567,
      country: 'Argentina',
      continent: 'South America',
      type: 'tangible',
      content: {
        pageTitle: 'Sunchales – National Capital of Cooperativism Santa Fe, Argentina',
        pageSubtitle: 'A City Built on Solidarity',
        mainImage: 'assets/images/sites_files/image007.jpg',
        thumbnails: [
          
        ],
        infoCard: {
          country: 'Argentina',
          countryFlag: 'assets/images/sites_files/country-img/Argentina.png',
          theme: 'Landmark CooperativePioneers',
          entryYear: 2025,
          coordinates: '-30.9442, -61.5615'
        },
        sections: {
          legacy: {
            title: 'A City Built on Solidarity',
            content: `In the heart of Argentina’s Santa Fe province, surrounded by the green expanse of the Pampas, stands the city of Sunchales,proudly known as the Capital Nacional del Cooperativismo, the National Capital of Cooperativism. More than a city, Sunchales is a living expression of a century-old movement that has shaped Argentina’s rural and economic identity. Its streets, institutions, and monuments bear witness to a lasting belief: that true progress flourishes when communities work together.`
          },
          criteria: {
            title: 'Criteria Considered',
            items: [
               {
                heading: 'Criterion 1. Historical Significance',
                description: 'Sites must be at least thirty (30) years old, preferably sixty (60), or directly associated with foundational events, milestones, or figures in the cooperative movement.'
              },
{
                heading: 'Criterion 2. Connection to Cooperative Pioneers or Communities',
                description: 'Sites must demonstrate a tangible link to cooperative pioneers, enterprises, federations, or communities that shaped cooperative practice and identity.'
              }
,
{
                heading: 'Criterion 4. Active Cooperative Connection',
                description: 'Sites must either remain in operation as cooperatives or be explicitly dedicated to preserving and interpreting cooperative history.'
              }
            ]
          },
          virtualExperience: {
            title: 'The Origins of Mutual Aid',
            content: `The cooperative spirit in Sunchales began long before Argentina enacted formal laws on cooperation. In 1891, groups of Italian immigrants who had settled in the region founded sociedades de socorro mutuo,mutual aid societies that provided support in times of illness, loss, or need. These small, community-based associations were rooted in solidarity and shared responsibility. They represented the first local expressions of cooperative organization, predating Argentina’s first Cooperative Law of 1926 by more than three decades.
Through these early mutual aid groups, immigrants found not only practical support but also belonging. They created institutions that mirrored their values,mutual help, fairness, and collective progress,and planted the seeds of a cooperative tradition that would come to define Sunchales itself.
`,
            image: 'assets/images/sites_files/image007.jpg'
          },
          community: {
            title: 'The Rise of Dairy Cooperatives',
            content: `By the late 1920s, as the surrounding region evolved into one of Argentina’s most productive dairy zones, Sunchales witnessed the rise of milk-producers’ cooperatives. The first associations appeared around 1929, bringing local farmers together to process and market their milk collectively. This shift marked the beginning of a profound transformation in the local economy.
Over time, these cooperatives expanded into large-scale enterprises. Among the most prominent are SanCor Cooperativas Unidas Ltda., which became one of Argentina’s leading dairy producers, and Grupo Sancor Seguros, now one of the nation’s foremost insurance cooperatives. These organizations not only anchored the city’s economic growth but also embodied its cooperative soul,enterprises built not on profit alone, but on mutual trust and shared prosperity.
`
          },
          aditionalData: {
            title: 'A National Recognition',
            content: `In recognition of Sunchales’ deep cooperative heritage, the Argentine National Congress passed Law 26.037 in 2005, officially designating the city as the Capital Nacional del Cooperativismo. The declaration affirmed what history had already made evident: Sunchales stood as a beacon for cooperative enterprise across Latin America.

            A year later, in 2006, the city unveiled its most emblematic landmark,the Monumento Nacional al Cooperativismo. Situated at the intersection of Avenida Yrigoyen and General Paz, the monument stands as a striking symbol of the city’s spirit and ideals.
`
          },
          aditionalData2: {
            title: 'The Monument to Cooperation',
            content: `The monument’s design features eight towering concrete pillars, each representing one of the universal principles of cooperation: Peace, Help, Equity, Justice, Freedom, Solidarity, and Responsibility. The eighth pillar, painted in a blend of the others’ colors, symbolizes unity within diversity,a visual reminder that cooperation is not uniformity, but harmony among differences.

            Beyond its symbolic form, the monument functions as a gathering place for reflection, dialogue, and celebration. Every July, Sunchales hosts national and international events to mark the International Day of Cooperatives, attracting visitors from across Argentina and neighboring countries who come to honor the enduring power of collective action.
`
          },
          aditionalDat3: {
            title: 'Cooperation as a Way of Life',
            content: `Today, Sunchales’ cooperative values extend well beyond its monument. Cooperative education is woven into local schools, teaching new generations the principles of mutual aid and democratic participation. Youth-led initiatives flourish alongside established enterprises, ensuring that the cooperative ethos remains vibrant and forward-looking.

            The city’s institutions, from its banks to its cultural centers, continue to reflect a model of shared responsibility. Cooperation here is not merely a historical idea,it is a daily practice, a civic habit, and a cultural inheritance passed from one generation to the next.

            `
          },
    aditionalDat4: {
        title: 'A Living Philosophy',
        content: `Standing before the Monumento Nacional al Cooperativismo, one feels both the weight of history and the promise of renewal. The eight pillars rise like a chorus, their colors blending under the Pampas sky, reminding all who visit that unity and diversity can coexist in pursuit of a common good.

            Sunchales is not only the capital of cooperativism in name but in essence,a city where the past’s collective struggles meet the future’s shared dreams. It stands as a testament to a simple, enduring truth: that community is humanity’s greatest source of strength.
 `
      },
      aditionalDat5: {
        title: '',
        content: ``
      },

          learnMore: {
            title: 'Learn More',
            resources: [
              'https://sunchales.gob.ar/'
            ]
          }
        }
      }
    },


     // Tanzania Site
    {
      id: 'site-moshi-tanzania',
      name: 'Moshi Co-operative University: Where Education Meets Empowerment, Tanzania',
      siteName: 'Moshi Co-operative University: Where Education Meets Empowerment, Tanzania',
      coopYear: 2025,
      lat: - 3.3333,
      lng: 37.3333,
      country: 'Tanzania',
      continent: 'Africa',
      type: 'tangible',
      content: {
        pageTitle: 'Moshi Co-operative University: Where Education Meets Empowerment, Tanzania',
        pageSubtitle: 'A University at the Foot of a Mountain',
        mainImage: 'assets/images/sites_files/image008.jpg',
         thumbnails: [
          'assets/images/sites_files/image009.jpg',
        ],
        infoCard: {
          country: 'Tanzania',
          countryFlag: 'assets/images/sites_files/country-img/tanzania.png',
          theme: 'Education Training Center',
          entryYear: 2025,
          coordinates: '-3.3333, 37.3333'
        },
        sections: {
          legacy: {
            title: 'A University at the Foot of a Mountain',
            content: `At the foot of majestic Mount Kilimanjaro, in the lively town of Moshi, stands Moshi Co-operative University (MoCU),a unique institution where education, cooperation, and community empowerment converge. The campus, framed by the mountain’s snow-capped peak and the bustle of Sokoine Road, hums with purpose. Here, students do not merely pursue degrees; they cultivate a mindset of collective progress.
Founded on 5 January 1963 as the Co-operative College Moshi, the institution’s mission was clear from its first day: to train human resources for Tanzania’s growing cooperative sector under the Ministry of Co-operatives and Community Development. As the cooperative movement expanded, so too did the college’s scope. In 2004, it evolved into Moshi University College of Co-operative and Business Studies (MUCCoBS), and a decade later, in 2014, it achieved full university status as MoCU,a national and regional leader in cooperative education.
`
          },
          criteria: {
            title: 'Criteria Considered',
            items: [
{
                heading: 'Criterion 6. Educational Mission',
                description: 'Sites shall actively promote cooperative literacy through exhibitions, archives, guided tours, and programmes that teach the ICA Statement on the Cooperative Identity.'
              },
              {
                heading: 'Criterion 7. Research and Knowledge Sharing',
                description: 'Dedicated researchers delve into the origins and evolution of the Desjardins Group, tracing its expansion from a modest savings cooperative in Lévis, Quebec, into one of the world’s leading cooperative financial institutions. Their work not only illuminates the past but also provides valuable insight into how cooperation and ethical finance can thrive in the modern economy.'
              },
{
                heading: 'Criterion 13. Networking and International Solidarity',
                description: 'Sites shall connect to cooperative networks—regional, national, and international—participating in exchanges, research, and cooperative tourism to strengthen global cooperative heritage.'
              }
            ]
          },
          virtualExperience: {
            title: '“Ushirika ni Biashara” – Co-operation is Business',
            content: `MoCU’s guiding motto, Ushirika ni Biashara,Co-operative is Business,captures its distinctive philosophy. The university teaches that cooperatives are not just instruments of social welfare; they are viable, responsible enterprises capable of driving sustainable development. This principle is woven through the institution’s governance, academic programmes, and student culture.
Every initiative on campus reflects the cooperative spirit: mutual aid, democratic participation, and accountability. Students learn that success in business and community life depends not on competition alone but on collaboration, shared values, and collective responsibility.

`,
            image: 'assets/images/sites_files/image008.jpg'
          },
          community: {
            title: 'A Tradition Rooted in Place',
            content: `Moshi’s location gives MoCU a special resonance. The Kilimanjaro region has a long and proud cooperative history, especially in agriculture and coffee production. Early cooperative unions such as the Kilimanjaro Native Co-operative Union (KNCU) helped shape Tanzania’s economic landscape, and MoCU continues that legacy by educating the next generation of cooperative leaders.
The physical setting reinforces this connection. From the campus, Mount Kilimanjaro rises like a guardian above the plains,a daily reminder that ambition must be grounded in community, just as the mountain’s snowy summit depends on its strong base. Students often speak of the landscape as symbolic of MoCU’s mission: to reach great heights while remaining deeply rooted in shared purpose.
`
          },
          aditionalData: {
            title: 'Learning for Leadership and Service',
            content: `MoCU offers a wide range of academic programmes,certificate, diploma, bachelor’s, master’s, and doctoral degrees,in fields such as cooperative management, business economics, microfinance, community development, and information technology. But what distinguishes MoCU from a conventional university is its integration of cooperative principles into every discipline.
Coursework and field training emphasize both technical competence and social ethics. Students learn the mechanics of savings and credit society management, bookkeeping for cooperatives, marketing, and enterprise development, alongside modules that explore equity, gender participation, and governance. Group work and community projects mirror real cooperative practice, ensuring that graduates are ready to apply theory in tangible ways.
`
          },
          aditionalData2: {
            title: 'Beyond the Classroom',
            content: `MoCU’s influence extends far beyond its urban campus. The university maintains 13 regional offices across Tanzania, spreading cooperative education and consultancy to rural and underserved communities. Through research centres and outreach programmes, it partners with local cooperatives, NGOs, and government agencies to foster entrepreneurship, improve financial literacy, and strengthen the cooperative movement nationwide.
Students frequently take part in field assignments where they help rural groups establish microfinance initiatives, design sustainable agricultural ventures, or manage cooperative societies. These experiences forge strong ties between academic learning and community transformation.
`
          },
          aditionalDat3: {
            title: 'A Movement in Motion',
            content: `More than a university, MoCU is a hub of innovation and renewal for the cooperative sector. Its graduates now serve across Tanzania and beyond,as managers, educators, development officers, and social entrepreneurs,carrying forward the belief that economic growth and social equity can progress hand in hand.
When students walk along the shaded paths of campus, debate in lecture halls, or work together on community trust projects, they are engaging with an idea larger than themselves. Each classroom discussion and field exercise contributes to a living movement rooted in solidarity and collective advancement.
From its beginnings as a small college in 1963 to its present role as a national institution, Moshi Co-operative University continues to embody Tanzania’s cooperative spirit,teaching that the power of education, when joined with cooperation, can move mountains.
`
          },
              aditionalDat4: {
        title: '',
        content: ``
      },
      aditionalDat5: {
        title: '',
        content: ``
      },
          learnMore: {
            title: 'Learn More',
            resources: [
              'https://www.mocu.ac.tz/'
            ]
          }
        }
      }
    },

    
     // UK Site
    {
      id: 'site-manchester',
      name: 'The Rochdale Pioneers’ Musuem, Rochdale and the National Cooperative Archive, Manchester, United Kingdom',
      siteName: 'The Rochdale Pioneers’ Musuem, Rochdale and the National Cooperative Archive, Manchester, United Kingdom',
      coopYear: 2025,
      lat: 53.6187,
      lng: -2.1594,
      country: 'United Kingdom',
      continent: 'Europe',
      type: 'tangible',
      content: {
        pageTitle: 'The Rochdale Pioneers’ Musuem, Rochdale and the National Cooperative Archive, Manchester, United Kingdom',
        pageSubtitle: 'The Modest Beginning at Toad Lane',
        mainImage: 'assets/images/sites_files/image010.jpg',
         thumbnails: [
          'assets/images/sites_files/image011.jpg',
          'assets/images/sites_files/image012.jpg',
        ],
        infoCard: {
          country: 'Europe',
          countryFlag: 'assets/images/sites_files/country-img/ukflag.jpg',
          theme: 'Landmark  Cooperative Pioneers',
          entryYear: 2025,
          coordinates: '53.6168, -2.1553'
        },
        sections: {
          legacy: {
            title: 'The Modest Beginning at Toad Lane',
            content: `In the industrious town of Rochdale, England, stands a simple red-brick building at 31 Toad Lane,a site that changed the course of social enterprise. On 21 December 1844, twenty-eight weavers and artisans, weary of exploitation and poor-quality goods, united to form the Rochdale Society of Equitable Pioneers. Their small shop offered fair prices, honest weights and measures, and quality goods,values revolutionary for the time.
From this humble experiment emerged the Rochdale Principles, a framework that came to define cooperative practice across the world: voluntary and open membership, democratic control, member economic participation, education, cooperation among cooperatives, and concern for the community.
`
          },
          criteria: {
            title: 'Criteria Considered',
            items: [
 {
                heading: 'Criterion 1. Historical Significance',
                description: 'Sites must be at least thirty (30) years old, preferably sixty (60), or directly associated with foundational events, milestones, or figures in the cooperative movement.'
              },
              {
                heading: 'Criterion 2. Connection to Cooperative Pioneers or Communities',
                description: 'Sites must demonstrate a tangible link to cooperative pioneers, enterprises, federations, or communities that shaped cooperative practice and identity.'
              },
{
                heading: 'Criterion 3. Archival, Architectural, or Symbolic Value',
                description: 'Represents milestones in cooperative development. Preserves stories, traditions, or knowledge tied to cooperative evolution.'
              }
            ]
          },
          virtualExperience: {
            title: 'The Rochdale Pioneers Museum',
            content: `Today, that same site is home to the Rochdale Pioneers Museum, managed by the Co-operative Heritage Trust. It combines the original 18th-century warehouse,once the Pioneers’ store,with a modern exhibition space that connects visitors to nearly two centuries of cooperative history. Inside, one finds a faithful recreation of the original shop counter and shelves, allowing visitors to step back into the moment when cooperative trade first took form.
The museum’s exhibits unfold the story of ordinary working people who built a fairer economic model through solidarity. Displays of ledgers, weighing scales, household items, and correspondence trace how a simple consumer shop evolved into a vast network of cooperative societies. Themes such as retail innovation, social reform, and international solidarity are explored through interactive displays and archival artefacts.
The building itself, Grade II listed, stands as a national monument to social enterprise,its modest architecture a powerful reminder that great ideas often begin in the simplest of places.

`,
            image: 'assets/images/sites_files/image010.jpg'
          },
          community: {
            title: 'Holyoake House and the National Co-operative Archive',
            content: `Just a short journey away, in the centre of Manchester, lies Holyoake House on Hanover Street,the home of the National Co-operative Archive. Together with the museum, it forms part of Britain’s “Co-operative Quarter,” preserving the intellectual and cultural legacy of the movement.
Completed in 1911 in honour of reformer George Jacob Holyoake, the building reflects the movement’s commitment to education and social progress. Within its walls are manuscripts, rare books, periodicals, photographs, and films documenting the cooperative journey from the 19th century to the present.
Researchers, students, and visitors explore subjects ranging from early retail societies and wartime contributions to the roles of women, cooperative education, and the international spread of mutual aid. The archive provides a deeper, documentary dimension to the experience of Toad Lane,revealing how cooperative ideals adapted through industrialisation, global expansion, and the challenges of modern consumerism.
`
          },
          aditionalData: {
            title: 'A Shared Heritage of Innovation and Equality',
            content: `Together, the Rochdale Pioneers Museum and the National Co-operative Archive tell a seamless story. The museum preserves the original spark,the first shop, the first members, the first principles,while the archive chronicles the fire it ignited across time and continents. Both are run by the same trust, reinforcing a shared mission: to protect, interpret, and celebrate the living legacy of cooperation.
Visiting Toad Lane is not simply an exercise in nostalgia. Standing behind the recreated shop counter, one senses the courage of those first twenty-eight Pioneers,workers who dared to believe that fairness, education, and shared ownership could transform society. The archive in Manchester deepens that experience, providing the evidence of their impact,the handwritten ledgers, the advertisements, the photographs,proof that their idea endured and evolved.
`
          },
          aditionalData2: {
            title: 'The Spirit That Endures',
            content: `From Rochdale’s small storefront to Holyoake’s Manchester archive, the cooperative movement’s journey mirrors a universal truth: that collective effort can achieve what individual ambition alone cannot. These heritage sites remind us that the pursuit of equity and dignity in economic life is not a relic of the past but a living challenge for every generation.
In Toad Lane’s quiet rooms and Holyoake House’s reading halls, the same message resonates still,that cooperation, born of necessity, remains one of humanity’s most hopeful ideas.
`
          },
          aditionalDat3: {
            title: '',
            content: ``
          },
      aditionalDat4: {
        title: '',
        content: ``
      },
      aditionalDat5: {
        title: '',
        content: ``
      },
          learnMore: {
            title: 'Learn More',
            resources: [
              'https://www.rochdalepioneersmuseum.coop/'
            ]
          }
        }
      }
    },

    // USA Site 2
{
  id: 'federation-southern-coops',
  name: 'The Federation of Southern Cooperatives / Land Assistance Fund ',
  siteName:'The Federation of Southern Cooperatives Rural Training & Research Center, Epes, Alabama, U.S.A.',
  coopYear: 2025,
  lat: 32.7553,
  lng: -88.1261,
  country: 'United States of America',
  continent: 'North America',
  type: 'tangible',
  content: {
    pageTitle: 'The Federation of Southern Cooperatives Rural Training & Research Center, Epes, Alabama, U.S.A. ',
    pageSubtitle: 'A Legacy of Land, Liberation, and Cooperative Power in the American South',
    mainImage: 'assets/images/sites_files/image017.jpg',
    thumbnails: [
      
      
    ],
    infoCard: {
      country: 'United States of America',
      countryFlag: 'assets/images/sites_files/country-img/america.png',
      theme: 'EducationTraining Centre',
      entryYear: 2025,
      coordinates: '32.7553, -88.1261'
    },
    sections: {
      legacy: {
        title: 'A Legacy of Land, Liberation, and Cooperative Power',
        content: `Across the rural landscapes of the American South, the struggle for land and dignity has long been a defining chapter in the story of African American resilience. Out of that struggle grew the Federation of Southern Cooperatives / Land Assistance Fund (FSC/LAF).

Founded in 1967, at the height of the Civil Rights Movement, the Federation was created by Black farmers, landowners, and cooperative organizers who saw economic justice as inseparable from civil rights. Their mission was, and remains, clear and courageous: to save Black-owned land and build self-sustaining, community-owned enterprises in regions where structural inequality and discrimination had long denied them both.`
      },
      criteria: {
        title: 'Featured Criteria ',
        items: [
           {
                heading: 'Criterion 1. Historical Significance',
                description: 'Sites must be at least thirty (30) years old, preferably sixty (60), or directly associated with foundational events, milestones, or figures in the cooperative movement.'
              },
          {
            heading: 'Criterion 5. Living Practice of Cooperation',
            description: 'Sites shall embody cooperation as a living tradition, encouraging participation, democratic practice, and mutual aid, beyond static commemoration.'
          },
         {
                heading: 'Criterion 12. Sustainability and Inclusivity',
                description: 'Sites shall embody cooperative values of social and environmental sustainability, inclusivity, gender equity, youth engagement, and cultural diversity.'
              }

        ]
      },
      community: {
        title: 'Roots in Resistance and Solidarity',
        content: `The Federation was born out of both necessity and vision. Following the Voting Rights Act of 1965, many Black farmers in the South faced economic retaliation, including foreclosure and denial of credit. Guided by the principle that “cooperation is our way out,” the FSC/LAF was established as a regional cooperative association uniting local credit unions, marketing co-ops, housing cooperatives, and farmer associations.

It gave families access to credit, agricultural training, and legal support; it fought discriminatory lending practices; and it built an enduring network of rural cooperatives stretching across Alabama, Mississippi, Georgia, South Carolina, and beyond.`
      },
      virtualExperience: {
        title: 'Land as Legacy',
        content: `Land has always been at the heart of the Federation’s struggle. In the century following emancipation, Black farmers had gained ownership of over 14 million acres of land, yet by the mid-20th century, that number had fallen by more than 90 percent due to systemic racism, predatory practices, and lack of access to legal and financial resources.

The Land Assistance Fund , created as part of the Federation’s work, became a lifeline for families facing foreclosure. Through technical assistance, cooperative development, and advocacy, it has helped thousands retain ownership of their land and pass it on to future generations.`,
        image: 'assets/images/sites_files/image017.jpg',
      },
      aditionalData: {
        title: 'A Movement and a Model',
        content: `For nearly six decades, the Federation has been a cornerstone of the Black cooperative tradition, one that stretches back to the mutual aid societies of the 19th century. Its influence has reached far beyond the South: shaping discussions on land justice, food sovereignty, and racial equity in national and international forums.

The Federation has received recognition from the United Nations, the International Cooperative Alliance, and the U.S. Department of Agriculture, yet its greatest achievement is the quiet power of collective resilience—families keeping their land, cooperatives thriving, and communities governing themselves with dignity.`
      },
      aditionalData2: {
        title: 'Why It Belongs on the Cooperative Cultural Heritage Map',
        content: `•	Civil Rights roots: It grew directly out of the struggle for racial and economic justice in the 1960s.


        •	Land and legacy: It protects one of the most endangered forms of ownership,Black family land.


        •	Cooperative leadership: It has inspired generations of African American cooperators, advocates, and community builders.


        •	Cultural and educational significance: Its training center in Alabama serves as a living museum of cooperative thought and practice.
`
      },
      aditionalDat3: {
        title: 'Enduring Significance',
        content: `Today, the Federation of Southern Cooperatives / Land Assistance Fund remains a vital institution, continuing to fight for land retention, sustainable agriculture, and cooperative self-reliance. It reminds us that cooperation is not only an economic tool,it is an act of freedom. Through shared ownership, education, and solidarity, the Federation has shown the world that land can be more than property: it can be a platform for justice, heritage, and hope.
For anyone mapping the world’s cooperative cultural heritage, the Federation stands as a beacon,a living monument to the idea that ownership, when shared, can liberate.
`
      },
      aditionalDat4: {
        title: '',
        content: ``
      },
      aditionalDat5: {
        title: '',
        content: ``
      },
      learnMore: {
        title: 'Learn More',
        resources: ['https://www.federation.coop'
        ]
      }
    }
  }
},
//Nigeria site

{
  id: 'obisesan-house-nigeria',
  name: 'Obisesan House: The Heart of Nigeria’s Cooperative Legacy ,Ibadan, Nigeria' ,
  siteName:'Obisesan House: The Heart of Nigeria’s Cooperative Legacy ,Ibadan, Nigeria',
  coopYear: 2025,
  lat: 7.3776,
  lng: 3.9059,
  country: 'Nigeria',
  continent: 'Africa',
  type: 'tangible',
  content: {
    pageTitle: 'Obisesan House: The Heart of Nigeria’s Cooperative Legacy',
    pageSubtitle: 'A Monument to Vision and Unity',
    mainImage: 'assets/images/sites_files/image019.jpg',
    thumbnails: [
      'assets/images/sites_files/sub-icon/image020.jpg',
    ],
    infoCard: {
      country: 'Nigeria',
      countryFlag: 'assets/images/sites_files/country-img/Nigeria.png',
      theme: 'LandmarkHall Cooperatives',
      entryYear: 2025,
      coordinates: '7.3776 , 3.9059 '
    },
    sections: {
      legacy: {
        title: 'A Monument to Vision and Unity',
        content: `In the vibrant city of Ibadan, stands Obisesan House, a building that embodies a legacy of cooperation, perseverance, and shared destiny. Commissioned in 1957, alongside the Co-operative Bank Building and the towering Cocoa House, Obisesan House has long served as the nerve centre of Nigeria’s cooperative movement.

Its very name honours Chief Akinpelu Obisesan, revered as the father of the cooperative movement in Nigeria and the first President of the Co-operative Federation of Nigeria. He laid the institutional groundwork for a movement that continues to sustain millions across the country.`
      },
      criteria: {
        title: 'Featured Criteria ',
        items: [
          {
            heading: 'Criterion 3. Archival, Architectural, or Symbolic Value',
            description: 'The bold, functional modernist design reflects the confidence of postcolonial Nigeria and the values of stability, transparency, and endurance.'
          },
         {
                heading: 'Criterion 8. Community and Member Engagement',
                description: 'Sites shall be embedded within their communities, ensuring active participation, ownership, and collective stewardship by local members and residents.'
              }
,
         {
                heading: 'Criterion 11. Visibility and Symbolism',
                description: 'Sites shall enhance the visibility of cooperation in public spaces through monuments, plaques, murals, and symbolic interpretation integrated within broader heritage narratives.'
              }
        ]
      },
      community: {
        title: 'The Beating Heart of Cooperative Nigeria',
        content: `Strategically located in the heart of Ibadan, Obisesan House was conceived during a time of optimism and transformation fueled by cocoa farming in Nigeria's western region. The building became the coordination centre for cocoa farmers’ cooperatives, where leaders gathered to organise production, distribute resources, and negotiate fair returns for smallholder producers.

Decisions made within its walls shaped the fortunes of thousands of rural households and contributed to Nigeria’s emergence as a major agricultural exporter, united by the belief that through cooperation, ordinary citizens could take control of their economic destiny.`
      },
      virtualExperience: {
        title: 'Architecture as Symbol and Statement',
        content: `Obisesan House stands as a physical testament to the spirit of determination. Its bold, functional modernist design reflects the confidence of postcolonial Nigeria, a nation eager to chart its own course. The structure’s clean lines and dignified façade speak of stability and progress, mirroring the values of the cooperative movement itself: order, transparency, and endurance.

Inside, the building breathes history. Meeting rooms once filled with community leaders still host gatherings, conferences, and training sessions for cooperatives from Oyo, Ogun, Ondo, Osun, Ekiti, and Lagos States.`,
        image: 'assets/images/sites_files/image019.jpg'
      },
      aditionalData: {
        title: 'A Living Heritage of Cooperation',
        content: `For generations, Obisesan House has stood as a symbol of identity and pride for Nigeria’s cooperative movement. It is more than an administrative centre; it is a heritage site, embodying the principles of self-help, mutual responsibility, and economic democracy.

The building has been a training ground for leadership, nurturing men and women who would carry forward Chief Obisesan’s belief that cooperation is both an economic system and a moral vision.`
      },
      aditionalData2: {
        title: 'Enduring Relevance in a Changing Nation',
        content: `As Nigeria continues to confront new economic and social challenges—urbanisation, youth unemployment, and global market pressures—the relevance of Obisesan House has not diminished. Its continued use as a hub for regional cooperative initiatives testifies to the enduring strength of a movement that has weathered colonial legacies, political change, and economic restructuring.

The spirit of Chief Akinpelu Obisesan endures in the everyday work of cooperative societies across the nation.`
      },
      aditionalDat3: {
        title: 'A Symbol of Continuity and Hope',
        content: `Obisesan House stands today not merely as an architectural landmark, but as a monument to collective vision, a reminder that when communities unite, they build far more than wealth. They build trust, resilience, and national identity.

In its solid structure and storied history, one finds the essence of Nigeria’s cooperative journey: a testament to the power of ordinary people, working together, to achieve extraordinary things.`
      },
      aditionalDat4: {
        title: '',
        content: ``
      },
      aditionalDat5: {
        title: '',
        content: ``
      },
      learnMore: {
        title: 'Learn More',
        resources: [
          'https://oduacooperativeconglomerate.coop/'
        ]
      }
    }
  }
},
{
  id: 'nationaal-cooperatie-museum',
  name: 'Nationaal Coöperatie Museum – The Soul of Dutch Cooperation,Schiedam, Netherlands ',
  siteName:'Nationaal Coöperatie Museum, Schiedam, Netherlands',
  coopYear: 2025,
  lat: 51.9156,
  lng: 4.3971,
  country: 'Netherlands',
  continent: 'Europe',
  type: 'tangible',
  content: {
    pageTitle: 'Nationaal Coöperatie Museum – The Soul of Dutch Cooperation,Schiedam, Netherlands',
    pageSubtitle: 'A Hidden Gem in Historic Schiedam, Netherlands',
    mainImage: 'assets/images/sites_files/image021.jpg',
    thumbnails: [
      'assets/images/sites_files/sub-icon/image022.jpg',
      ],
    infoCard: {
      country: 'Netherlands',
      countryFlag: 'assets/images/sites_files/country-img/Netherland.png',
      theme: 'Museum Celebrating Cooperatives',
      entryYear: 2025,
      coordinates: '51.9156, 4.3971 '
    },
    sections: {
      legacy: {
        title: 'A Hidden Gem in Historic Schiedam',
        content: `Tucked away in the historic heart of Schiedam, a Dutch city known for its winding canals and towering windmills, stands the Nationaal Coöperatie Museum. Housed in a beautifully preserved 1891 building, the museum is a living tribute to the Dutch cooperative movement and the ordinary people who shaped it.

Crossing its threshold feels like stepping back in time. The visit begins in an old-fashioned shop, where wooden shelves are lined with glass jars of traditional sweets, illustrating how the cooperative spirit was once lived as much as it was organized.`
      },
      criteria: {
        title: 'Featured Criteria ',
        items: [
           {
                heading: 'Criterion 1. Historical Significance',
                description: 'Sites must be at least thirty (30) years old, preferably sixty (60), or directly associated with foundational events, milestones, or figures in the cooperative movement.'
              }
,
          {
            heading: 'Criterion 6. Educational Mission',
            description: 'The museum actively traces the history of consumer cooperatives from humble neighborhood stores to a national network, teaching values like fairness, trust, and education through tangible artifacts.'
          },
          {
            heading: 'Criterion 10. Preservation and Safeguarding',
            description: 'Sites shall commit to the safeguarding of cooperative records, artifacts, oral traditions, and buildings through sustainable conservation strategies.'
          }
        ]
      },
      community: {
        title: 'From Neighborhood Store to National Movement',
        content: `Displays trace the growth of consumer cooperatives from humble neighborhood stores to a national network that transformed both retail and social life. During the early twentieth century, cooperative stores became cornerstones of a new social order built on democracy, equality, and mutual trust.

Families joined forces not only to secure fair prices and quality goods but also to gain a voice in the institutions that served them. This merging of economic practicality and civic empowerment became a defining feature of the Dutch cooperative tradition.`
      },
      virtualExperience: {
        title: 'The Story in Artefacts',
        content: `The museum’s collection captures this heritage in rich, tangible detail. Visitors can examine handwritten ledgers, membership books, vintage packaging, and cooperative signage. Each artifact speaks to the pride and perseverance of ordinary people acting together to improve their lives.

The founders believed that economic progress must be rooted in fairness, trust, education, and solidarity. This belief comes alive in every exhibit, from the neatly labeled tins to the photographs of shopkeepers, clerks, and customers whose livelihoods were intertwined.`,
        image: 'assets/images/sites_files/image021.jpg'
      },
      aditionalData: {
        title: 'A Building that Teaches by Design',
        content: `The museum itself is organized as a metaphor for cooperation. The ground floor, half home, half shop, represents self-help and neighbourly care. The upper floor, devoted to collective history and learning, embodies education, interdependence, and the cooperative principles.

The seven international cooperative principles are subtly woven into the museum’s structure and storytelling, expressing the movement’s enduring truth: that local roots and shared purpose can rise into a common good.`
      },
      aditionalData2: {
        title: 'The Setting and Its Spirit',
        content: `Located at Lange Haven 84, the museum sits gracefully beside Schiedam’s picturesque canal front, surrounded by the brick façades of merchants’ houses. The setting feels both intimate and grand, perfectly mirroring the museum’s message: that great social movements often begin in ordinary places, among ordinary people.

Each tour reveals how cooperation emerged as a quiet revolution—people helping people—long before “social enterprise” became a modern phrase.`
      },
      aditionalDat3: {
        title: 'A Living Lesson in Cooperation',
        content: `A visit to the Nationaal Coöperatie Museum is a meditation on enduring values that transcend time and geography. Within its modest walls, one discovers that cooperation is not merely a historical chapter; it is a living philosophy, a way of life built on participation, fairness, and shared prosperity.

Amid the timeless calm of Schiedam’s canals, the museum stands as both a house of memory and a beacon of renewal, a reminder that the cooperative idea remains as relevant today as it was over a century ago.`
      },
      aditionalDat4: {
        title: '',
        content: ``
      },
      aditionalDat5: {
        title: '',
        content: ``
      },
      learnMore: {
        title: 'Learn More',
        resources: [
          'https://cooperatie-museum.nl/'
        ]
      }
    }
  }
},
//Japan Site
{
  id: 'kagawa-toyohiko-museum',
  name: 'Naruto City Kagawa Toyohiko Memorial Museum: A Sanctuary of Cooperation and Compassion',
  siteName:'Naruto City Kagawa Toyohiko Memorial Museum: A Sanctuary of Cooperation and Compassion',
  coopYear: 2025,
  lat: 34.2007,
  lng: 134.6186,
  country: 'Japan',
  continent: 'Asia',
  type: 'tangible',
  content: {
    pageTitle: 'Naruto City Kagawa Toyohiko Memorial Museum: A Sanctuary of Cooperation and Compassion',
    pageSubtitle: 'Naruto City Kagawa Toyohiko Memorial Museum, Japan',
    mainImage: 'assets/images/sites_files/image023.jpg',
    thumbnails: [
      'assets/images/sites_files/sub-icon/image024.jpg',
    ],
    infoCard: {
      country: 'Japan',
      countryFlag: 'assets/images/sites_files/country-img/Japan.png',
      theme: 'Museum Celebrating Pioneers',
      entryYear: 2025,
      coordinates: '34.2007, 134.6186'
    },
    sections: {
      legacy: {
        title: 'A Visionary Remembered in Naruto',
        content: `In the tranquil coastal city of Naruto, in Tokushima Prefecture, stands a museum dedicated to one of Japan’s most inspiring figures, Kagawa Toyohiko (1888–1960). Opened in 2002, the museum preserves Kagawa’s writings, calligraphy, and personal effects, ensuring that his message of service and social justice continues to reach future generations.

Its modern, light-filled design mirrors the moral clarity and humility that defined its namesake, a man who believed that society could only be renewed through love, cooperation, and shared responsibility.`
      },
      criteria: {
        title: 'Featured Criteria ',
        items: [
          
           {
            heading: 'Criterion 1. Historical Significance',
            description: 'Kagawa’s work began in the slums of Kobe in the early 20th century, pioneering organized cooperation and empowerment as a tool to alleviate poverty.'
          },
          {
            heading: 'Criterion 2. Connection to Cooperative Pioneers or Communities',
            description: 'Dedicated to Kagawa Toyohiko, a Christian theologian and social reformer whose philosophy helped shape Japan’s early cooperative movement (consumer, agricultural, and credit unions).'
          },
         
         {
                heading: 'Criterion 11. Visibility and Symbolism',
                description: 'Sites shall enhance the visibility of cooperation in public spaces through monuments, plaques, murals, and symbolic interpretation integrated within broader heritage narratives.'
              }

        ]
      },
      community: {
        title: 'The Life of a Reformer and Humanitarian',
        content: `Kagawa Toyohiko’s story is one of remarkable moral courage and spiritual conviction. He rejected the comforts of privilege to live among the poor in the slums of Kobe. There, he worked side by side with laborers and families, seeking to alleviate poverty not through charity, but through organized cooperation and empowerment.

His philosophy was both simple and radical: that social justice could flourish only when people worked together in trust and equality. Through his efforts, Japan saw the birth of consumer cooperatives, agricultural co-ops, and credit unions—institutions that continue to serve millions today.`
      },
      virtualExperience: {
        title: 'A Space of Light, Learning, and Reflection',
        content: `The museum’s architecture captures the serenity and balance of its subject. Sunlight streams through wide glass panels, illuminating exhibits that trace Kagawa’s life and global influence. Visitors encounter handwritten manuscripts, letters, books, photographs, and personal items, each an artifact of a mind deeply committed to the well-being of others.

Kagawa’s influence also extended to education, labor organization, and health care. He founded schools, hospitals, and cooperatives guided by the principle of “love in action.”`,
        image: 'assets/images/sites_files/image023.jpg'
      },
      aditionalData: {
        title: 'The Spirit of Cooperation Made Visible',
        content: `The museum is more than a collection of relics; it is an invitation to reflection. Visitors can trace Kagawa’s elegant calligraphy, each brushstroke radiating the spiritual energy that underpinned his work. Letters and journals on display reveal his empathy for workers, farmers, and ordinary citizens.

Educational programs and special exhibitions continue his legacy, introducing new generations to the power of cooperation and social responsibility. Researchers and visitors alike find in its archives a wealth of material.`
      },
      aditionalData2: {
        title: 'A Moral Legacy for Modern Times',
        content: `For those who enter its calm, sunlit halls, the museum feels less like a monument and more like a sanctuary, a place where history, faith, and human solidarity converge. It reminds us that cooperation is not merely an economic concept, but a moral path, a way of organizing life around respect, equity, and compassion.

Kagawa’s teachings remain profoundly relevant in an age marked by division and uncertainty. His life stands as proof that one person’s vision of collective good can ignite a movement that transcends time and borders.

In the gentle rhythm of the Naruto tides and the quiet grace of the museum itself, Kagawa’s message endures: that true progress is born not of competition, but of people working hand in hand, guided by love, grounded in justice, and united in the cooperative spirit.
`
   

},
      aditionalDat3: {
        title: '',
        content: ``
      },
      aditionalDat4: {
        title: '',
        content: ``
      },
      aditionalDat5: {
        title: '',
        content: ``
      },
      learnMore: {
        title: 'Learn More',
        resources: [
          'https://www.kagawakan.com/'
        ]
      }
    }
  }
},
// Slovakia Site
{
  id: 'jurkovic-museum-slovakia',
  name: 'Co-operative Museum of Samuel Jurkovič –Slovakia’s House of Shared Purpose- Sobotište, Slovakia',
  siteName:'Co-operative Museum of Samuel Jurkovič, Sobotište, Slovakia',
  coopYear: 2025,
  lat: 48.7833,
  lng: 17.4333,
  country: 'Slovakia',
  continent: 'Europe',
  type: 'tangible',
  content: {
    pageTitle: 'Co-operative Museum of Samuel Jurkovič –Slovakia’s House of Shared Purpose- Sobotište, Slovakia',
    pageSubtitle: 'A Village That Sparked a Movement',
    mainImage: 'assets/images/sites_files/image025.jpg',
    thumbnails: [
      'assets/images/sites_files/sub-icon/image026.jpg',
    ],
    infoCard: {
      country: 'Slovakia',
      countryFlag: 'assets/images/sites_files/country-img/Slovakia.png',
      theme: 'Museum Cooperative Pioneers',
      entryYear: 2025,
      coordinates: '48.7833, 17.4333 '
    },
    sections: {
      legacy: {
        title: 'A Village That Sparked a Movement',
        content: `In the quiet Slovak village of Sobotište, far from the pace of modern cities, stands a museum that tells an extraordinary story,the Co-operative Museum of Samuel Jurkovič. Housed in a historic manor that once belonged to local elites, the building now celebrates a different kind of heritage: the power of ordinary people united by common purpose. Reconstructed to capture more than 160 years of cooperative history, the museum bridges past and present, reminding visitors that the ideals of trust, self-help, and shared prosperity remain as vital as ever.
At the heart of this story is Samuel Jurkovič (1796–1873), a visionary teacher, reformer, and social pioneer who founded one of Europe’s earliest credit cooperatives in Sobotište in 1845. Guided by his belief in solidarity, Jurkovič brought together local farmers and craftsmen to pool resources, support one another, and build stability through collective effort. His initiative laid the groundwork for Slovakia’s cooperative movement, transforming the economic lives of rural communities and inspiring generations to come.`
      },
      criteria: {
        title: 'Featured Criteria ',
        items: [
 {
                heading: 'Criterion 1. Historical Significance',
                description: 'Sites must be at least thirty (30) years old, preferably sixty (60), or directly associated with foundational events, milestones, or figures in the cooperative movement.'
              }
,

          {
            heading: 'Criterion 2. Connection to Cooperative Pioneers or Communities',
            description: 'Dedicated to Samuel Jurkovič, founder of one of Europe’s earliest credit cooperatives in 1845, establishing the foundation for Slovakia’s cooperative movement.'
          },
          {
            heading: 'Criterion 3. Archival, Architectural, or Symbolic Value',
            description: 'Housed in a historic manor, the building symbolizes the evolution of Slovak society from feudal hierarchy to democratic participation.'
          },
        ]
      },
      community: {
        title: 'Inside the Museum: History That Breathes',
        content: `Visitors entering the museum step into an atmosphere rich with memory. The ground-floor gallery welcomes them with a display of tangible relics,handwritten ledgers, photographs of cooperative assemblies, and tools of 19th- and early 20th-century trade.
These objects speak not only of economic innovation but of trust and mutual respect, the invisible forces that bound early cooperators together.
The exhibits are not static. Multimedia displays, ambient sounds, and interactive installations immerse visitors in the cooperative experience,voices from the past narrate stories of hope and endurance, while archival footage shows the evolution of cooperatives through industrialization, war, and social change. One section focuses on modernization, using audiovisual projections to illustrate how cooperatives adapted to new economic and technological realities while staying true to their founding principles.`
      },
      virtualExperience: {
        title: 'The Manor House and Its Meaning',
        content: `The museum’s home,the historic Sobotište manor,is itself a powerful metaphor for transformation. Once a seat of privilege, it now houses the history of a movement rooted in equality and shared progress. Its architecture evokes continuity and renewal, embodying the evolution of Slovak society from feudal hierarchy to democratic participation.
The juxtaposition of aristocratic walls and cooperative artifacts invites reflection: here, where power once concentrated in the few, the story of empowerment for the many now takes centre stage. From agricultural associations of the 19th century to the complex credit and consumer cooperatives of the 20th, the museum traces how collective organization became a foundation for regional identity and economic resilience.`,
        image: 'assets/images/sites_files/image025.jpg'
      },
      aditionalData: {
        title: 'A Living Classroom for All Generations',
        content: `More than a historical site, the Co-operative Museum of Samuel Jurkovič serves as a centre for education and dialogue. Its mission extends beyond preservation,it seeks to inspire participation. Through seminars, workshops, and interactive programs, the museum engages students, scholars, and practitioners from across Slovakia and beyond. It presents cooperation not as nostalgia, but as a living, adaptable strategy for today’s interconnected world.
Visitors learn the seven cooperative principles,voluntary membership, democratic control, economic participation, autonomy, education, cooperation among cooperatives, and concern for community,not as abstract ideals but as practical tools for collective progress. The museum’s programs challenge new generations to apply these principles in shaping sustainable, inclusive economies.`
      },
      aditionalData2: {
        title: 'A Timeless Lesson in Collective Strength',
        content: `Walking through the softly lit halls, one feels the continuity between past and present. The aged ledgers beside digital displays speak across time, uniting the ingenuity of Jurkovič’s first cooperators with the aspirations of today’s cooperative movement. The exhibits convey a simple but enduring truth: people working together can achieve more than they ever could alone.
The Co-operative Museum of Samuel Jurkovič is thus not only a repository of history,it is a living classroom, a mirror reflecting both heritage and hope. In Sobotište’s peaceful setting, surrounded by rolling hills and echoes of early cooperators, the museum reminds visitors that cooperation is not a relic of the past, but a timeless path toward dignity, equality, and mutual advancement.`
      },
      aditionalDat3: {
        title: '',
        content: ``
      },
      aditionalDat4: {
        title: '',
        content: ``
      },
      aditionalDat5: {
        title: '',
        content: ``
      },
      learnMore: {
        title: 'Learn More',
        resources: [
          'http://www.dusr.sk/museum.php'
        ]
      }
    }
  }
},

{
  id: 'adamant-food-coop',
  name: 'Adamant Food Co-op (1935), Adamant, Vermont (USA) - The oldest continuously operating food co-op in the United States',
  siteName:'Oldest Continuously Operating Food Co-op in the United States',
  coopYear: 2025,
  lat: 44.3167,
  lng: -72.5333,
  country: 'United States of America',
  continent: 'North America',
  type: 'tangible',
  content: {
    pageTitle: 'Adamant Food Co-op: Born from Necessity and Trust',
    pageSubtitle: 'The oldest continuously operating food co-op in the United States',
    mainImage: 'assets/images/sites_files/image027.jpg',
    thumbnails: [
      'assets/images/sites_files/sub-icon/image028.jpg',
     
    ],
    infoCard: {
      country: 'United States of America',
      countryFlag: 'assets/images/sites_files/country-img/america.png',
      theme: 'LandmarkFood Cooperative',
      entryYear: 2025,
      coordinates: '44.3167, -72.5333'
    },
    sections: {
      legacy: {
        title: 'Born from Necessity and Trust',
        content: `In the quiet crossroads of Adamant, Vermont, surrounded by forests, granite quarries, and winding country roads, stands a small red-painted building whose story is woven into nearly a century of community life. The Adamant Food Co-op, founded in 1935, emerged not from wealth or ambition, but from necessity and trust at the height of the Great Depression.
Eleven local families, facing economic hardship, each contributed five dollars,a small fortune in those days,to form a grocery cooperative. Their vision was simple yet profound: to survive through cooperation, not competition. What began as a collective effort to buy flour, sugar, and soap at fair prices quickly grew into a vital institution, embodying the cooperative ideals of fairness, shared responsibility, and democratic ownership.`
      },
      criteria: {
        title: 'Featured Criteria ',
        items: [
          {
                heading: 'Criterion 4. Active Cooperative Connection',
                description: 'Sites must either remain in operation as cooperatives or be explicitly dedicated to preserving and interpreting cooperative history.'
              }
,
          {
            heading: 'Criterion 9. Accessibility for All',
            description: 'Sites must guarantee accessibility to the public—physically, digitally, or through interpretive materials—and ensure inclusivity for all people regardless of age, gender, background, or ability.'
          }
,
         {
                heading: 'Criterion 11. Visibility and Symbolism',
                description: 'Sites shall enhance the visibility of cooperation in public spaces through monuments, plaques, murals, and symbolic interpretation integrated within broader heritage narratives.'
              }

        ]
      },
      community: {
        title: 'A Store that Became a Symbol',
        content: `The first version of the co-op was humble. It operated from the home of Minnie Horr, who also ran the village post office. Her small shop served as both a commercial and social space, a place where neighbors gathered to trade goods and goodwill. In 1940, the co-op purchased its own building for $600, securing a permanent home,and an enduring legacy.
Walking into the store today feels like stepping into living history. The wooden floorboards creak, the handwritten chalkboard signs display local produce and homemade goods, and the post office boxes still serve as a lifeline for residents, just as they did nearly ninety years ago. Every shelf and counter carries not only food but a story of continuity, resilience, and shared care.
What began as an effort to make daily necessities more affordable has evolved into something far deeper: a symbol of community endurance. The Adamant Food Co-op is now recognized as the oldest continuously operating food cooperative in the United States, a quiet yet powerful testament to the cooperative spirit.`
      },
      virtualExperience: {
        title: 'Sustaining Community Through Change',
        content: `While many small grocers have long since disappeared, the Adamant Co-op endures,adapting without abandoning its principles. Its strength lies not in capital but in people: members who volunteer their time, bake bread for the shelves, and gather annually to make collective decisions. Every act of participation reaffirms the co-op’s belief that business can be both sustainable and humane.
Its model has inspired more than sixty independent food cooperatives across the northeastern United States. Each of these communities, in its own way, carries forward Adamant’s lesson: that small-scale, member-owned enterprises can thrive through trust, transparency, and shared labor.`,
        image: 'assets/images/sites_files/image027.jpg'
      },
      aditionalData: {
        title: 'Rooted in Place, Guided by People',
        content: `To truly understand the co-op’s significance, one must look beyond its walls to the village of Adamant itself. This unincorporated community has long depended on mutual effort,neighbors cutting wood together, sharing harvests, and lending a hand when needed. The co-op reflects that same ethos, embodying the rhythm of rural interdependence.
Here, commerce and companionship intertwine. The store doubles as a community gathering space, hosting meetings, local events, and spontaneous conversations that knit the town together. Within these modest walls, the boundaries between economic exchange and social connection disappear; shopping becomes an act of belonging.`
      },
      aditionalData2: {
        title: 'A Living Example of Cooperation',
        content: `In an age dominated by global corporations and digital transactions, the Adamant Food Co-op stands as a quiet but enduring alternative. Its success is measured not in profits, but in trust, continuity, and belonging. It reminds visitors that cooperation is not a theory or a relic of the past,it is a living practice, sustained daily through the simple, human acts of sharing and participation.
Nearly a century after those first eleven families took a collective leap of faith, the co-op still thrives,proof that when communities choose cooperation over isolation, they not only preserve livelihoods but also nurture something rarer and more enduring: the spirit of togetherness.`
      },
      aditionalDat3: {
        title: '',
        content: ``
      },
      aditionalDat4: {
        title: '',
        content: ``
      },
      aditionalDat5: {
        title: '',
        content: ``
      },
      learnMore: {
        title: 'Learn More',
        resources: [
          'https://www.adamantcoop.org'
        ]
      }
    }
  }
},{
  id: 'coop-university-kenya',
  name: 'The Co-operative University of Kenya, Nurturing Knowledge Through Cooperation,Nairobi, Kenya',
  siteName:'Co-operative University of Kenya, Nairobi, Kenya',
  coopYear: 2025,
  lat: -1.3060,
  lng: 36.6853,
  country: 'Kenya',
  continent: 'Africa',
  type: 'tangible',
  content: {
    pageTitle: 'The Co-operative University of Kenya, Nurturing Knowledge Through Cooperation,Nairobi, Kenya',
    pageSubtitle: 'Roots of a Movement',
    mainImage: 'assets/images/sites_files/image029.jpg',
    thumbnails: [
      'assets/images/sites_files/sub-icon/image030.jpg',
    ],
    infoCard: {
      country: 'Kenya',
      countryFlag: 'assets/images/sites_files/country-img/Kenya.png',
      theme: 'EducationTraining Centre',
      entryYear: 2025,
      coordinates: '1.3060, 36.6853'
    },
    sections: {
      legacy: {
        title: 'Roots of a Movement',
        content: `Amid the green, open landscapes of Karen, on the outskirts of Nairobi, stands one of Africa’s most inspiring educational institutions , the Co-operative University of Kenya (CUK). Its history reaches back more than seventy years to 1952, when a small School of Co-operation was established to serve a young and rapidly evolving movement. At that time, cooperatives in Kenya were just beginning to take root, helping farmers, traders, and communities organize around shared economic and social goals.
From those modest beginnings, the school has grown into a national and continental leader in cooperative education, shaping generations of professionals dedicated to fairness, democracy, and shared prosperity. What began as a training center for cooperative managers has become a full-fledged university , a beacon of learning grounded in community empowerment.`
      },
      criteria: {
        title: 'Featured Criteria ',
        items: [
         {
                heading: 'Criterion 4. Active Cooperative Connection',
                description: 'Sites must either remain in operation as cooperatives or be explicitly dedicated to preserving and interpreting cooperative history.'
              }
,
          {
            heading: 'Criterion 6. Educational Mission',
            description: 'It is Africa’s flagship institution for cooperative education, ensuring that knowledge empowers communities and upholding the seven international cooperative principles.'
          },
          {
                heading: 'Criterion 7. Research and Knowledge Sharing',
                description: 'Dedicated researchers delve into the origins and evolution of the Desjardins Group, tracing its expansion from a modest savings cooperative in Lévis, Quebec, into one of the world’s leading cooperative financial institutions. Their work not only illuminates the past but also provides valuable insight into how cooperation and ethical finance can thrive in the modern economy.'
              }

        ]
      },
      community: {
        title: 'Growth and Transformation',
        content: `The institution’s journey mirrors Kenya’s own story of growth and transformation. From its early days as a training school under colonial administration, it evolved into the Co-operative College of Kenya, reflecting the country’s post-independence ambition to harness education for self-determination. Decades later, in recognition of its expanding mandate, it was granted a university charter , a milestone that affirmed its role as the intellectual home of the cooperative movement.
Through every phase of change, one guiding belief has remained constant: that knowledge must empower communities, not only individuals. The Co-operative University of Kenya continues to uphold this ideal, ensuring that education serves as both a professional foundation and a social mission.`
      },
      virtualExperience: {
        title: 'A Campus of Collaboration and Purpose',
        content: `Today, CUK’s campus in Karen blends academic excellence with the collaborative ethos that defines its heritage. Beneath the shade of acacia trees, students move between lecture halls, research centers, and seminar rooms alive with dialogue. Courses range from diploma to doctoral programs, combining business theory, economics, governance, and information technology with the enduring values of cooperation.
Every aspect of learning at CUK is underpinned by the seven international cooperative principles , voluntary membership, democratic control, economic participation, autonomy, education, inter-cooperation, and concern for community. These ideals are not confined to classrooms; they are lived through the university’s structure, teaching approach, and outreach initiatives.`,
        image: 'assets/images/sites_files/image029.jpg'
      },
      aditionalData: {
        title: 'Education That Builds Communities',
        content: `The Co-operative University of Kenya is not only a place of study , it is a national resource center. Its research, consultancy, and professional training programs reach deep into Kenya’s cooperative sector, which remains one of the most active and diverse in the world. Through partnerships with cooperative unions, savings and credit organizations (SACCOs), agricultural societies, and consumer cooperatives, the university transforms academic insight into practical progress.
Its graduates carry this impact outward. Across East Africa, CUK alumni lead institutions that empower farmers, finance small enterprises, and strengthen communities. In every county, their work demonstrates how cooperation can fuel sustainable development and inclusive growth.`
      },
      aditionalData2: {
        title: 'A Vision for the Future',
        content: `What distinguishes CUK is not only its academic quality but its commitment to relevance and purpose. In a time when higher education often prioritizes prestige or profit, CUK remains deeply rooted in service , a reminder that true learning is measured not by competition, but by contribution.
The university stands today as Africa’s flagship institution for cooperative education , a guardian of heritage and a guide for the future. From its humble foundation in 1952, it has carried forward a vision that unites intellect with empathy, innovation with integrity, and progress with people.
The Co-operative University of Kenya is more than an academic institution; it is a living example of how education, when infused with the cooperative spirit, can shape not only careers but communities , creating a future that is prosperous, just, and profoundly human.`
      },
      aditionalDat3: {
        title: '',
        content: ``
      },
      aditionalDat4: {
        title: '',
        content: ``
      },
      aditionalDat5: {
        title: '',
        content: ``
      },
      learnMore: {
        title: 'Learn More',
        resources: [
          'https://www.cuk.ac.ke'
        ]
      }
    }
  }
},
{
  id: 'levigliani-italy',
  name: 'Levigliani: A Living Model of Cooperative Stewardship in Tuscany, Italy',
  siteName:'Levigliani, Apuan Alps, Italy',
  coopYear: 2025,
  lat: 44.02135,
  lng: 10.28445,
  country: 'Italy',
  continent: 'Europe',
  type: 'tangible',
  content: {
    pageTitle: 'Levigliani: A Living Model of Cooperative Stewardship in Tuscany, Italy',
    pageSubtitle: 'A Hidden Community in the Apuan Alps',
    mainImage: 'assets/images/sites_files/image031.jpg',
    thumbnails: [
      'assets/images/sites_files/sub-icon/image032.jpg',
    ],
    infoCard: {
      country: 'Italy',
      countryFlag: 'assets/images/sites_files/country-img/Italy.png',
      theme: 'Landmark Cooperative Town',
      entryYear: 2025,
      coordinates: '44.0270, 10.3129 '
    },
    sections: {
      legacy: {
        title: 'A Hidden Community in the Apuan Alps',
        content: `High in the Apuan Alps of northern Tuscany, above the coastal plain of Forte dei Marmi, lies Levigliani, a small village in the municipality of Stazzema, province of Lucca, Italy. Modest in scale yet extraordinary in vision, Levigliani stands as one of Europe’s most remarkable examples of cooperative self-management , a living system that blends economic sustainability, environmental care, and community governance.
Surrounded by mountains of white marble and dense chestnut forests, the people of Levigliani have, for centuries, managed their land not as private property but as a shared trust. This enduring model of collective ownership and democratic management offers a compelling lesson in how communities can thrive when wealth, responsibility, and stewardship are distributed equally.`
      },
      criteria: {
        title: 'Featured Criteria ',
        items: [
          {
                heading: 'Criterion 4. Active Cooperative Connection',
                description: 'Sites must either remain in operation as cooperatives or be explicitly dedicated to preserving and interpreting cooperative history.'
              }
,
           {
            heading: 'Criterion 9. Accessibility for All',
            description: 'Sites must guarantee accessibility to the public—physically, digitally, or through interpretive materials—and ensure inclusivity for all people regardless of age, gender, background, or ability.'
          },
          {
                heading: 'Criterion 12. Sustainability and Inclusivity',
                description: 'Sites shall embody cooperative values of social and environmental sustainability, inclusivity, gender equity, youth engagement, and cultural diversity.'
              }
        ]
      },
      community: {
        title: 'From Communal Land to Collective Enterprise',
        content: `Levigliani’s cooperative legacy dates back to the late 18th century, when the Grand Duchy of Tuscany formally transferred the surrounding territory to its inhabitants. Since that time, the land has remained under a unique form of ownership known as comunità di beni , a community of goods held in undivided, collective possession. Every resident is a co-owner, with a shared stake in the local territory and resources.
This arrangement became the foundation for two major cooperatives that continue to define the village’s life. The first managed the extraction of marble from nearby quarries, part of the same geological formation as the renowned Carrara marble. But unlike most quarrying operations in Italy, Levigliani’s residents refused to hand over their resources to external companies. Instead, they organized themselves as worker-owners, ensuring that the benefits of the marble trade , income, employment, and decision-making , stayed within the community.`
      },
      virtualExperience: {
        title: 'Reinventing Cooperation for a New Era',
        content: `As the marble industry declined in the late 20th century, Levigliani once again adapted , this time looking to tourism, culture, and environmental preservation as new sources of collective prosperity. In 2001, the community established the Cooperativa Sviluppo e Futuro Levigliani (“Development and Future Cooperative”), marking a new chapter in the village’s ongoing experiment in self-management.
The cooperative’s mission was visionary: to manage Levigliani’s natural, historical, and cultural heritage as a unified system that benefits everyone. Today, it oversees several key facilities and initiatives:
·       Antro del Corchia, one of Europe’s most extensive karst cave systems, now open to the public through guided tours.
·       Two local museums, chronicling the history of marble extraction and daily village life.
·       A restaurant and visitor services, offering hospitality rooted in local culinary traditions.
·       A transport network, linking the village with the cave and surrounding natural attractions.
A portion of the cooperative’s revenue is paid to the Community of Goods, which still owns the land collectively. These funds are reinvested in infrastructure, cultural programs, and youth employment, helping to sustain both the landscape and the population , a rare achievement for a remote Italian mountain village.`,
        image: 'assets/images/sites_files/image031.jpg'
      },
      aditionalData: {
        title: 'A Model of Democratic Economics',
        content: `Levigliani’s cooperative system represents practical democracy in action. It exemplifies the principles championed by Nobel laureate Elinor Ostrom, who demonstrated how communities can successfully manage shared resources through trust, transparency, and mutual responsibility. Rather than extracting wealth, Levigliani circulates it , turning local assets into enduring community value.
This living experiment shows that cooperation is not a relic of the past but a strategy for the future. In Levigliani, social cohesion, environmental stewardship, and economic independence coexist in harmony. The village stands as a model for how human-scale economies can flourish when people choose to act not as competitors, but as co-owners of their collective destiny.
In every sense, Levigliani is more than a village , it is a living cooperative, proof that when communities work together, they can carve not only marble, but also a sustainable path through time itself.
`

},
      aditionalData2: {
        title: '',
        content: ``
      },
      aditionalDat3: {
        title: '',
        content: ``
      },
      aditionalDat4: {
        title: '',
        content: ``
      },
      aditionalDat5: {
        title: '',
        content: ``
      },
      learnMore: {
        title: 'Learn More',
        resources: [
          'https://www.coopsviluppoefuturolevigliani.it/index.php'
        ]
      }
    }
  }
},
{
  id: 'kibbutz-degania-alef',
  name: 'Kibbutz Degania Alef: The Mother of the Kibbutzim',
  siteName:'Kibbutz Degania Alef, Sea of Galilee, Israel',
  coopYear: 2025,
  lat: 32.7080,
  lng: 35.5747,
  country: 'Israel',
  continent: 'Asia',
  type: 'tangible',
  content: {
    pageTitle: 'Kibbutz Degania Alef: The Mother of the Kibbutzim',
    pageSubtitle: 'The Birth of a Collective Dream',
    mainImage: 'assets/images/sites_files/image033.jpg',
    thumbnails: [
      'assets/images/sites_files/sub-icon/image034.jpg',
      'assets/images/sites_files/sub-icon/image035.jpg',
    ],
    infoCard: {
      country: 'Israel',
      countryFlag: 'assets/images/sites_files/country-img/Israel.png',
      theme: 'Landmark First Kibbutz',
      entryYear: 2025,
      coordinates: '32.7247, 35.5700'
    },
    sections: {
      legacy: {
        title: 'The Birth of a Collective Dream',
        content: `On the southern shores of the Sea of Galilee, surrounded by fertile fields and the quiet flow of the Jordan River, stands Kibbutz Degania Alef , a place where an idea took root and became a movement. Founded in 1910, Degania Alef is widely known as the first kibbutz, the “mother of the kibbutzim,” and a living embodiment of what can emerge when human beings commit to building their future together on the foundations of equality, shared labor, and trust.
In the early years of the twentieth century, a small group of Jewish pioneers arrived in the Jordan Valley, driven by a vision of renewal and community. They leased a stretch of land near the outlet of the Jordan River and began living and working collectively. For them, the kibbutz was not merely a farm but an experiment in human solidarity , a society where everyone contributed according to ability and received according to need. From this modest beginning, on a few barren acres, grew an entire network of cooperative communities that would shape the social and agricultural landscape of Israel.`
      },
      criteria: {
        title: 'Featured Criteria ',
        items: [
          {
            heading: 'Criterion 1. Historical Significance',
            description: 'Founded in 1910, Degania Alef is the first kibbutz, or "mother of the kibbutzim," representing a pioneering collective experiment in equality and shared labor.'
          },
          {
                heading: 'Criterion 3. Archival, Architectural, or Symbolic Value',
                description: 'Represents milestones in cooperative development. Preserves stories, traditions, or knowledge tied to cooperative evolution.'
              }
,
{
                heading: 'Criterion 11. Visibility and Symbolism',
                description: 'Sites shall enhance the visibility of cooperation in public spaces through monuments, plaques, murals, and symbolic interpretation integrated within broader heritage narratives.'
              }

        ]
      },
      community: {
        title: 'Struggle and Perseverance in the Galilee',
        content: `The pioneers’ early years were marked by immense hardship. They faced disease, floods, and isolation, and contended daily with the challenge of transforming swampy, arid soil into fertile land. With determination and mutual aid, they drained wetlands, built shelters, and planted the seeds of a new life. Every act of labor was collective, every harvest shared.
Their perseverance paid off. Over time, Degania Alef flourished into a thriving agricultural settlement producing grain, dairy, vegetables, and fish. The kibbutz became a model of self-reliance and cooperation, inspiring the creation of hundreds of other kibbutzim across the country.
When the State of Israel was founded in 1948, Degania Alef stood as a symbol of courage and community spirit. During the War of Independence, its members famously repelled a Syrian tank attack , an event that cemented its place in national memory as a site of both resistance and resilience.`
      },
      virtualExperience: {
        title: 'A Cultural and Human Landmark',
        content: `Beyond its economic and historical significance, Degania Alef is deeply woven into Israel’s cultural and intellectual heritage. It was home to the poet Rachel Bluwstein, whose lyrical reflections on love, labor, and landscape captured the heart of early settlement life, and to Moshe Dayan, who would later become one of the nation’s most prominent military figures.
Through the decades, the kibbutz has remained not only a physical community but also a symbolic space , one that embodies the ongoing dialogue between tradition and change. While modern economic realities have led many kibbutzim to evolve, Degania Alef continues to uphold its founding ethos: collective responsibility, equality, and respect for the land.`,
        image: 'assets/images/sites_files/image033.jpg'
      },
      aditionalData: {
        title: 'A Living Heritage of Cooperation',
        content: `Visitors to Degania today can explore the Degania Heritage Site and the Founders’ Museum, where original buildings, photographs, and personal artifacts bring the story of the first settlers to life. Walking through these spaces, one can almost hear the echoes of early debates, songs, and shared meals , the heartbeat of a community determined to prove that cooperation could be a way of life.
Kibbutz Degania Alef remains a living testament to the power of shared vision. It shows how human beings, through trust and collaboration, can transform barren ground into a flourishing society. Its story transcends geography and politics, offering a universal lesson: that progress does not begin with wealth or power, but with the courage to work together in hope.`
      },
      aditionalData2: {
        title: 'The Spirit Endures',
        content: `More than a century since its founding, Degania Alef continues to inspire. In an age often defined by individualism and disconnection, this small community on the Sea of Galilee reminds the world that cooperation , sustained by faith in people and purpose , can still shape a more humane and meaningful future.
In the words of its founders, “We came not to take, but to build.” Degania Alef stands as the enduring proof that such a vision can transform not only land but lives , one collective act at a time.`
      },
      aditionalDat3: {
        title: '',
        content: ``
      },
      aditionalDat4: {
        title: '',
        content: ``
      },
      aditionalDat5: {
        title: '',
        content: ``
      },
      learnMore: {
        title: 'Learn More',
        resources: [
          'https://www.degania.org.il/'
        ]
      }
    }
  }
},

{
  id: 'holy-land-handicraft-coop',
  name: 'Holy Land Handicraft Cooperative Society: Crafting Heritage and Community in Palestine',
  siteName:'Holy Land Handicraft Cooperative Society, Beit Sahour, Palestine',
  coopYear: 2025,
  lat: 31.7067,
  lng: 35.2167,
  country: 'Palestine',
  continent: 'Asia',
  type: 'tangible',
  content: {
    pageTitle: 'Holy Land Handicraft Cooperative Society: Crafting Heritage and Community in Palestine',
    pageSubtitle: 'Craft, Culture, and Community in Beit Sahour',
    mainImage: 'assets/images/sites_files/image036.jpg',
    thumbnails: [
      'assets/images/sites_files/sub-icon/image037.jpg',
    ],
    infoCard: {
      country: 'Palestine',
      countryFlag: 'assets/images/sites_files/country-img/Palestine.jpg',
      theme: 'Insipiring Cooperative Enterprise',
      entryYear: 2025,
      coordinates: '31.7067, 35.2167 '
    },
    sections: {
      legacy: {
        title: 'Craft, Culture, and Community in Beit Sahour',
        content: `In the hillside town of Beit Sahour, near Bethlehem in the West Bank, a quiet but enduring movement of artisanship and solidarity has taken root. Since its founding in 1981, the Holy Land Handicraft Cooperative Society (HLHCS) has been dedicated to preserving Palestine’s centuries-old craft traditions while providing artisans with dignified, sustainable livelihoods.
At its heart, the cooperative exists to protect not only traditional craftsmanship , olive-wood carving, mother-of-pearl inlay, ceramics, and embroidery , but also the social fabric that sustains these practices. Each piece produced is a reflection of both skill and spirit, a tangible expression of a people’s resilience and creativity. The HLHCS’s mission is grounded in fair trade, transparency, and community empowerment, ensuring that cultural heritage thrives hand in hand with economic justice.`
      },
      criteria: {
        title: 'Featured Criteria ',
        items: [
          {
            heading: 'Criterion 5. Living Practice of Cooperation',
            description: 'Founded in 1981, it is a living cooperative dedicated to preserving centuries-old craft traditions (olive-wood carving, mother-of-pearl inlay) while ensuring sustainable livelihoods for artisans.'
          },
          {
            heading: 'Criterion 8. Cultural Expression',
            description: 'The cooperative protects Palestine’s cultural heritage, with each piece reflecting the skill, resilience, and identity of the local community, keeping traditions alive against mass production.'
          },
          {
            heading: 'Criterion 10. Preservation and Safeguarding',
            description: 'Sites shall commit to the safeguarding of cooperative records, artifacts, oral traditions, and buildings through sustainable conservation strategies.'
          }

        ]
      },
      community: {
        title: 'A Legacy Carved in Olive Wood',
        content: `The crafts nurtured by the HLHCS carry deep historical roots. Olive-wood carving in the Bethlehem region traces back to early Christian pilgrimage routes. The art of mother-of-pearl inlay, introduced in the 17th century by Franciscan monks, later became a hallmark of Palestinian craftsmanship.
Today, these traditions live on in the cooperative’s workshops. Artisans collect pruned branches from olive trees, ensuring that the trees themselves , many centuries old , continue to thrive. From this wood, they fashion religious icons, nativity scenes, jewelry, kitchenware, and home décor. Each item carries the warmth of local wood, the continuity of heritage, and the quiet pride of the maker’s hand.`
      },
      virtualExperience: {
        title: 'Fair Trade and Social Responsibility',
        content: `From its inception, the Holy Land Handicraft Cooperative Society has embraced fair trade principles as its moral and economic foundation. It is a guaranteed member of the World Fair Trade Organization (WFTO), committed to ethical production, equitable wages, and environmentally responsible practices.
The cooperative operates as a network of around 35 member workshops and several collaborating enterprises across the Bethlehem–Beit Sahour region. Together, these artisans support a community of approximately 2,000 people, including women, youth, and persons with disabilities. Through their collective work, families are able to remain in their homeland, sustaining not only livelihoods but a shared sense of identity.
By eliminating exploitative middlemen and ensuring transparency in pricing and production, HLHCS allows artisans to maintain control over their craft and creative direction. This structure transforms the act of making into a form of self-determination , a quiet assertion of dignity in the face of economic and social challenges.`,
        image: 'assets/images/sites_files/image036.jpg'
      },
      aditionalData: {
        title: 'Beyond Commerce: A Living Ecosystem',
        content: `The cooperative’s impact extends far beyond the objects it sells. Its workshop spaces and community programs act as hubs of cultural continuity, where apprentices learn traditional techniques and innovation coexists with heritage. Visitors who step into the co-op’s shop in Beit Sahour or purchase its goods abroad are not simply buying souvenirs , they are participating in a living network of artistry, resilience, and cooperation.
HLHCS products reach both local and international markets, including tourist centers and fair-trade networks across Europe, North America, and Asia. Yet behind every exported item lies a local story , of artisans working together, of families supported, of cultural heritage kept alive against the tides of globalized mass production.`
      },
      aditionalData2: {
        title: 'A Model for Sustainable Heritage',
        content: `In a world increasingly dominated by mechanized and anonymous production, the Holy Land Handicraft Cooperative Society stands as a beacon of what community-based economies can achieve. Its model intertwines economic sustainability with cultural preservation, proving that tradition and modern enterprise need not be at odds.
The cooperative’s vision reaches beyond commerce to embrace hope, continuity, and collective dignity. It demonstrates that heritage, when supported by cooperation and fairness, can remain both productive and contemporary , a source of identity, livelihood, and pride.
Through the work of its artisans, the HLHCS tells a story that transcends borders: that when people organize around shared values and craftsmanship, they create more than products , they create a living testament to endurance, creativity, and community.`
      },
      aditionalDat3: {
        title: '',
        content: ``
      },
      aditionalDat4: {
        title: '',
        content: ``
      },
      aditionalDat5: {
        title: '',
        content: ``
      },
      learnMore: {
        title: 'Learn More',
        resources: [
          'https://www.hlhcs.org'
        ]
      }
    }
  }
},
{
  id: 'marinaleda-spain',
  name: 'Marinaleda – A Cooperative Vision in Andalusia',
  siteName:'Marinaleda, Andalusia, Spain',
  coopYear: 2025,
  lat: 37.3670,
  lng: -5.1380,
  country: 'Spain',
  continent: 'Europe',
  type: 'tangible',
  content: {
    pageTitle: 'Marinaleda – A Cooperative Vision in Andalusia',
    pageSubtitle: 'A Vision of Justice in the Andalusian Heartland',
    mainImage: 'assets/images/sites_files/image038.jpg',
    thumbnails: [
      'assets/images/sites_files/sub-icon/image039.jpg'
    ],
    infoCard: {
      country: 'Spain',
      countryFlag: 'assets/images/sites_files/country-img/Spain.png',
      theme: 'Cooperative Enterprise Project',
      entryYear: 2025,
      coordinates: '37.3670, -5.1380'
    },
    sections: {
      legacy: {
        title: 'A Vision of Justice in the Andalusian Heartland',
        content: `In the province of Seville, deep within the fertile plains of Andalusia, lies Marinaleda,a small town that has become an international symbol of social innovation and cooperative living. Since the late 1970s, this community of just over 2,700 residents has challenged the conventional logic of capitalism by pursuing a radically different vision: one rooted in justice, equality, and shared prosperity.
Under the leadership of Juan Manuel Sánchez Gordillo, a local schoolteacher turned mayor, the people of Marinaleda resolved that poverty and unemployment,once endemic in rural Andalusia,would no longer define their destiny. In a region historically dominated by vast estates owned by absentee landlords, local farm workers organized, protested, and occupied idle land. Their demand was simple yet revolutionary: that those who worked the land should also own and benefit from it.
After years of peaceful struggle, their persistence paid off. The El Humoso estate, once a symbol of inequality, was transferred to the community for collective use. This victory became the foundation for Marinaleda’s cooperative economy,a living model of grassroots democracy and shared ownership.`
      },
      criteria: {
        title: 'Featured Criteria ',
        items: [
          {
            heading: 'Criterion 5. Living Practice of Cooperation',
            description: 'Marinaleda is a radical living model of grassroots democracy and shared ownership, where the farming cooperative employs most of the workforce and profits are shared equally.'
          },
          {
                heading: 'Criterion 8. Community and Member Engagement',
                description: 'Sites shall be embedded within their communities, ensuring active participation, ownership, and collective stewardship by local members and residents.'
              }
,
          {
            heading: 'Criterion 11. Democratic Governance and Policy',
            description: 'Major decisions, from the town budget to infrastructure, are debated and decided in open assemblies, ensuring direct democracy and collective accountability.'
          },
        ]
      },
      community: {
        title: 'Building a Cooperative Economy',
        content: `The transformation that followed was nothing short of remarkable. In a province once plagued by some of the highest unemployment rates in Spain, Marinaleda’s residents established a farming cooperative that today employs most of the town’s workforce.
The land is farmed collectively, producing peppers, artichokes, beans, and olives,all processed in community-owned factories.
Profits are shared equally, and decisions about production, wages, and future projects are made in public assemblies, where every voice matters. There are no private bosses, and no hierarchy of wealth. The guiding principle is not accumulation, but collective stability and dignity,a local economy designed to sustain life, not exploit it.`
      },
      virtualExperience: {
        title: 'Housing, Employment, and Direct Democracy',
        content: `Marinaleda’s cooperative vision extends well beyond its agricultural fields. The town’s approach to housing is perhaps one of its most innovative achievements. Land remains collectively owned, and residents build their own homes with municipal support. They contribute labor and pay a small monthly fee, but cannot sell or speculate on the property. This model ensures that housing remains affordable and secure, rooted in the idea that everyone deserves a place to live,not a commodity to trade.
Employment, too, follows the cooperative ethos. The town strives for full employment, offering equal pay and collective decision-making through assemblies. In a region long characterized by precarious work and rural poverty, Marinaleda has succeeded in virtually eliminating unemployment through solidarity and shared responsibility.
At the heart of this system lies direct democracy. Major decisions,from the town budget to infrastructure projects,are debated and decided in open assemblies. Every resident has the right to speak, to question, and to shape the future of their community. It is politics not as performance, but as participation.`,
        image: 'assets/images/sites_files/image038.jpg'
      },
      aditionalData: {
        title: 'A Living Example of Possibility',
        content: `Today, Marinaleda continues to attract attention from scholars, journalists, and visitors around the world. Its streets, adorned with murals celebrating peace, labor, and equality, reflect a deep sense of pride in what the community has achieved. While not immune to challenges and change, the town’s cooperative model remains a living example of what can happen when people organize around shared purpose instead of competition.
Here, land and housing are rights,labor is dignified, and equality is a daily practice, not a slogan. Marinaleda’s story is both local and universal,a testament to human imagination and the power of collective will.
In an era marked by inequality, social fragmentation, and ecological strain, this small Andalusian town offers a powerful reminder: another way of living is possible. Through cooperation, participation, and courage, the people of Marinaleda have turned what was once a dream into a durable, working reality,a village that continues to inspire the world by proving that fairness and solidarity can indeed build a thriving society.
`
      },
      aditionalData2: {
        title: '',
        content: ``
      },
      aditionalDat3: {
        title: '',
        content: ``
      },
      aditionalDat4: {
        title: '',
        content: ``
      },
      aditionalDat5: {
        title: '',
        content: ``
      },
      learnMore: {
        title: 'Learn More',
        resources: [
          'https://www.marinaleda.coop'
        ]
      }
    }
  }
}
,
{
  id: 'arctic-coop-canada',
  name: 'Arctic Co-operatives Limited: A Northern Model of Self-Reliance and Shared Strength',
  siteName:'Arctic Co-operatives Limited, Northern Canada',
  coopYear: 2025,
  lat: 49.8954,
  lng: -97.1385,
  country: 'Canada',
  continent: 'North America',
  type: 'tangible',
  content: {
    pageTitle: 'Arctic Co-operatives Limited: A Northern Model of Self-Reliance and Shared Strength',
    pageSubtitle: 'Cooperation Rooted in Tradition',
    mainImage: 'assets/images/sites_files/image041.jpg',
    thumbnails: [
      'assets/images/sites_files/sub-icon/image040.jpg',
     
    ],
    infoCard: {
      country: 'Canada',
      countryFlag: 'assets/images/sites_files/country-img/canada.png',
      theme: 'Inuit, Metis FirstNations',
      entryYear: 2025,
      coordinates: '49.8954, -97.1385 '
    },
    sections: {
      legacy: {
        title: 'Cooperation Rooted in Tradition',
        content: `Across the vast and icy expanse of northern Canada , from Nunavut and the Northwest Territories to the Yukon , lies a network of communities bound by cooperation, culture, and resilience. Since its founding in 1972, Arctic Co-operatives Limited (ACL) has served as a unifying federation for more than thirty Inuit, Métis, and First Nations co-operatives, creating one of the most distinctive and enduring examples of community-owned enterprise in the world.
Yet, the story of Arctic Co-operatives begins long before its formal incorporation. For generations, Indigenous peoples of the North practiced mutual aid, collective stewardship, and democratic decision-making , systems that ensured survival in some of the planet’s most challenging environments. When the cooperative model arrived, it was a natural continuation of these deep-rooted traditions of sharing and reciprocity.`
      },
      criteria: {
        title: 'Featured Criteria ',
        items: [
         {
                heading: 'Criterion 4. Active Cooperative Connection',
                description: 'Sites must either remain in operation as cooperatives or be explicitly dedicated to preserving and interpreting cooperative history.'
              }
,
         {
            heading: 'Criterion 9. Accessibility for All',
            description: 'Sites must guarantee accessibility to the public—physically, digitally, or through interpretive materials—and ensure inclusivity for all people regardless of age, gender, background, or ability.'
          }
,
{
                heading: 'Criterion 12. Sustainability and Inclusivity',
                description: 'Sites shall embody cooperative values of social and environmental sustainability, inclusivity, gender equity, youth engagement, and cultural diversity.'
              }

        ]
      },
      community: {
        title: 'From Art and Craft to Economic Empowerment',
        content: `The earliest local co-ops emerged during the 1950s and 1960s, often centered around Inuit and Dene arts and crafts. These first cooperatives gave artists a way to market their carvings, prints, and handmade goods directly to buyers, ensuring that income remained in their own communities. Out of these small initiatives grew a broader alliance: Arctic Co-operatives Limited, which allowed northern co-ops to pool resources, share expertise, and build collective strength.
Over time, ACL developed into a service federation that coordinates bulk purchasing, transportation, financial management, insurance, marketing, and training , essential services in a region where remoteness, isolation, and extreme weather make logistics both difficult and expensive. Through shared infrastructure and collective negotiation, Arctic Co-operatives has enabled northern communities to access goods and services on equitable terms, transforming cooperation into a tool of self-determination.`
      },
      virtualExperience: {
        title: 'Modern Co-ops for Northern Resilience',
        content: `Today, the member co-ops extend far beyond the arts. They operate retail stores, hotels, construction firms, cable and internet providers, outfitters, and property rental services, forming the economic backbone of dozens of Arctic towns. Each cooperative remains locally owned and democratically governed, ensuring that decisions align with the priorities and values of the people they serve rather than distant investors.
Through these enterprises, Arctic Co-operatives has strengthened local economies while preserving Indigenous traditions of collective leadership and mutual accountability. The federation’s commitment to training and education ensures that leadership and management skills are developed within the communities themselves , an investment in both capacity and confidence.`,
        image: 'assets/images/sites_files/image041.jpg'
      },
      aditionalData: {
        title: 'Honoring Northern Art and Cultural Identity',
        content: `Even as it has diversified economically, Arctic Co-operatives has never lost sight of its cultural roots. Its art-marketing division, Canadian Arctic Producers, has represented and promoted Inuit and Dene art for more than fifty years, helping northern artists reach audiences across the globe. In Yellowknife, its Northern Images Gallery continues this work, showcasing carvings, prints, textiles, and jewelry that tell the living story of Arctic peoples , their connection to the land, their creative expression, and their enduring spirit.
Through these cultural ventures, ACL preserves not only livelihoods but identity , ensuring that northern art remains both economically viable and culturally authentic.`
      },
      aditionalData2: {
        title: 'A Living Example of Indigenous Cooperation',
        content: `Arctic Co-operatives Limited stands as a living testament to what can be achieved when economic development and cultural preservation move hand in hand. It demonstrates that progress does not require abandoning tradition, but can instead be built upon it.
By combining Indigenous principles of sharing, stewardship, and self-governance with modern cooperative structures, ACL has created a model of economic democracy uniquely suited to the North.
In a world where communities often struggle to balance prosperity with heritage, Arctic Co-operatives offers a powerful alternative. It shows that cooperation , grounded in culture and guided by community , can sustain both people and place. From its headquarters in Winnipeg to the most remote Arctic village, ACL continues to embody the spirit of northern resilience: a vision ofshared prosperity, cultural pride, and collective strength that inspires cooperative movements around the world.`
      },
      aditionalDat3: {
        title: '',
        content: ``
      },
      aditionalDat4: {
        title: '',
        content: ``
      },
      aditionalDat5: {
        title: '',
        content: ``
      },
      learnMore: {
        title: 'Learn More',
        resources: [
          'https://www.arctic.coop'
        ]
      }
    }
  }
},
{
  id: 'arbejdermuseet-denmark',
  name: 'Arbejdermuseet – The Workers’ Assembly Hall, Copenhagen, Denmark: A Monument to Solidarity and Collective Power',
  siteName:'The Workers’ Assembly Hall (Arbejdermuseet), Copenhagen, Denmark',
  coopYear: 2025,
  lat: 55.6848,
  lng: 12.5703,
  country: 'Denmark',
  continent: 'Europe',
  type: 'tangible',
  content: {
    pageTitle: 'Arbejdermuseet – The Workers’ Assembly Hall, Copenhagen, Denmark',
    pageSubtitle: 'A Monument to Solidarity and Collective Power',
    mainImage: 'assets/images/sites_files/image042.jpg',
    thumbnails: [
      'assets/images/sites_files/sub-icon/image043.jpg'
    ],
    infoCard: {
      country: 'Denmark',
      countryFlag: 'assets/images/sites_files/country-img/Denmark.png',
      theme: 'Landmark Meeting Place',
      entryYear: 2025,
      coordinates: '55.6761, 12.5683 '
    },
    sections: {
      legacy: {
        title: 'A Landmark Born of the People',
        content: `In the heart of Copenhagen, amidst the elegant architecture and cobbled streets, stands a building that tells one of the most powerful stories of Europe’s social transformation. The Workers’ Assembly Hall , completed in 1879 , was the first building in Northern Europe to be owned collectively by workers themselves. It was not simply a hall; it was a declaration. A statement carved in brick and timber that solidarity, not subservience, could shape the future.
The late 19th century was a period of intense industrialization in Denmark. Urban workers toiled long hours under difficult conditions, with little say in their political or economic lives. Yet within that hardship grew the seeds of change. Trade unions, cooperative societies, and mutual aid associations began to form, guided by principles of equality, democracy, and self-help. It was from this crucible of struggle and hope that the idea of a workers’ hall , a space built by the people, for the people , emerged.`
      },
      criteria: {
        title: 'Featured Criteria ',
        items: [

          {
            heading: 'Criterion 1. Historical Significance',
            description: 'The Assembly Hall was the central platform where Denmark’s early cooperative movement found its footing, helping to fuse the labour movement and the cooperative sector into a single progressive force.'
          },
                    {
            heading: 'Criterion 3. Archival, Architectural, or Symbolic Value',
            description: 'Completed in 1879, it was the first building in Northern Europe collectively owned by workers, serving as a powerful architectural symbol of solidarity and a sanctuary for the early labour and cooperative movements.'
          },
                    {
            heading: 'Criterion 9. Accessibility for All',
            description: 'Sites must guarantee accessibility to the public—physically, digitally, or through interpretive materials—and ensure inclusivity for all people regardless of age, gender, background, or ability.'
          }

        ]
      },
      community: {
        title: 'A Building Raised by Workers, for Workers',
        content: `The Workers’ Assembly Hall was financed entirely through small contributions collected from local unions and cooperative societies. Thousands of ordinary workers , carpenters, tailors, bakers, and bricklayers , pooled their limited means to purchase land and construct the building themselves. Every wall, beam, and stone embodied their labour and their belief in collective strength.
When the hall finally opened its doors in 1879, it became a sanctuary for education, organizing, and empowerment. Here, workers gathered to debate politics, form cooperatives, celebrate May Day, and discuss strategies for social reform. The building was more than a meeting space , it was a symbol of victory, proof that collective ownership could be real and transformative.`
      },
      virtualExperience: {
        title: 'A House of Democracy and Cooperation',
        content: `Inside these walls, Denmark’s early cooperative movement found its footing. Consumer associations, workers’ bakeries, dairies, and credit co-ops used the Assembly Hall as a common platform for coordination and public meetings. The hall served as a unifying space for the labour movement and the cooperative sector, helping to fuse them into a single progressive force for social change.
Over time, it earned a reputation as a “house of democracy”, a place where workers learned to govern not only their unions and enterprises but their futures. The discussions and alliances forged here helped lay the groundwork for what would become one of the most advanced welfare states and cooperative economies in the world.`,
        image: 'assets/images/sites_files/image042.jpg'
      },
      aditionalData: {
        title: 'From Meeting Hall to National Museum',
        content: `As the 20th century unfolded, Denmark’s cooperative model flourished, spreading across industries and communities. The Assembly Hall remained at the heart of this transformation , hosting meetings, lectures, concerts, and rallies that defined the social and political life of the working class.
In 1982, the historic building began a new chapter as the Workers’ Museum (Arbejdermuseet) , the national museum of labour and cooperative history. Today, visitors who step through its grand entrance encounter union banners, co-op exhibits, posters, and artifacts that trace more than 140 years of collective struggle and achievement. The Great Hall, restored to its original 19th-century splendor, stands as both a physical and emotional reminder of the era when workers first claimed a space of their own.`
      },
      aditionalData2: {
        title: 'A Living Heritage of Cooperation',
        content: `The Workers’ Assembly Hall is more than a relic , it is a living heritage site, a place where history continues to inform civic life and cultural dialogue. As the first worker-owned public building in Northern Europe, it remains a cornerstone of Denmark’s identity as a nation built on trust, participation, and equality.
From its origins as a meeting hall for artisans and labourers to its present role as a national museum, the building tells a timeless story: that cooperation can create not only enterprises but enduring institutions, capable of inspiring generations.
Standing in the heart of Copenhagen, the Workers’ Assembly Hall is both a monument and a message , a testament to what ordinary people can achieve when they stand together, and a reminder that democracy, in its truest form, begins with shared ownership and collective hope.`
      },
      aditionalDat3: {
        title: '',
        content: ``
      },
      aditionalDat4: {
        title: '',
        content: ``
      },
      aditionalDat5: {
        title: '',
        content: ``
      },
      learnMore: {
        title: 'Learn More',
        resources: [
          'https://www.arbejdermuseet.dk'
        ]
      }
    }
  }
}
,
{
  id: 'rochdale-road-singapore',
  name: 'Rochdale Road, Thrift Drive and Kadayanallur Street, Singapore: A Living Trace of Cooperative Vision',
  siteName:'Rochdale Road, Singapore',
  coopYear: 2025,
  lat: 1.3435,
  lng: 103.8840,
  country: 'Singapore',
  continent: 'Asia',
  type: 'tangible',
  content: {
    pageTitle: 'Rochdale Road, Thrift Drive and Kadayanallur Street, Singapore: A Living Trace of Cooperative Vision',
    pageSubtitle: 'An Early Experiment in Collective Housing',
    mainImage: 'assets/images/sites_files/image044.jpg',
    thumbnails: [
      'assets/images/sites_files/sub-icon/image045.jpg',
    ],
    infoCard: {
      country: 'Singapore',
      countryFlag: 'assets/images/sites_files/country-img/Singapore.png',
      theme: 'Landmark International Cooperation',
      entryYear: 2025,
      coordinates: '1.3533, 103.8829'
    },
    sections: {
      legacy: {
        title: 'An Early Experiment in Collective Housing',
        content: `In the Hougang–Paya Lebar district of Singapore, a quiet residential lane named Rochdale Road carries within it a rare echo of the nation’s cooperative beginnings. While the city-state has transformed into a landscape of high-rise apartments and meticulously planned urban living, this modest street remains a tangible reminder of a time when cooperation, not corporations, was the driving force behind home ownership.
Rochdale Road fronts what was once known as the Government Co-operative Housing Estate, a pioneering development built for civil servants in the mid-twentieth century. The project was spearheaded by the Singapore Government Officers’ Housing Co-operative Society,later renamed the Government Servants’ Housing Co-operative Society,one of the earliest cooperative housing ventures in Asia.
At a time when urbanisation was accelerating and affordable housing was scarce, this society offered a practical solution: civil servants pooled their savings, purchased land collectively, and built modest yet dignified homes for their families. The initiative embodied the very essence of the cooperative idea,self-help, shared responsibility, and community welfare.`
      },
      criteria: {
        title: 'Featured Criteria ',
        items: [
          {
            heading: 'Criterion 1. Historical Significance',
            description: 'The site represents one of Asia’s earliest cooperative housing ventures, serving as a forerunner to Singapore’s public housing policies.'
          },
{
                heading: 'Criterion 2. Connection to Cooperative Pioneers or Communities',
                description: 'Sites must demonstrate a tangible link to cooperative pioneers, enterprises, federations, or communities that shaped cooperative practice and identity.'
              }
,
{
                heading: 'Criterion 11. Visibility and Symbolism',
                description: 'Sites shall enhance the visibility of cooperation in public spaces through monuments, plaques, murals, and symbolic interpretation integrated within broader heritage narratives.'
              }

        ]
      },
      community: {
        title: 'Homes Built on Shared Principles',
        content: `By the late 1950s, the cooperative had completed several clusters of terraced houses, bungalows, and shop units near Paya Lebar. These homes were made available to members on cooperative terms,sold or leased affordably, with the aim of promoting stability rather than speculation. Long before Singapore’s public housing programme gained momentum, the Government Servants’ Co-operative Estate demonstrated how collective organisation could provide secure shelter while nurturing a sense of neighbourhood solidarity.
It was in recognition of this spirit that one of the estate’s access roads was named Rochdale Road, honouring the Rochdale Pioneers of 1844 in England,founders of the modern cooperative movement. Their principles of voluntary membership, democratic control, equitable participation, and concern for community served as an an inspiration to cooperatives worldwide, including those emerging in postwar Singapore.
Today, Rochdale Road still exists as a tranquil street lined with homes originally part of the estate. Though the ownership structures have evolved over time, the name remains a quiet yet enduring tribute to the cooperative values that once guided the area’s development.`
      },
      virtualExperience: {
        title: 'Heritage, Values, and Continuity',
        content: `Recognising Rochdale Road as part of Singapore’s Cooperative Cultural Heritage Map would highlight one of the region’s earliest experiments in cooperative housing,a forerunner to the broader ideals that would later shape the nation’s public housing policies: community, affordability, and shared responsibility.
The surrounding area preserves other meaningful echoes of that cooperative and social spirit. Thrift Drive, an adjacent road, celebrates the cooperative virtue of saving and prudent resource management. Not far away, Kadayanallur Street honors the South Indian town from which many of Singapore’s Tamil Muslim settlers originated,a community that would later establish its own financial cooperative, the Singapore Kadayanallur Muslim Co-operative Thrift & Loan Society, in 1948.
This institution provided credit and support to migrant workers, reflecting once again how cooperation could turn shared struggle into collective resilience.`,
        image: 'assets/images/sites_files/sub-icon/image045.jpg'
      },
      aditionalData: {
        title: 'A Modest Street with a Global Legacy',
        content: `Though small in scale, Rochdale Road links Singapore’s modern urban narrative to a global tradition of cooperative self-help. It stands as a symbol of how, even in a rapidly industrializing society, people found strength in working together to meet common needs.
In a nation celebrated for its urban efficiency, Rochdale Road reminds us of a quieter truth,that before the rise of state-led housing or corporate development, communities themselves laid the foundations for equitable living through cooperation. The street’s name is more than a label; it is a living connection between Singapore’s local story and the universal ideals of the cooperative movement,a reminder that solidarity, fairness and shared effort remain as relevant to city-building today as they were seventy years ago`
      },
      aditionalData2: {
        title: '',
        content: ``
      },
      aditionalDat3: {
        title: '',
        content: ``
      },
      aditionalDat4: {
        title: '',
        content: ``
      },
      aditionalDat5: {
        title: '',
        content: ``
      },
      learnMore: {
        title: 'Learn More',
        resources: [
          'https://www.thenews.coop/singapores-co-operative-movement-a-thriving-sector-for-over-90-years/'
        ]
      }
    }
  }
}
,

{
  id: 'national-coop-museum-bulgaria',
  name: 'National Cooperative Museum, Bulgaria: A Living Testament to Unity and Progress',
  siteName:'National Cooperative Museum, Bulgaria',
  coopYear: 2025,
  lat: 42.6977,
  lng: 23.3219,
  country: 'Bulgaria',
  continent: 'Europe',
  type: 'tangible',
  content: {
    pageTitle: 'National Cooperative Museum, Bulgaria',
    pageSubtitle: 'A Living Testament to Unity and Progress',
    mainImage: 'assets/images/sites_files/image049.png',
    thumbnails: [
      'assets/images/sites_files/sub-icon/image050.jpg',
    ],
    infoCard: {
      country: 'Bulgaria',
      countryFlag: 'assets/images/sites_files/country-img/Bulgaria.png',
      theme: 'Musuem of Cooperation',
      entryYear: 2025,
      coordinates: '42.6977, 23.3219'
    },
    sections: {
      legacy: {
        title: 'The Heart of a Collective Legacy',
        content: `At the heart of Bulgaria’s social and economic story stands an institution dedicated to the power of unity , the National Cooperative Museum. More than a historical archive, the museum is a living monument to over 125 years of Bulgarian cooperative life, capturing how ordinary people, through shared effort and mutual aid, built not only livelihoods but the very fabric of a modern nation.
The cooperative movement in Bulgaria began in the late nineteenth century, at a time when the country was emerging from centuries of Ottoman rule and struggling with poverty and social fragmentation. Farmers, craftsmen, and small traders faced the dual challenges of economic hardship and limited access to credit. Their response was neither resignation nor dependence but cooperation: they came together to pool resources, share risks, and support one another. From these humble beginnings grew a nationwide movement that transformed villages, industries, and entire regions.
The National Cooperative Museum preserves this evolution , from the first small associations to the large federations that shaped Bulgaria’s rural and urban economies throughout the twentieth century.`
      },
      criteria: {
        title: 'Featured Criteria ',
        items: [
          {
            heading: 'Criterion 3. Archival, Architectural, or Symbolic Value',
            description: 'The museum holds the Mirkovo Vakif Seal, an extraordinary century-old artifact of five interlocking pieces, symbolizing the core cooperative principle of unity and interdependence.'
          },
          {
            heading: 'Criterion 10. Preservation and Safeguarding',
            description: 'Sites shall commit to the safeguarding of cooperative records, artifacts, oral traditions, and buildings through sustainable conservation strategies.'
          }
,
{
                heading: 'Criterion 13. Networking and International Solidarity',
                description: 'Sites shall connect to cooperative networks—regional, national, and international—participating in exchanges, research, and cooperative tourism to strengthen global cooperative heritage.'
              }
        ]
      },
      community: {
        title: 'A Museum of People and Principles',
        content: `Inside its galleries, the museum tells the story of cooperation through photographs, documents, tools, and artefacts that trace the path of ordinary people organizing for collective good. Each display echoes the cooperative ideal that progress is a shared pursuit. Visitors encounter exhibits that chronicle how cooperatives improved agriculture, trade, education, and culture, lifting thousands out of poverty while fostering a sense of social responsibility and civic pride.
Among the museum’s most treasured artefacts is the Mirkovo Vakif Seal, an early symbol of cooperation from the village of Mirkovo. This extraordinary seal, over a century old, consists of five interlocking pieces that can function only when assembled together. Its design is simple yet profound , a metaphor for the cooperative principle itself: no single part can stand alone; only through unity does the whole gain meaning.
The seal embodies the Bulgarian cooperative spirit , one rooted not only in economic necessity but in trust, participation, and shared accountability. Each piece represents both individuality and interdependence, illustrating a timeless truth: nothing is complete until all are united.`
      },
      virtualExperience: {
        title: 'A Chronicle of National Transformation',
        content: `The museum’s collection extends far beyond objects. It captures how cooperation helped Bulgaria modernize its agriculture, establish credit unions, found consumer stores, and build cultural and educational institutions. During decades of political and economic upheaval, cooperatives served as a stabilizing force, safeguarding dignity and continuity for countless families.
Even in times of transition , from monarchy to socialism to modern democracy , the cooperative ideal endured, adapting to new realities without losing its moral foundation. The museum honours these transitions not as breaks, but as chapters in a continuous narrative of resilience.`,
        image: 'assets/images/sites_files/image049.png'
      },
      aditionalData: {
        title: 'A Living Dialogue for the Future',
        content: `Today, the National Cooperative Museum is not merely a custodian of the past; it is a forum for the future. Through exhibitions, publications, and educational programmes, it engages new generations in conversations about solidarity, sustainability, and social innovation. In an era defined by rapid change and growing inequality, the museum’s message feels more urgent than ever , that community and cooperation remain the bedrock of progress.
Its halls invite visitors to reflect on the values that shaped Bulgaria’s cooperative tradition: democracy in decision-making, fairness in trade, and responsibility toward the common good. Each exhibit serves as both a remembrance and a call to action , a reminder that cooperation is not a relic of history, but a living, evolving practice.`
      },
      aditionalData2: {
        title: 'A Symbol of Unity',
        content: `As a cultural landmark, the National Cooperative Museum stands as the guardian of Bulgaria’s cooperative heritage. The Mirkovo Vakif Seal, its most iconic exhibit, continues to embody the essence of that heritage , five separate pieces forming one inseparable whole.
It is an enduring image of unity, trust, and shared strength , the very principles that have carried Bulgaria’s cooperative movement through generations. The museum reminds all who visit that a nation’s greatest achievements are rarely the work of individuals alone, but of people who choose to build together , brick by brick, hand in hand, in the spirit of cooperation.`
      },
      aditionalDat3: {
        title: '',
        content: ``
      },
      aditionalDat4: {
        title: '',
        content: ``
      },
      aditionalDat5: {
        title: '',
        content: ``
      },
      learnMore: {
        title: 'Learn More',
        resources: [
          'https://www.cks.bg/en/coop-policy/cooperative-national-museu/?utm_source'
        ]
      }
    }
  }
},

{
  id: 'ulccs-india',
  name: 'Headquarter House of the Uralungal Labour Contract Co-operative Society (ULCCS): Building Dignity, Brick by Brick',
  siteName:'ULCCS Headquarters, Vadakara, Kerala, India',
  coopYear: 2025,
  lat: 11.6033,
  lng: 75.5843,
  country: 'India',
  continent: 'Asia',
  type: 'tangible',
  content: {
    pageTitle: 'Headquarter House of the Uralungal Labour Contract Co-operative Society (ULCCS)',
    pageSubtitle: 'Building Dignity, Brick by Brick',
    mainImage: 'assets/images/sites_files/image046.jpg',
    thumbnails: [
      'assets/images/sites_files/sub-icon/image047.jpg',
      'assets/images/sites_files/sub-icon/image048.jpg',
    ],
    infoCard: {
      country: 'India',
      countryFlag: 'assets/images/sites_files/country-img/india.png',
      theme: 'Birthplace Worker Cooperatives',
      entryYear: 2025,
      coordinates: '11.6033, 75.5843'
    },
    sections: {
      legacy: {
        title: 'Origins of a Movement',
        content: `In the coastal town of Vadakara, Kerala, stands the headquarters of one of Asia’s most remarkable cooperative enterprises , the Uralungal Labour Contract Co-operative Society (ULCCS). Founded in 1925 by a small group of visionary workers, ULCCS was not born out of wealth or privilege, but out of necessity, unity, and courage.
At the time, colonial India’s rigid social order left labourers at the mercy of exploitation and insecurity. Denied fair wages and dignity, a handful of workers in the village of Uralungal decided that instead of waiting for justice, they would build it themselves.
Guided by the reformist ideals of Vagbhatananda, a local philosopher who championed social equality and cooperative action, they came together to form a labour society that would belong to them , a place where work, ownership, and decision-making were shared.
Fourteen men contributed their modest savings and pledged their labour to found ULCCS, adopting a motto both humble and revolutionary: “Work with dignity, share collectively, serve the community.” From its earliest days, the cooperative embodied the spirit of self-help and solidarity, proving that when people unite around shared values, they can turn hardship into opportunity.`
      },
      criteria: {
        title: 'Featured Criteria ',
        items: [
          {
            heading: 'Criterion 1. Historical Significance',
            description: 'Founded in 1925, ULCCS is one of Asia’s longest-running and most successful worker cooperatives, established out of necessity by marginalized laborers to combat colonial-era exploitation.'
          },
{
                heading: 'Criterion 4. Active Cooperative Connection',
                description: 'Sites must either remain in operation as cooperatives or be explicitly dedicated to preserving and interpreting cooperative history.'
              }
,
          {
            heading: 'Criterion 9. Accessibility for All',
            description: 'Sites must guarantee accessibility to the public—physically, digitally, or through interpretive materials—and ensure inclusivity for all people regardless of age, gender, background, or ability.'
          }

        ]
      },
      community: {
        title: 'From Village Roads to National Landmarks',
        content: `ULCCS began by taking small public works contracts , repairing roads, constructing culverts, maintaining wells , projects often neglected by private contractors. The society’s commitment to integrity, transparency, and efficiency soon earned the trust of local communities and government bodies alike. What started as a handful of men with basic tools grew steadily into a major civil construction cooperative.
Over the decades, ULCCS completed thousands of projects across Kerala and beyond: roads, bridges, educational institutions, hospitals, and public infrastructure that today serve millions. Each project became an expression of collective pride, a visible reminder that labour itself could be the foundation of ownership and empowerment.
Unlike conventional firms, ULCCS places people before profit. Every worker is both a member and a co-owner, participating in decisions and sharing in the rewards. The society provides steady employment, fair wages, social security, pensions, and professional training, making it a rare model of equitable growth in a world too often defined by inequality.`
      },
      virtualExperience: {
        title: 'Expanding Horizons: Tradition Meets Innovation',
        content: `While deeply rooted in Kerala’s cooperative heritage, ULCCS has also embraced modernisation and diversification. Beyond construction, it has expanded into information technology, education, tourism, and social welfare, applying the same cooperative principles to new industries.
Its IT division, for instance, employs hundreds of young professionals in software development and digital solutions , demonstrating that the cooperative spirit is as relevant to the digital economy as it was to manual labour. Similarly, the ULCCS Foundation focuses on education, disability inclusion, and community development, extending the society’s mission of empowerment beyond its workforce.`,
        image: 'assets/images/sites_files/image046.jpg'
      },
      aditionalData: {
        title: 'The Heart of Cooperation',
        content: `At the centre of ULCCS’s success is its culture of trust and democracy. Decisions are made collectively, hierarchies are minimal, and transparency is paramount. Members see themselves not merely as employees but as stewards of a shared mission.
This sense of ownership fosters accountability, pride, and unity , the invisible cement holding the cooperative together for nearly a century.
The headquarters at Madappally, near Vadakara, reflects this legacy. More than an administrative building, it is a living monument to human resilience , the story of generations who turned labour into leadership and solidarity into sustainability. Each wall and beam carries the memory of struggle, progress, and purpose.`
      },
      aditionalData2: {
        title: 'A Global Beacon of Cooperative Enterprise',
        content: `Today, ULCCS stands as a beacon of hope for cooperative movements worldwide. It demonstrates that the cooperative model , far from being outdated , can thrive as a humane, inclusive, and economically viable system.
Balancing heritage and innovation, ULCCS shows that progress does not require abandoning community values. Whether paving roads or designing software, it remains guided by the same conviction: that dignity, fairness, and unity are the strongest foundations a society can build upon.
To visit ULCCS is to witness the transformative power of cooperation , a movement that has built not only infrastructure, but futures.
From the dusty paths of 1920s Kerala to the global stage of social enterprise, ULCCS continues to remind the world that when people work together with honesty, discipline, and faith in one another, there is no limit to what they can create.`
      },
      aditionalDat3: {
        title: '',
        content: ``
      },
      aditionalDat4: {
        title: '',
        content: ``
      },
      aditionalDat5: {
        title: '',
        content: ``
      },
      learnMore: {
        title: 'Learn More',
        resources: [
          'https://www.ulccsltd.com'
        ]
      }
    }
  }
}
,
{
  id: 'werstas-pellervo-finland',
  name: 'Finnish Labour Museum Werstas & Pellervo Confederation of Finnish Cooperatives',
  siteName:'Finnish Labour Museum Werstas, Tampere, Finland',
  coopYear: 2025,
  lat: 61.5016,
  lng: 23.7580,
  country: 'Finland',
  continent: 'Europe',
  type: 'tangible',
  content: {
    pageTitle: 'Finnish Labour Museum Werstas & Pellervo Confederation of Finnish Cooperatives',
    pageSubtitle: 'A Museum of Working Lives and Shared Struggles',
    mainImage: 'assets/images/sites_files/image051.jpg',
    thumbnails: [
      'assets/images/sites_files/sub-icon/image052.jpg'
    ],
    infoCard: {
      country: 'Finland',
      countryFlag: 'assets/images/sites_files/country-img/Finland.png',
      theme: 'Musuem of Cooperation',
      entryYear: 2025,
      coordinates: '61.4981, 23.7600'
    },
    sections: {
      legacy: {
        title: 'A Museum of Working Lives and Shared Struggles',
        content: `In the industrial heart of Tampere, Finland’s historic “Manchester of the North,” stands the Finnish Labour Museum Werstas,a national institution devoted to the intertwined histories of work, cooperation, and social change. Located within the old Finlayson cotton mill complex, the museum occupies a symbolic space: once a centre of industrial production, now a house of memory and dialogue.
Werstas is not simply a museum of machines and milestones; it is a museum of people. Its exhibitions trace Finland’s evolution from a 19th-century industrial society to a modern welfare state, through the eyes and voices of its workers. Textile machinery, steam engines, and interactive displays bring the rhythms of factory life back to life, while personal stories,letters, photographs, and oral histories,reveal the dignity and resilience of ordinary Finns.
Entry to the museum is free, underscoring its democratic mission: to make history and culture accessible to all. Visitors move through galleries that explore themes such as industrialisation, social reform, women’s work, migration, and community organisation. Together, these exhibits offer more than nostalgia,they invite reflection on how work has shaped not only Finland’s economy but its values, from equality to solidarity.`
      },
      criteria: {
        title: 'Featured Criteria ',
        items: [
          
          {
                heading: 'Criterion 2. Connection to Cooperative Pioneers or Communities',
                description: 'Sites must demonstrate a tangible link to cooperative pioneers, enterprises, federations, or communities that shaped cooperative practice and identity.'
              }
,
          {
            heading: 'Criterion 6. Educational Mission',
            description: 'As a national institution, Werstas is dedicated to tracing the intertwined histories of work, cooperation, and social change, offering free entry to ensure democratic access to history and culture.'
          },
          {
            heading: 'Criterion 10. Preservation and Safeguarding',
            description: 'Sites shall commit to the safeguarding of cooperative records, artifacts, oral traditions, and buildings through sustainable conservation strategies.'
          }

        ]
      },
      community: {
        title: 'The Cooperative Thread: The Pellervo Confederation Legacy',
        content: `Running parallel to this story of labour is Finland’s cooperative tradition, represented most prominently by the Pellervo Confederation of Finnish Cooperatives, founded in 1899. Pellervo became the driving force behind Finland’s cooperative movement, helping establish networks of consumer co-ops, credit unions, and worker cooperatives that empowered rural and urban communities alike.
Through its guidance, Finland’s cooperative sector grew into one of the most robust in the world, with millions of members participating in enterprises rooted in the ideals of self-help, democracy, and shared prosperity. These institutions became pillars of civil society,bridging economic needs with social cohesion.
The Finnish Labour Museum Werstas embraces this cooperative heritage as part of its broader narrative. By linking the stories of factory workers, unionists, and cooperative pioneers, the museum demonstrates how labour and cooperation are two sides of the same social vision,one based on fairness, participation, and mutual care.`
      },
      virtualExperience: {
        title: 'Living Heritage: From Factory Floor to Community Forum',
        content: `Among Werstas’ most engaging features is its “Our Town” exhibition, which recreates the daily life of working communities. Visitors can explore spaces that evoke early cooperative shops, volunteer printing presses, and communal meeting halls,living reminders that cooperation was never confined to boardrooms or balance sheets, but woven into the fabric of everyday life.
This immersive approach makes Werstas not just a museum, but a living classroom of civil society. It bridges past and present, showing how Finland’s social democracy, trade unions, and cooperative enterprises all grew from the same grassroots belief: that collective action could build a fairer world.`,
        image: 'assets/images/sites_files/image051.jpg'
      },
      aditionalData: {
        title: 'Work, Cooperation, and Civil Identity',
        content: `The partnership between Werstas and the Pellervo Confederation highlights the continuity between industrial labour and cooperative enterprise. Together, they map the cultural and economic DNA of Finland,a country where civic participation and economic democracy evolved hand in hand.
In this sense, the Finnish Labour Museum Werstas serves as a cornerstone for any Cooperative Cultural Heritage Map. It captures how co-ops are not isolated businesses but social movements deeply interwoven with workers’ struggles, community development, and national identity.`
      },
      aditionalData2: {
        title: 'A Reflection on Shared Futures',
        content: `To visit the Finnish Labour Museum Werstas is to encounter more than the history of work,it is to see how work and cooperation built a nation. The museum reminds us that cooperative culture extends far beyond economic models; it lives in the ways people organise, educate, and care for one another.
Amid the preserved engines and reconstructed shops, one senses an enduring truth: that progress, justice, and dignity are achieved not through individual striving alone, but through collective effort and solidarity.
In the story Werstas tells,of factory and co-op, of labour and democracy,lies the enduring Finnish belief that cooperation is both a heritage and a horizon.`
      },
      aditionalDat3: {
        title: '',
        content: ``
      },
      aditionalDat4: {
        title: '',
        content: ``
      },
      aditionalDat5: {
        title: '',
        content: ``
      },
      learnMore: {
        title: 'Learn More',
        resources: [
          'https://www.werstas.fi'
        ]
      }
    }
  }
},
{
  id: 'ceramica-imola-italy',
  name: 'Cooperativa Ceramica d’Imola – Imola, Italy',
  siteName:'Cooperativa Ceramica d’Imola, Imola, Italy',
  coopYear: 2025,
  lat: 44.3524,
  lng: 11.7161,
  country: 'Italy',
  continent: 'Europe',
  type: 'tangible',
  content: {
    pageTitle: 'Cooperativa Ceramica d’Imola – Imola, Italy',
    pageSubtitle: 'A Century and a Half of Craft, Cooperation, and Community',
    mainImage: 'assets/images/sites_files/image055.jpg',
    thumbnails: [
      'assets/images/sites_files/sub-icon/image056.jpg',
      'assets/images/sites_files/sub-icon/image057.jpg'
    ],
    infoCard: {
      country: 'Italy',
      countryFlag: 'assets/images/sites_files/country-img/Italy.png',
      theme: 'Worker Production Cooperative',
      entryYear: 2025,
      coordinates: '44.3524, 11.7161'
    },
    sections: {
      legacy: {
        title: 'A Century and a Half of Craft, Cooperation, and Community',
        content: `In the Italian town of Imola, where artistry and craftsmanship have long been part of daily life, the Cooperativa Ceramica d’Imola stands as one of the world’s oldest and most enduring examples of cooperative enterprise. Founded on 22 June 1874, when a majolica and tableware factory was transferred to its workers, it became a living testament to solidarity  and the belief that those who create value deserve to share in it.
At a time when industrial capitalism was reshaping Europe, this act of worker empowerment was revolutionary. The owner of the factory, moved by ideals of fairness and mutual benefit, ceded control to his employees with the purpose of ensuring both industrial progress and the economic improvement of the working class. Thus was born Italy’s first production and worker cooperative  a vision rooted in collective responsibility and dignity.`
      },
      criteria: {
        title: 'Featured Criteria ',
        items: [
            {
                heading: 'Criterion 4. Active Cooperative Connection',
                description: 'Sites must either remain in operation as cooperatives or be explicitly dedicated to preserving and interpreting cooperative history.'
              }
,
          {
            heading: 'Criterion 10. Preservation and Safeguarding',
            description: 'Sites shall commit to the safeguarding of cooperative records, artifacts, oral traditions, and buildings through sustainable conservation strategies.'
          }
,
{
                heading: 'Criterion 11. Visibility and Symbolism',
                description: 'Sites shall enhance the visibility of cooperation in public spaces through monuments, plaques, murals, and symbolic interpretation integrated within broader heritage narratives.'
              }

        ]
      },
      community: {
        title: 'From Workshop to World Leader',
        content: `From its modest beginnings producing hand-painted ceramics and household wares, the cooperative evolved steadily into a global enterprise renowned for design, technology and artistic quality. The workers who once toiled as hired hands became members and decision-makers, sharing profits, governance, and pride of ownership. Over nearly a century and a half, the cooperative has grown into an international leader in porcelain stoneware, decorative tiles, and architectural ceramics.
Yet even as its markets have expanded, the cooperative has remained faithful to its founding values: democratic control, fair distribution of wealth, and a deep bond with its home community of Imola. Its history reflects a philosophy where innovation and social purpose coexist  proof that industrial success can be built upon cooperation rather than competition alone.`
      },
      virtualExperience: {
        title: 'The Museum: Memory and Meaning',
        content: `To celebrate and preserve this remarkable heritage, the cooperative established the G. Bucci Museum and Historical Archive in 1979. Housed in an eighteenth-century glassworks, the museum chronicles the evolution of the cooperative through rare ceramic art, early machinery, archival photographs, and design sketches. It also highlights the cooperative’s social dimension  education, welfare, and culture  showing how artistry, labour, and solidarity have been intertwined since the nineteenth century.
Visitors to the museum witness the dialogue between past and present: from the hand-painted majolica of the 1870s to the digital design studios of today. It is a space that honours generations of worker-members whose skill and unity built not only a company, but a community of purpose.`,
        image: 'assets/images/sites_files/image055.jpg'
      },
      aditionalData: {
        title: 'A Living Heritage',
        content: `In 2024, Cooperativa Ceramica d’Imola celebrates its 150th anniversary  a milestone marking one of the world’s longest-standing cooperative enterprises. More than a producer of ceramics, it is a guardian of a philosophy: that work is most meaningful when it is shared, and that progress is strongest when built collectively.
For the global cooperative movement, Imola remains an emblem of enduring solidarity  a place where artistry, industry, and human cooperation have been fused for a century and a half into something both beautiful and profoundly just.`
      },
      aditionalData2: {
        title: '',
        content: ``
      },
      aditionalDat3: {
        title: '',
        content: ``
      },
      aditionalDat4: {
        title: '',
        content: ``
      },
      aditionalDat5: {
        title: '',
        content: ``
      },
      learnMore: {
        title: 'Learn More',
        resources: [
          'https://www.ccimola.com/'
        ]
      }
    }
  }
},

{
  id: 'birthplaces-germany',
  name: 'Birthplaces of Cooperation in Germany: Delitzsch and Flammersfeld',
  siteName:'Deutsches Genossenschaftsmuseum (Delitzsch) and Raiffeisenmuseum (Flammersfeld), Germany',
  coopYear: 2025,
  lat:  51.5221,
  lng: 12.3345,
  country: 'Germany',
  continent: 'Europe',
  type: 'tangible',
  content: {
    pageTitle: 'Deutsches Genossenschaftsmuseum (Delitzsch) and  Raiffeisenmuseum (Flammersfeld), Germany',
    pageSubtitle: 'The Urban Beginning – Schulze-Delitzsch and the Birth of the Modern Cooperative ',
    mainImage: 'assets/images/sites_files/image058.jpg',
    thumbnails: [
      'assets/images/sites_files/sub-icon/image059.jpg',
      'assets/images/sites_files/sub-icon/image060.jpg',
    ],
    infoCard: {
      country: 'Germany',
      countryFlag: 'assets/images/sites_files/country-img/Germany.png',
      theme: 'Musuem of Cooperation',
      entryYear: 2025,
      coordinates: '51.0753, 10.0034'
    },
    sections: {
      legacy: {
        title: 'The Urban Beginning – Schulze-Delitzsch and the Birth of the Modern Cooperative',
        content: `In the quiet Saxon town of Delitzsch, the modest house at Kreuzgasse 10 witnessed an event that would shape economic history. In 1849, fifty-seven shoemakers, led by Hermann Schulze-Delitzsch, founded what is widely regarded as the first successful modern craft and producer cooperative in Germany. Their goal was simple yet revolutionary , to achieve dignity, self-reliance, and economic justice through collective effort.
Today, that same building hosts the Deutsches Genossenschaftsmuseum (Schulze-Delitzsch-Haus), a museum devoted to the origins of cooperative self-help. Within its walls, visitors step into the working world of 19th-century artisans: workshops filled with tools, leather, bindery presses, and documents that evoke the determination of ordinary craftspeople who chose self-help over dependence. Interactive exhibits trace how their experiment in mutual support became a model for cooperatives around the world.
Schulze-Delitzsch’s guiding principles , Selbsthilfe, Selbstverantwortung, Selbstverwaltung (self-help, self-responsibility, self-administration) , still resonate through the museum’s narrative. Each exhibit illustrates how these ideals transformed not only Germany’s craft economy but also inspired cooperative systems across Europe and beyond. Visiting Delitzsch is thus not just a lesson in history but a reflection on how community and enterprise can coexist in balance.`
      },
      criteria: {
        title: 'Featured Criteria ',
        items: [

          {
            heading: 'Criterion 1. Historical Significance',
            description: 'The Schulze-Delitzsch-Haus marks the birthplace of the first successful modern craft cooperative (1849), and the Raiffeisenhaus the birthplace of the rural credit cooperative movement (1849).'
          },
          {
                heading: 'Criterion 2. Connection to Cooperative Pioneers or Communities',
                description: 'Sites must demonstrate a tangible link to cooperative pioneers, enterprises, federations, or communities that shaped cooperative practice and identity.'
              }
,
{
                heading: 'Criterion 4. Active Cooperative Connection',
                description: 'Sites must either remain in operation as cooperatives or be explicitly dedicated to preserving and interpreting cooperative history.'
              }

        ]
      },
      community: {
        title: 'The Rural Counterpart – Raiffeisen and the Power of Mutual Aid',
        content: `While Schulze-Delitzsch was shaping cooperation in urban workshops, a different revolution was taking root in the rural heart of the Westerwald region. In the small village of Flammersfeld, Friedrich Wilhelm Raiffeisen, then the local mayor, founded in 1849 the “Flammersfelder Hülfsverein zur Unterstützung unbemittelter Landwirthe” (Aid Association for Impoverished Farmers). This initiative marked the birth of rural credit cooperatives , organisations that enabled farmers to pool resources, access credit, and free themselves from usury and debt.
The historic timber-framed house where Raiffeisen lived and worked now houses the Deutsches Raiffeisenmuseum (Raiffeisenhaus Flammersfeld). Here, visitors encounter the intimate world of 19th-century rural life , rooms preserved with original furnishings, farm tools, ledgers, and photographs that tell the story of how cooperation became a lifeline for small farmers. Exhibits show how Raiffeisen’s vision grew from a local initiative into a global cooperative credit movement, laying the groundwork for institutions that still empower millions today.
More than an agricultural tale, the museum presents a profound social lesson: that real change often begins in the smallest of communities. Raiffeisen’s belief that collective strength could overcome individual hardship continues to inspire cooperative credit systems worldwide.`
      },
      virtualExperience: {
        title: 'Two Visions, One Legacy',
        content: `Together, Delitzsch and Flammersfeld represent the twin origins of Germany’s cooperative heritage , one urban and industrial, the other rural and agrarian.
Schulze-Delitzsch’s model empowered artisans and small producers through democratic self-management, while Raiffeisen’s approach provided social and economic security for farmers through shared credit.
Though their contexts differed, their principles converged: mutual trust, shared responsibility, and democratic participation. Both men believed that cooperation could be the foundation of social progress , a belief that would spread from Germany to every continent, influencing cooperative banks, consumer co-ops, housing societies, and fair-trade networks across the world.`,
        image: 'assets/images/sites_files/image058.jpg'
      },
      aditionalData: {
        title: 'A Call to Solidarity',
        content: `Visiting these two museums is to journey to the birthplaces of modern cooperation, where ideas forged by shoemakers and farmers continue to shape economies and communities today. Together, the Schulze-Delitzsch Haus in Delitzsch and the Raiffeisenhaus in Flammersfeld stand as living memorials to solidarity, reminding us that the power to build a fairer society begins when people choose to work together.`
      },
      aditionalData2: {
        title: '',
        content: ``
      },
      aditionalDat3: {
        title: '',
        content: ``
      },
      aditionalDat4: {
        title: '',
        content: ``
      },
      aditionalDat5: {
        title: '',
        content: ``
      },
      learnMore: {
        title: 'Learn More',
        resources: [
          'https://genossenschaftsmuseum.de/museum/',
          'https://www.raiffeisen-gesellschaft.de/content/Raiffeisen_Gesellschaft-MS/de/homepage/Raiffeisen_besuchen/raiffeisenhaus_flammersfeld.html'
        ]
      }
    }
  }
},

// Malaysia Site
{
  id: 'maktab-koperasi-malaysia',
  name: 'Maktab Koperasi Malaysia,  Institut Koperasi Malaysia (IKMa) and Cooperative Archive, Petaling Jaya, Malaysia ',
  siteName:' Institut Koperasi Malaysia (IKMa) and Cooperative Archive, Petaling Jaya, Malaysia',
  coopYear: 2025,
  lat: 3.1000,
  lng: 101.6400,
  country: 'Malaysia',
  continent: 'Asia',
  type: 'tangible',
  content: {
    pageTitle: ' Institut Koperasi Malaysia (IKMa) Cooperative Archive, Petaling Jaya, Malaysia',
    pageSubtitle: 'Institut Koperasi Malaysia: Educating a Nation in Cooperation',
    mainImage: 'assets/images/sites_files/image018.jpg',
    thumbnails: [
    ],
    infoCard: {
      country: 'Malaysia',
      countryFlag: 'assets/images/sites_files/country-img/Malaysia.png',
      theme: 'Education Training Centre',
      entryYear: 2025,
      coordinates: '3.1000, 101.6400'
    },
    sections: {
      legacy: {
        title: 'A Vision Born at Independence',
        content: `In the leafy suburb of Petaling Jaya, just outside Kuala Lumpur, stands the Institut Koperasi Malaysia (IKMa), once known as Maktab Koperasi Malaysia (MKM), the country’s foremost institution for cooperative education, training, and research. Established in 1956, at the dawn of Malaysia’s independence, the college was conceived as a cornerstone of the young nation’s socioeconomic transformation.

It was created to give structure and strength to the spirit of gotong-royong, the Malay tradition of mutual help and community solidarity, and to transform these values into modern tools of nation-building. MKM was founded with a clear and ambitious purpose: to nurture a new generation of cooperative leaders.`
      },
      criteria: {
        title: 'Featured Criteria ',
        items: [
          {
                heading: 'Criterion 6. Educational Mission',
                description: 'Sites shall actively promote cooperative literacy through exhibitions, archives, guided tours, and programmes that teach the ICA Statement on the Cooperative Identity.'
              }
,
          {
            heading: 'Criterion 9. Accessibility for All',
            description: 'Sites must guarantee accessibility to the public—physically, digitally, or through interpretive materials—and ensure inclusivity for all people regardless of age, gender, background, or ability.'
          },
{
                heading: 'Criterion 13. Networking and International Solidarity',
                description: 'Sites shall connect to cooperative networks—regional, national, and international—participating in exchanges, research, and cooperative tourism to strengthen global cooperative heritage.'
              }
        ]
      },
      community: {
        title: 'From Training College to National Institution',
        content: `In the years following independence, Malaysia’s leaders viewed cooperatives as key to rural development, poverty reduction, and self-reliance. MKM became the educational foundation of that vision. What began as a modest training centre grew into a national institution under the Ministry of Entrepreneur Development and Cooperatives (MEDAC).

Today, IKMa plays a pivotal role in strengthening over 14,000 registered cooperatives nationwide, serving sectors that range from agriculture and finance to housing, consumer goods, and digital enterprises. Its alumni form the backbone of Malaysia’s people-centred economy.`
      },
      virtualExperience: {
        title: 'The Petaling Jaya Campus: Mid-Century Modern with a Malaysian Heart',
        content: `Completed in 1968, the Petaling Jaya campus remains an architectural landmark. Its design blends mid-century modernism with tropical Malaysian sensibility, embodying the principles it teaches—transparency, balance, and connection.

Within the campus, visitors find the Cooperative Heritage Gallery, a space that chronicles Malaysia’s cooperative journey from colonial beginnings to the present day through historical documents, photographs, and artefacts.`,
        image: 'assets/images/sites_files/image018.jpg'
      },
      aditionalData: {
        title: 'Learning as Empowerment',
        content: `Education at MKM, now IKMa, has always been more than a professional qualification; it is an immersion in the philosophy of cooperation. The institute’s programmes encompass fields such as cooperative governance, accounting, entrepreneurship, digital transformation, and sustainability.

The institution’s motto, “Empowering Cooperatives Through Knowledge,” promotes the belief that education is the most sustainable investment in community progress and social innovation.`
      },
      aditionalData2: {
        title: 'Extending Education Across the Nation',
        content: `True to the cooperative spirit, IKMa ensures that learning reaches beyond urban centres. Through its regional training centres across Malaysia, the institute brings professional development and advisory services to cooperatives in Sabah, Sarawak, and rural Peninsular Malaysia.

These outreach programmes strengthen local economies, helping small cooperatives modernise operations, adopt digital tools, and sustain their missions in changing times.`
      },
      aditionalDat3: {
        title: 'A Global Partner and Legacy of Nation-Building',
        content: `In 2011, MKM was officially renamed Institut Koperasi Malaysia, signalling an expanded mandate. Today, IKMa partners with global organisations such as the International Co-operative Alliance (ICA), the Asian Confederation of Credit Unions (ACCU), and the International Labour Organization (ILO).

The archives and gallery preserve decades of cooperative policy, innovation, and people-centred development, a living testament to the institution’s enduring relevance as a guide for Malaysia’s journey from independence to a modern, inclusive economy.`
      },
      aditionalDat4: {
        title: 'A Legacy of Nation-Building',
        content: `Walking through the quiet corridors of the Petaling Jaya campus, one senses the depth of history and continuity. Generations of cooperative leaders have passed through these classrooms, each contributing to Malaysia’s story of independence through interdependence. The archives and gallery preserve decades of cooperative policy, innovation, and people-centred development,a living testament to the institution’s enduring relevance.

        IKMa’s legacy is not only educational but national. It stands as proof that cooperative values,fairness, participation, and solidarity,can form the foundation of a nation’s progress. In Malaysia’s journey from independence to a modern economy, the cooperative college has been both a witness and a guide.
`
      },
      aditionalDat5: {
        title: 'Knowledge for a New Era',
        content: `As Malaysia navigates the challenges of the digital age, IKMa continues to evolve. New programmes in innovation, green entrepreneurship, and social enterprise build on its founding ideals while preparing cooperatives for the future.
Its enduring message remains clear: cooperation, when informed by knowledge and guided by purpose, is one of society’s most resilient forces,a force that continues to shape Malaysia’s pursuit of inclusive and sustainable development.
`
      },
      learnMore: {
        title: 'Learn More',
        resources: [
          'https://www.ikma.edu.my',
        ]
      }
    }
  }
},




{
  id: 'otalora-mondragon-spain',
  name: 'Otalora Cooperative Development Centre of the Mondragon Corporation, Spain',
  siteName:'Otalora Cooperative Development Centre, Arrasate-Mondragón, Spain',
  coopYear: 2025,
  lat: 43.0645,
  lng: -2.4939,
  country: 'Spain',
  continent: 'Europe',
  type: 'tangible',
  content: {
    pageTitle: 'Otalora Cooperative Development Centre of the Mondragon Corporation, Spain',
    pageSubtitle: 'The Heart of the World’s Leading Cooperative Ecosystem',
    mainImage: 'assets/images/sites_files/image053.jpg',
    thumbnails: [
      'assets/images/sites_files/sub-icon/image054.jpg',
    ],
    infoCard: {
      country: 'Spain',
      countryFlag: 'assets/images/sites_files/country-img/Spain.png',
      theme: 'EducationTraining Centre',
      entryYear: 2025,
      coordinates: '43.0645, -2.4939'
    },
    sections: {
      legacy: {
        title: 'The Heart of the World’s Leading Cooperative Ecosystem',
        content: `In the rolling green hills of the Basque Country, in northern Spain, stands one of the most extraordinary social and economic experiments in modern history, the Mondragon Corporation. Founded in 1956 in the town of Arrasate-Mondragón by the visionary priest José María Arizmendiarrieta and a small group of young workers, Mondragon grew from a modest workshop into the world’s largest federation of worker cooperatives. It is not only a model of shared ownership but also a living philosophy of how people can work together to shape a fairer and more human economy.
At the centre of this remarkable network is Otalora, Mondragon’s management and cooperative development centre. Once a 14th-century Basque manor house, Otalora today serves as a place of reflection, education, and renewal  a space where cooperative leaders, students, and visitors from around the world come to learn how democracy, solidarity, and entrepreneurship can coexist within business.`
      },
      criteria: {
        title: 'Featured Criteria ',
        items: [
{
                heading: 'Criterion 2. Connection to Cooperative Pioneers or Communities',
                description: 'Sites must demonstrate a tangible link to cooperative pioneers, enterprises, federations, or communities that shaped cooperative practice and identity.'
              },
{
                heading: 'Criterion 4. Active Cooperative Connection',
                description: 'Sites must either remain in operation as cooperatives or be explicitly dedicated to preserving and interpreting cooperative history.'
              }
,
{
                heading: 'Criterion 7. Research and Knowledge Sharing',
                description: 'Dedicated researchers delve into the origins and evolution of the Desjardins Group, tracing its expansion from a modest savings cooperative in Lévis, Quebec, into one of the world’s leading cooperative financial institutions. Their work not only illuminates the past but also provides valuable insight into how cooperation and ethical finance can thrive in the modern economy.'
              }

        ]
      },
      community: {
        title: 'A Vision Rooted in Community',
        content: `The story of Mondragon began in the difficult years following the Spanish Civil War, when poverty and unemployment ravaged the Basque region. Father Arizmendiarrieta believed that education and cooperation could offer a path forward. He inspired local youth to train as engineers, establish their own enterprises, and share ownership and management responsibilities equally.
Their first cooperative, Talleres Ulgor, laid the foundations of what would become the Mondragon ecosystem a federation that now includes more than eighty autonomous cooperatives, employing tens of thousands of worker-owners across industries as diverse as manufacturing, finance, agriculture, retail, and education.
In every Mondragon enterprise, workers are not employees but co-owners. They elect their management boards, share in profits, and take part in decision-making. Wage ratios are deliberately modest, and profits are reinvested into the cooperative community. Over time, Mondragon has built its own university, research centres, and banks, ensuring that innovation remains guided by human and cooperative values.`
      },
      virtualExperience: {
        title: 'Otalora: The Living School of Cooperation',
        content: `Otalora serves as Mondragon’s beating heart  a place where cooperative identity is cultivated and passed on. It hosts study visits, leadership programmes, and seminars for cooperative managers, educators, and international visitors. In its halls, participants encounter not only economic principles but the lived philosophy of solidarity: the idea that wealth and responsibility should be shared.
Visitors who walk through Otalora find a blend of history and innovation  ancient stone walls surrounding classrooms equipped with modern tools for learning and dialogue. The centre reflects the essence of Mondragon itself: a union of tradition and progress, rooted in people and community.`,
        image: 'assets/images/sites_files/image053.jpg'
      },
      aditionalData: {
        title: 'A Legacy of Hope and Humanism',
        content: `Mondragon stands as a powerful example of what can be achieved when labour, knowledge, and capital work together rather than in opposition. It shows that businesses can grow and compete globally without abandoning human dignity or collective purpose.
As a site for cooperative cultural heritage, Mondragon and Otalora embody the belief that economic success and social justice need not be opposites. They prove that cooperation grounded in trust, education, and shared values can endure across generations, shaping not only industries but also the moral imagination of a people.`
      },
      aditionalData2: {
        title: '',
        content: ``
      },
      aditionalDat3: {
        title: '',
        content: ``
      },
      aditionalDat4: {
        title: '',
        content: ``
      },
      aditionalDat5: {
        title: '',
        content: ``
      },
      learnMore: {
        title: 'Learn More',
        resources: [
          'https://www.otalora.com/en/we-are/'
        ]
      }
    }
  }
},

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

  // Method to get translated content for a site
  getTranslatedSiteContent(id: string, lang: string): Promise<HeritageContent | null> {
    const site = this.getSiteById(id);
    if (!site || lang === 'en') {
      return Promise.resolve(site?.content || null);
    }

    // For non-English languages, translate the content
    return this.translateContent(site.content, lang);
  }

  private async translateContent(content: HeritageContent, targetLang: string): Promise<HeritageContent> {
    const translatedContent = { ...content };

    // Translate main content fields
    translatedContent.pageTitle = await this.translateText(content.pageTitle, targetLang);
    translatedContent.pageSubtitle = await this.translateText(content.pageSubtitle, targetLang);

    // Translate sections
    translatedContent.sections.legacy.title = await this.translateText(content.sections.legacy.title, targetLang);
    translatedContent.sections.legacy.content = await this.translateText(content.sections.legacy.content, targetLang);

    translatedContent.sections.criteria.title = await this.translateText(content.sections.criteria.title, targetLang);
    for (let i = 0; i < translatedContent.sections.criteria.items.length; i++) {
      translatedContent.sections.criteria.items[i].heading = await this.translateText(content.sections.criteria.items[i].heading, targetLang);
      translatedContent.sections.criteria.items[i].description = await this.translateText(content.sections.criteria.items[i].description, targetLang);
    }

    translatedContent.sections.virtualExperience.title = await this.translateText(content.sections.virtualExperience.title, targetLang);
    translatedContent.sections.virtualExperience.content = await this.translateText(content.sections.virtualExperience.content, targetLang);

    translatedContent.sections.community.title = await this.translateText(content.sections.community.title, targetLang);
    translatedContent.sections.community.content = await this.translateText(content.sections.community.content, targetLang);

    translatedContent.sections.aditionalData.title = await this.translateText(content.sections.aditionalData.title, targetLang);
    translatedContent.sections.aditionalData.content = await this.translateText(content.sections.aditionalData.content, targetLang);

    translatedContent.sections.aditionalData2.title = await this.translateText(content.sections.aditionalData2.title, targetLang);
    translatedContent.sections.aditionalData2.content = await this.translateText(content.sections.aditionalData2.content, targetLang);

    translatedContent.sections.aditionalDat3.title = await this.translateText(content.sections.aditionalDat3.title, targetLang);
    translatedContent.sections.aditionalDat3.content = await this.translateText(content.sections.aditionalDat3.content, targetLang);

    translatedContent.sections.aditionalDat4.title = await this.translateText(content.sections.aditionalDat4.title, targetLang);
    translatedContent.sections.aditionalDat4.content = await this.translateText(content.sections.aditionalDat4.content, targetLang);

    translatedContent.sections.aditionalDat5.title = await this.translateText(content.sections.aditionalDat5.title, targetLang);
    translatedContent.sections.aditionalDat5.content = await this.translateText(content.sections.aditionalDat5.content, targetLang);

    translatedContent.sections.learnMore.title = await this.translateText(content.sections.learnMore.title, targetLang);

    return translatedContent;
  }

  private async translateText(text: string, targetLang: string): Promise<string> {
    if (!text || text.trim() === '') return text;

    try {
      const response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=AIzaSyC-U0ZsN3yMFgXUqrEu72N_3iAQZO2IkyU&q=${encodeURIComponent(text)}&target=${targetLang}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const data = await response.json();
      return data.data.translations[0].translatedText;
    } catch (error) {
      console.error('Translation error:', error);
      return text; // Return original text if translation fails
    }
  }
}