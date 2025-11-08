import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface EventItem {
  id: number;
  date: string;
  month: string;
  year: string;
  title: string;
  content: string;
}

@Component({
  selector: 'app-events',
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  openEventId: number | null = null;

  events: EventItem[] = [
    {
      id: 1,
      date: '12',
      month: 'Nov',
      year: '2025',
      title: 'Launch of the World Map on Cooperativa Cultural Heritage, Brasilia, Brazil',
      content: ''
    },
    {
      id: 2,
      date: '1',
      month: 'OCT',
      year: '2025',
      title: 'UNESCO Declares its Ambition to include Culture as a Stand alone Goal',
      content: `
       

        <div class="flex items-center">
  <img src="../../../assets/images/1octeve.png" alt="" class="w-80 h-auto mr-4">
  <p class="text-gray-700 leading-relaxed">At the end of the three-day global conference in Barcelona, ministers of culture from around the world adopted a shared declaration that put culture front and centre anchoring it as a human right, global public good and vital pillar of sustainable development. The document insists that for societies to thrive justly, peacefully and resiliently culture must be woven through every policy, from education and creative economies to climate, heritage, digital life and crisis recovery. Notably, it calls for:</p>
</div>

        <div class="bg-red-50 rounded-lg p-6 mb-6">
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start">
              <span class="text-[#7a004a] font-bold mr-2">•</span>
              <span>Upholding the right of all people to participate in cultural life.</span>
            </li>
            <li class="flex items-start">
              <span class="text-[#7a004a] font-bold mr-2">•</span>
              <span>Integrating culture into the post-2030 global development agenda—potentially even as its own goal.</span>
            </li>
            <li class="flex items-start">
              <span class="text-[#7a004a] font-bold mr-2">•</span>
              <span>Elevating cultural rights, diversity (especially of Indigenous peoples, people of African descent, minorities and vulnerable groups), and restitution of cultural property.</span>
            </li>
            <li class="flex items-start">
              <span class="text-[#7a004a] font-bold mr-2">•</span>
              <span>Merging culture with education, lifelong learning, arts-and-heritage when shaping skills, technology, climate action and inclusive economies.</span>
            </li>
            <li class="flex items-start">
              <span class="text-[#7a004a] font-bold mr-2">•</span>
              <span>Recognising the creative and cultural sectors as engines of innovation, decent work and inclusive growth.</span>
            </li>
            <li class="flex items-start">
              <span class="text-[#7a004a] font-bold mr-2">•</span>
              <span>Linking culture deeply to the climate crisis, digital transformation (including AI), crisis response and heritage in emergencies.</span>
            </li>
          </ul>
        </div>

        <div class="bg-gray-50 rounded-lg p-4">
  <a href="https://www.ichgovernance.com/wp-content/uploads/2025/10/EN_MONDIACULT_Outcome_Document-Final-27.09.25.pdf" target="_blank" class="text-gray-700 hover:text-purple-1000">
    <span class="">Click here and read the full declaration.</span>
  </a>
</div>

      `
    },
    {
      id: 3,
      date: '23',
      month: 'SEP',
      year: '2025',
      title: 'ICA Official Pre-Event to UNESCO Mondiacult',
      content: `
           <section class="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-sm font-[Poppins]">

<div class="flex items-center gap-6 mb-8">
  <p class="text-gray-700 leading-relaxed">
    On 26 September 2025, during the MONDIACULT 2025 – the United Nations Educational, Scientific and Cultural Organization (UNESCO) World Conference on Cultural Policies and Sustainable Development held in Barcelona – a hybrid side-event was hosted by ICA together with CICOPA, Abacus Cooperative and ASETT (Arizmendiarrieta Social Economy Think Tank). 
The session, titled “Cooperatives in Culture for Diversity, Cultural Rights and Decent Work,” positioned cooperatives as dynamic cultural actors and essential stakeholders in cultural policy, creativity, and social economics.

Key themes included:
  </p>
    <img src="assets/images/1octeve.png" alt="Description 1" class="w-[300px] h-auto rounded-lg shadow-md">

</div>



  <!-- Green box list -->
  <div class="bg-green-50 rounded-lg p-6 mb-8">
    <ul class="space-y-2 text-gray-700">
      <li class="flex items-start">
        <span class="text-[#7a004a] font-bold mr-2">•</span>
        <span>The role of cooperatives as innovative, equitable, rights-based models in cultural and creative industries, fostering diversity of voices and ownership.</span>
      </li>
      <li class="flex items-start">
        <span class="text-[#7a004a] font-bold mr-2">•</span>
        <span>Education and lifelong learning as foundational elements of cooperative identity, linked to cultural literacy, democratic participation and diversity.</span>
      </li>
      <li class="flex items-start">
        <span class="text-[#7a004a] font-bold mr-2">•</span>
        <span>The mapping and recognition of cooperative cultural heritage sites as living expressions of cultural identity, diversity and resilience across generations.</span>
      </li>
    </ul>
  </div>

  <!-- Second image -->
 <div class="flex items-center space-x-6 mb-8">
  <img src="assets/images/image 21.png" alt="Description 2" class="w-[300px] h-auto rounded-lg shadow-md">
  <p class="text-gray-700 leading-relaxed">
    Speakers included prominent cooperative leaders, policymakers and international experts such as Maravillas Rojo (President of Abacus Cooperative), Nadia Quevedo (Commissioner for Economic Promotion, Barcelona City Council), Iñigo Albuzuri (ICA Board Member & Director of ASETT) and Simel Esim (Head of the ILO Cooperative, Social and Solidarity Economy Unit, Chair of UN TFSSE) alongside a video-message from Ariel Guarco (President of ICA).
  </p>
</div>


  <!-- Text paragraphs -->
  
  <p class="text-gray-700 mb-4 leading-relaxed">
    By convening this event, the cooperative movement reaffirmed its commitment to culture as an integral dimension of sustainable development, embracing cooperative values of solidarity, equity and inclusion. The session helped position cooperatives firmly within global cultural-policy dialogues and strengthened efforts to ensure the cooperative enterprise form is recognised not just economically but culturally and socially.
  </p>

  <!-- Read more box -->
  <div class="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-all duration-300 cursor-pointer">
    <a href="https://ica.coop/en/events/cooperatives-culture-diversity-cultural-rights-and-decent-work-side-event-unesco-world" class="text-[#7a004a] font-semibold">Read more</a>
  </div>

</section>

      `
    },
    {
      id: 4,
      date: 'JUN',
      month: '',
      year: '2025',
      title: 'ICA organizes the first physical meeting of the Cultural Heritage Working Group',
      content: `
        <p class="text-gray-700 mb-6 leading-relaxed">
          The International Cooperative Alliance (ICA) advanced a landmark initiative to establish international standards for identifying, validating, and recognising cooperative cultural-heritage sites worldwide. As reported by Nizwe Piesse, these proposed standards formed the foundation for selecting an inaugural list of 25 “undisputed” cooperative heritage sites, to be showcased on a global digital map.
        </p>
         <div class="flex items-center space-x-6 mb-8">
  <img src="assets/images/eve3.png" alt="Description 2" class="w-[300px] h-auto rounded-lg shadow-md">
  <p class="text-gray-700 leading-relaxed">
    The standards were designed to provide clear criteria and a consistent process through which ICA member organisations could nominate sites with deep connections to the cooperative movement’s cultural legacy. They reflected the movement’s commitment to viewing heritage not only through an economic lens, but also in terms of education, inclusion, sustainability, and collective memory. Through this initiative, the ICA positioned itself as a key steward of cooperative cultural heritage, laying the groundwork for broader recognition and international collaboration.
  </p>
</div>

        <div class="space-y-4 text-gray-700 leading-relaxed">
          <p>
            By developing these standards, the ICA ensured reliability and comparability across regional and cultural contexts, allowing diverse cooperative traditions to be evaluated against common benchmarks. The anticipated launch of the standards and the accompanying digital heritage map aimed to increase global visibility for cooperative heritage as a vital part of the world’s intangible cultural heritage.
          </p>

          <p>
            This effort encouraged cooperative organisations across all regions to engage in the nomination process and contributed to establishing cooperative heritage as an essential pillar within global heritage dialogues and sustainable development discussions.
          </p>

        </div>
      `
    },
    {
      id: 5,
      date: 'FEB',
      month: '',
      year: '2025',
      title: 'Launch of the Programme of the ICA Working Group on Cooperative Cultural Heritage',
      content: `
        <div class="flex items-start space-x-6">
  <div class="flex-1">
    <p class="text-gray-700 mb-4 leading-relaxed">In February, 2025, the International Cooperative Alliance (ICA) announced the formation of a new global working group: the Cooperative Cultural Heritage Working Group (CCH-WG). This initiative marks a significant step in the cooperative movement’s efforts to identify, document and promote cooperative heritage sites, traditions and practices around the world.</p>
    <p class="text-gray-700 leading-relaxed">Rooted in the cooperative idea’s earlier recognition by United Nations Educational, Scientific and Cultural Organization (UNESCO) in 2016 as part of the Intangible Cultural Heritage of Humanity, the CCH-WG seeks to bring this cultural dimension into sharper focus. Chaired by ICA Director General Jeroen Douglas and mentored by Organization of Brazilian Cooperatives (OCB), the working group comprises expert cooperators from all ICA regions and includes a dedicated technical team from ICA and OCB.
</p>
  </div>
  <img src="assets/images/eve4.png" alt="Description" class="w-[400px] h-auto rounded-lg shadow-md">
</div>


       

        <div class="bg-blue-50 rounded-lg p-6">
          <h4 class="font-bold text-gray-800 mb-4">For 2025, the CCH-WG has set three major deliverables:</h4>
          <ol class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <span class="bg-[#7a004a] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">1</span>
              <span>A digital map showcasing 25 undisputed geographic sites of cooperative cultural heritage.</span>
            </li>
            <li class="flex items-start">
              <span class="bg-[#7a004a] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">2</span>
              <span>A set of standards to guide the selection of future cooperative cultural heritage sites.</span>
            </li>
            <li class="flex items-start">
              <span class="bg-[#7a004a] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">3</span>
              <span>A global communications campaign to publicly launch and promote the working group’s work and programme.</span>
            </li>
          </ol>
        </div>

        <p class="text-gray-700 mt-6 leading-relaxed">
          The initiative invites organisations wishing to feature their cooperative sites on the map to contact the CCH-WG by a given deadline (31 May 2025) via the ICA global office. Through this effort, the cooperative movement demonstrates its commitment to preserving cooperative memory and culture—and ensuring that cooperative heritage becomes a vital component of the global cultural narrative.
        </p>
      `
    },
    {
      id: 6,
      date: '26',
      month: 'SEP',
      year: '2022',
      title: 'Mondiacult 2022: Cooperatives Enhance a Resilient Cultural Sector',
      content: `
      <div class="flex justify-center">
  <img src="assets/images/eve5.png" alt="Description" class="w-[500px] h-auto rounded-lg shadow-md">
</div>

        <p class="text-gray-700 mt-10 leading-relaxed">
          At UNESCO’s Mondiacult 2022 Conference on Cultural Policies and Sustainable Development, the International Cooperative Alliance (ICA) organized a side event titled “Cooperatives are Key Stakeholders in Advancing SDGs Through the Culture and Creative Sector.” Held in Brussels and online, and hosted with CICOPA and Cooperatives of the Americas, the session gathered over 200 participants, highlighting the cooperative model’s contribution to cultural resilience and sustainable development.
        </p>

        <div class="space-y-4 text-gray-700 leading-relaxed">
          <p>
            The event celebrated the 2016 UNESCO recognition of the cooperative idea and practice as part of humanity’s Intangible Cultural Heritage. Discussions focused on four themes: the role of cooperatives in safeguarding cultural heritage, promoting decent work in the creative sector, advancing cooperative education, and fostering sustainable cultural ecosystems.
          </p>


          <p>
            Speakers included ICA President Ariel Guarco, who emphasized partnerships with UNESCO to embed cooperative values in education, and Iñigo Albuzuri, President of CICOPA, who underscored cooperatives’ role in preserving and transmitting cultural heritage. Christine Merkel of the German Commission for UNESCO urged cooperatives to take bold action in shaping future cultural policies.
          </p>

          <p>
            Participants called for stronger international networking among cultural cooperatives and reaffirmed the cooperative movement’s commitment to inclusivity, sustainability, and solidarity in the global cultural landscape.
          </p>
          <p>
         By engaging in Mondiacult 2022, the ICA highlighted that cooperatives are not only economic actors but also cultural bearers, ensuring that cooperative values continue to inspire creative, equitable, and resilient societies worldwide.
          </p>
        
 <div class="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-all duration-300 cursor-pointer">
    <a href="https://ica.coop/en/newsroom/news/mondiacult-2022-cooperatives-enhance-resilient-cultural-sector" class="text-[#7a004a] font-semibold">Read more</a>
  </div>
           

         
          
         
        </div>

        
      `
    },
    {
      id: 7,
      date: '20',
      month: 'NOV',
      year: '2021',
      title: 'Cooperatives and Cultural Heritage at the World Cooperative Congress',
      content: `
        <div class="flex justify-center">
  <img src="assets/images/eve6.png" alt="Description" class="w-[500px] h-auto rounded-lg shadow-md">
</div>

        <p class="text-gray-700 mt-10 leading-relaxed">
          At the World Cooperative Congress 2021 in Seoul, delegates engaged in a thought-provoking afternoon panel titled “Co-op culture & cultural heritage”, part of the Congress’s first key theme: Examining Our Cooperative Identity. The session opened with facilitator Stefania Marcone referencing the landmark 2016 decision by UNESCO, which formally recognised cooperatives as part of the Intangible Cultural Heritage of Humanity.
        </p>

        <div class="space-y-4 text-gray-700 leading-relaxed">
          <p>
            In his presentation, Thomas Mende (Vice President, DZ Bank) outlined the cooperative movement’s role in securing that recognition, stressing that the award was for all cooperatives worldwide, not just for the German organisations that led the application. Then, Thomas Knubben (Director, Institute of Cultural Management) explored the concept of “cultural cooperatives” operating across sectors—from media and arts venues to heritage breweries. He described how cooperative culture plays out on three levels: macro (shifting attitudes), meso (shaping laws and education) and micro (everyday cooperative practice).
          </p>


          <p>
            Panelists brought diverse international experiences. For example, 12-year-old Filipino student Cerge S. Perualila spoke about embedding cooperative values through co-ops in her school. In Morocco, Ouim Aziz described a women’s cooperative tackling environmental challenges, while in Kyrgyzstan, Dinara Chochunbaeva shared insights from women’s felting cooperatives that preserve cultural traditions. In Wales, lifelong cooperative activist David Smith called attention to the lack of awareness about the cooperative heritage of Robert Owen and suggested establishing a global annual “Robert Owen Day” to strengthen cooperative education.
          </p>

          <p>
            Companying these voices, Hyeonggeun Yoon (CEO, Hansalim Cooperative) reflected on South Korea’s rice-field communities, mutual assistance traditions, and the need to revive regional cooperative cultures in addressing food insecurity and climate challengesMeanwhile, Giovanna Barni (President, CoopCulture & Culturmedia) stressed how culture within the cooperative sector contributes to quality employment, audience engagement and territorial sustainability. Finally, Christine Merkel (German Commission for UNESCO) closed the session by highlighting how “culture for social good” is now emerging more clearly and urged the global cooperative movement to map cultural cooperative activity and contribute meaningfully to UNESCO’s next world conference.
          </p>
         
        
 <div class="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-all duration-300 cursor-pointer">
    <a href="https://icaworldcoopcongress.coop/stories/coop-culture-cultural-heritage/" class="text-[#7a004a] font-semibold">Read more</a>
  </div>
           

         
          
         
        </div>
      `
    }
  ];

  toggleEvent(eventId: number): void {
    this.openEventId = this.openEventId === eventId ? null : eventId;
  }
}
