import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  getHomeCards() {
    return [
        {img:'../../../assets/images/uni2.png',badge:'../../../assets/images/b1 (2).png',title:'Tangible Heritage of Cooperation',desc:'Physical sites, Landscapes, Buildings, Archives, and infrastructure directly associated with cooperative heritage.',btn:'read more', moreText: 'Physical places, buildings, settlements, and infrastructure that embody the history and legacy of cooperative enterprise. These include cooperative stores, factories, housing complexes, agricultural facilities, and landscapes directly associated with cooperative activity. Tangible CCH represents the material foundations of cooperation, visible in the built environment and cultural landscapes shaped by cooperative governance.'},
         {img:'../../../assets/images/aunty1.png',badge:'../../../assets/images/b1 (1).png',title:'Intangible Heritage of Cooperation',desc:'Traditions, governance systems, cultural values, and collective practices underpinning cooperation and Cooperative Culture passed down through generations. (Launch in 2026)',btn:'Coming Soon',moreText: `The traditions, practices, values, and governance systems that underpin cooperative life. These intangible elements include democratic decision-making, community self-help, intergenerational solidarity, and cultural expressions tied to cooperative enterprises.

This includes evident transmission and practice of cooperative principles, rituals of democratic participation, oral histories, solidarity practices, and community-based knowledge. Intangible CCH captures the living cultural dimension of cooperation, how people organize, govern, and sustain social and economic life together.

These elements, more often than not, inscribed by the United Nations Education, Scientific and Cultural Organization (UNESCO) as intangible culture of humanity are not only cultural treasures but also living cooperative practices. They demonstrate that cooperation is not just an economic model but a deeply rooted cultural tradition, embedded in food, festivals, governance, and resource use.`},

    ];
  }



  getSectionData() {
    return [
      {
        key: 'programme',
        title: 'What is the Cooperative Cultural Heritage Programme?',
        desc: `The ICA Cooperative Cultural Heritage Programme celebrates the world's
        cooperative story from historic buildings and monuments to traditions and practices
        that bring people together. These are the places and ideas that have stood the test of
        time, inspiring solidarity, trust, and shared purpose across generations.`,
        designType: 'designA',

        moreText: `
        Born in the United Nations International Year of Cooperatives, this global initiative is uncovering and honouring the most inspiring examples of cooperative heritage  the landmarks and living traditions that remind us what people can achieve when they work together.

The defintion of cooperatives according to the ICA Statement on the Cooperative Identity, recognizes the ability of members to meet their economic, social and cultrual needs and aspirations through their cooperatives, and the CCH Programme initiates a concrete process which aims to bring together the enterprise of 1 billion co-operators in meeting their cultural goals.

This  ambitious undertaking by the ICA establishes a Cooperative Cultural Heritage Inscription in recognition of the cooperative movement's enduring legacy and its unique contribution to global human history and through its contuining service, to sustainable development. This initiative aims to systematically identify, document, and safeguard the tangible and intangible manifestations of cooperative values and principles across continents. The Programme also guarantees concerted efforts to build a purposeful journey for youth, exchanges among the people of various cooperative regions worldwide, and more!

        `
      },
      {
        key: 'list',
        title: 'Why a Cooperative Cultural Heritage List?',
        desc: `The Cooperative Cultural Heritage List seeks to recognize and preserve the most significant elements of cooperative heritage, ensuring that future generations can learn from and build upon them. `,
        designType: 'designB',
        moreText: `
        Being inscribed on this list highlights a site, settlement, tradition, or institution as a living example of the cooperative spirit, with lessons that remain relevant in today's rapidly changing world.

The ICA Cooperative Cultural Heritage List is expected to highlight both iconic sites of origin and practices that are contemporary, creative and that embody the spirit of cooperation, creating a balanced and meaningful global map of cooperative identity, which must be the sum of all "our" (cooperative) experiences.
`
      }
    ];
  }


}