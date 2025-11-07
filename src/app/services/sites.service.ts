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
    // Canada Site
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
    // Brazil Site
    {
      id: 'theodor-amstad-monument',
      name: 'Monumento ao Cooperativismo, Nova Petrópolis',
      siteName:'The Square of Flowers and Solidarity',
      lat: -29.3804,
      lng: -51.1087,
      country: 'Brazil',
      continent: 'South America',
      type: 'tangible',
      content: {
        pageTitle: 'The Square of Flowers and Solidarity',
        pageSubtitle: 'Monumento ao Cooperativismo: A Living Symbol in Nova Petrópolis, Brazil',
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
          theme: 'Financial Group',
          entryYear: 2025,
          coordinates: '-29.3804 N, -51.1087 W";'
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
                heading: 'Criterion 7. Research and Knowledge Sharing',
                description: 'Sites shall contribute to cooperative research and knowledge dissemination, in collaboration with universities, archives, and digital platforms.'
              },
              {
                heading: 'Criterion 10. Preservation and Safeguarding',
                description: 'Sites shall commit to the safeguarding of cooperative records, artifacts, oral traditions, and buildings through sustainable conservation strategies.'
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
          learnMore: {
            title: 'Learn More',
            resources: [
              'Amul website',
              'Amul Dairy website'
              
            ]
          }
        }
      }
    },
    // India Site
    {
      id: 'amul-dairy',
      name: 'Dairy Plants of Anand Milk United Limited (AMUL) and the Verghese Kurien Museum',
      siteName:'Dairy Plants of Anand Milk United Limited (AMUL) and the Verghese Kurien (Dairy) Museum Anand',
      lat: 22.55267,
      lng: 72.9715,
      country: 'India',
      continent: 'Asia',
      type: 'tangible',
      content: {
        pageTitle: 'Dairy Plants of Anand Milk United Limited (AMUL) and the Verghese Kurien (Dairy) Museum Anand',
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
          theme: 'Milk Producers',
          entryYear: 2025,
          coordinates: '22.55267 N, 72.9715 W";'
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
                heading: 'Criterion 1. Historical Significance',
                description: 'Sites must be at least thirty (30) years old, preferably sixty (60), or directly associated with foundational events, milestones, or figures in the cooperative movement.'
              },
              {
                heading: 'Criterion 7. Research and Knowledge Sharing',
                description: 'Sites shall contribute to cooperative research and knowledge dissemination, in collaboration with universities, archives, and digital platforms.'
              },
              {
                heading: 'Criterion 10. Preservation and Safeguarding',
                description: 'Sites shall commit to the safeguarding of cooperative records, artifacts, oral traditions, and buildings through sustainable conservation strategies.'
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
          learnMore: {
            title: 'Learn More',
            resources: [
              'Amul website',
              'Amul Dairy website'
              
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
      lat: 46.2268,
      lng: 6.1400,
      country: 'Switzerland',
      continent: 'Europe',
      type: 'tangible',
      content: {
        pageTitle: 'International Labour Organization (ILO) Cooperative, Social and Solidarity Economy Unit, Geneva, Switzerland',
        pageSubtitle: 'Albert Thomas, first Director-General of the ILO and member of the ICA Central Committee, c. 1922,Courtesy of the ILO Historical Archives, Geneva.',
        mainImage: 'assets/images/sites_files/SwitzerlandMain.jpg',
        thumbnails: [
          'assets/images/sites_files/subImgSwitzerland.jpg',
          'assets/images/sites_files/SwitzerlandSubImg2.jpg',
          'assets/images/sites_files/SwitzerlandMain.jpg',
        ],
        infoCard: {
          country: 'Switzerland',
          countryFlag: 'assets/images/sites_files/country-img/Flag_of_Switzerland.svg',
          theme: 'Financial Group',
          entryYear: 2025,
          coordinates: '46.2268 N, 6.1400 W";'
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
                heading: 'Criterion 7. Research and Knowledge Sharing',
                description: 'Sites shall contribute to cooperative research and knowledge dissemination, in collaboration with universities, archives, and digital platforms.'
              },
              {
                heading: 'Criterion 10. Preservation and Safeguarding',
                description: 'Sites shall commit to the safeguarding of cooperative records, artifacts, oral traditions, and buildings through sustainable conservation strategies.'
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
      lat: 46.2268,
      lng: 6.1400,
      country: 'Switzerland',
      continent: 'Europe',
      type: 'tangible',
      content: {
        pageTitle: 'Weaving a Future Together: Ardelaine and the Spirit of Collective Work, France',
        pageSubtitle: 'Photo credit : “Ardelaine craft site, Saint-Pierreville” – © Ardelaine,',
        mainImage: 'assets/images/sites_files/franceMainImg.jpg',
        thumbnails: [
          'assets/images/sites_files/franceSubImg.jpg',
          'assets/images/sites_files/franceMainImg.jpg',
          'assets/images/sites_files/franceSubImg.jpg',
        ],
        infoCard: {
          country: 'France',
          countryFlag: 'assets/images/sites_files/country-img/Flag_of_France.svg',
          theme: 'Financial Group',
          entryYear: 2025,
          coordinates: '44.9378 N, 4.4964 W";'
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
                heading: 'Criterion 1. Historical Significance',
                description: 'Sites must be at least thirty (30) years old, preferably sixty (60), or directly associated with foundational events, milestones, or figures in the cooperative movement.'
              },
              {
                heading: 'Criterion 7. Research and Knowledge Sharing',
                description: 'Sites shall contribute to cooperative research and knowledge dissemination, in collaboration with universities, archives, and digital platforms.'
              },
              {
                heading: 'Criterion 10. Preservation and Safeguarding',
                description: 'Sites shall commit to the safeguarding of cooperative records, artifacts, oral traditions, and buildings through sustainable conservation strategies.'
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
          learnMore: {
            title: 'Learn More',
            resources: [
              'www.ardelaine.fr'
             
              
              
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
}