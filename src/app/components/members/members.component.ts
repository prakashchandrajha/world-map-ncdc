import { Component, OnInit } from '@angular/core';
import { Banner } from '../../shared/banner/banner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-members',
  imports: [Banner, CommonModule],
  templateUrl: './members.component.html',
  styleUrl: './members.component.css'
})
export class MembersComponent implements OnInit {
  allMembers: any[] = [];
  filteredMembers: any[] = [];
  showCategory: string = 'all';

  ngOnInit() {
    this.allMembers = [
      // Working Group Members
      {
        name: 'Márcio Lopes de Freitas',
        title: 'Mentor, President, Organization of Brazilian Cooperatives (Brazil)',
        description: 'Longtime leader in the Brazilian cooperative movement. Anchors the group\'s guidance and strategic direction.Strong advocate for the defense of cooperative heritage worldwide. Guides the group\'s mission to elevate cooperative cultural heritage.',
        organization: 'Organization of Brazilian Cooperatives',
        country: 'Brazil',
        category: 'workingGroup',
        image: '../../../../../assets/images/m1.jpg'
      },
      {
        name: 'Jeroen Douglas',
        title: 'Ex-officio, ICA Director-General',
        description: 'Provides overall leadership and authority to the Working Group. Ensures alignment with the ICA\'s global mission and policies.Brings the ICA\'s international perspective to cooperative heritage.Supports the strategic growth of cooperative cultural recognition.',
        organization: 'International Cooperative Alliance',
        country: '',
        category: 'workingGroup',
        image: '../../../../../assets/images/m10.jpg'
      },
      {
        name: 'Aicha Errifaai',
        title: 'Director General, Office of Development Cooperation (Morocco)',
        description: 'Guides Morocco\'s social and solidarity economy policies.Integrates cooperative heritage into national strategies for inclusive growth. Key figure in North African cooperative development. Adds government experience to the Working Group.',
        organization: 'Office of Development Cooperation',
        country: 'Morocco',
        category: 'workingGroup',
        image: '../../../../../assets/images/m2.jpg'
      },
      {
        name: 'Andreas Wieg',
        title: 'Executive Secretary, Co-operative Federation of Nigeria',
        description: 'Leads Nigeria\'s cooperative development agenda. Ensures the inclusion of African heritage in the ICA\'s global representation. Brings expertise from one of Africa\'s most vibrant cooperative sectors.Supports the recognition of African cooperative traditions.',
        organization: 'Co-operative Federation of Nigeria',
        country: 'Nigeria',
        category: 'workingGroup',
        image: '../../../../../assets/images/m3.jpg'
      },
      {
        name: 'Ebun Akin-Falaiye',
        title: 'Executive Secretary, Cooperative Federation of Nigeria',
        description: 'Leads Nigeria\'s cooperative development agenda. Ensures the inclusion of African heritage in ICA\'s global representation. Brings expertise from one of Africa\'s most vibrant cooperative sectors. Supports the recognition of African cooperative traditions.',
        organization: 'Cooperative Federation of Nigeria',
        country: 'Nigeria',
        category: 'workingGroup',
        image: '../../../../../assets/images/m4.jpg'
      },
      {
        name: 'Rohit Gupta',
        title: 'Deputy Managing Director, NCDC (India)',
        description: 'Senior official in India\'s cooperative development corporation. Connects Indian cooperative heritage to international heritage mapping. Brings expertise in cooperative policy and infrastructure.Ensures that India\'s cooperative history is represented globally.',
        organization: 'National Cooperative Development Corporation',
        country: 'India',
        category: 'workingGroup',
        image: '../../../../../assets/images/m5.jpg'
      },
      {
        name: 'Liz McIvor',
        title: 'Manager and Leader, The Co-operative Heritage Trust (United Kingdom)',
        description: 'Oversees cooperative heritage narrative and preservation.Anchors cooperative history through education and museum work. Represents UK heritage methods in the Working Group. Connects the legacy of the Rochdale Pioneers with modern cooperative movements.',
        organization: 'The Co-operative Heritage Trust',
        country: 'United Kingdom',
        category: 'workingGroup',
        image: '../../../../../assets/images/m7.jpg'
      },
      {
        name: 'Tiago Luiz Schmidt',
        title: 'President, Sicredi Pioneira (Brazil)',
        description: 'Leads one of Brazil\'s oldest credit unions. Adds the perspective of legacy financial heritage to the group\'s work. Promotes cooperative financing as a cultural and social force. Connects local cooperative history to global networks.',
        organization: 'Sicredi Pioneira',
        country: 'Brazil',
        category: 'workingGroup',
        image: '../../../../../assets/images/m8.jpg'
      },
      {
        name: 'Erbin Crowell',
        title: 'Executive Director, NFCA; Board Member, DotCoop & NCBA CLUSA (USA)',
        description: 'Active in US cooperative governance and digital infrastructure. Amplifies North American cooperative heritage globally. Links local cooperative narratives to international recognition.Strengthens cooperative identity through advocacy and education.',
        organization: 'NFCA',
        country: 'United States of America',
        category: 'workingGroup',
        image: '../../../../../assets/images/mem/ErbinCrowell.png'
      },
      {
        name: 'Osamu Nakano',
        title: 'Secretary-General, Japan Workers\' Co-operative Union (Japan)',
        description: 'Director of International Relations for JWCU and President of CICOPA Asia-Pacific.Led significant legislative advocacy, including Japan\'s Workers\' Co-operative Law.Expert in cooperative governance and international relations.Represents Asia-Pacific in global cooperative heritage.',
        organization: 'Japan Workers\' Co-operative Union',
        country: 'Japan',
        category: 'workingGroup',
        image: '../../../../../assets/images/m6.jpg'
      },
      
      // Technical Team Members
      {
        name: 'Fabíola da Silva Nader Motta',
        title: 'General Manager, Organization of Brazilian Cooperatives, Brazil',
        description: 'Coordinates operations within Brazil\'s national cooperative federation. Supports the logistical and organizational functions of the Working Group. Provides management expertise for cooperative advocacy. Connects organizational support with the CCH WG\'s goals.',
        organization: 'Organization of Brazilian Cooperatives',
        country: 'Brazil',
        category: 'technicalTeam',
        image: '../../../../../assets/images/mem/rrr.png'
      },
      {
        name: 'João Pinheiro Valadares Penna',
        title: 'Coordinator of International Relations, Organization of Brazilian Cooperatives, Brazil',
        description: 'Manages cross-border liaison and cooperation for ICA efforts.Facilitates international heritage collaboration and outreach. Connects Brazilian cooperatives to global platforms.Strengthens cultural exchange within cooperative heritage.',
        organization: 'Organization of Brazilian Cooperatives',
        country: 'Brazil',
        category: 'technicalTeam',
        image: '../../../../../assets/images/mem/mtv.jpg'
      },
      {
        name: 'Lucas Badú',
        title: 'Analyst and Graphic Designer Organization of Brazilian Cooperatives, Brazil',
        description: 'Provides analytical and design support for the Working Group\'s communications and visual materials.',
        organization: 'Organization of Brazilian Cooperatives',
        country: 'Brazil',
        category: 'technicalTeam',
        image: '../../../../../assets/images/m13.jpg'
      },
      {
        name: 'Iago Carvalho',
        title: 'Digital Platforms Analyst, Organization of Brazilian Cooperatives, Brazil',
        description: 'Manages digital platforms and technical infrastructure for the Working Group\'s online presence and collaboration tools.',
        organization: 'Organization of Brazilian Cooperatives',
        country: 'Brazil',
        category: 'technicalTeam',
        image: '../../../../../assets/images/m14.jpg'
      },
      {
        name: 'Prachi Rathi',
        title: 'Media and Communication, National Cooperative Development Corporation, India',
        description: 'Handles media relations and communication strategies for cooperative heritage promotion and awareness.',
        organization: 'National Cooperative Development Corporation',
        country: 'India',
        category: 'technicalTeam',
        image: '../../../../../assets/images/mem/prachi.jpeg'
      },
      {
        name: 'Meenu Bhaskar',
        title: 'Deputy Director, National Cooperative Development Corporation, India',
        description: 'Supports cooperative development initiatives and heritage documentation efforts in India.',
        organization: 'National Cooperative Development Corporation',
        country: 'India',
        category: 'technicalTeam',
        image: '../../../../../assets/images/mem/meenu.jpeg'
      },
      {
        name: 'Santosh Kumar Padmanabhan',
        title: 'Director of Legislation, International Cooperative Alliance; Staff Coordinator, ICA-CCH Working Group.',
        description: 'Leads legislative functions at the ICA Global Office. Provides legal expertise for standards development. Coordinates global cooperative law and outreach efforts. Ensures that international law alignment on heritage processes is respected.',
        organization: 'International Cooperative Alliance',
        country: '',
        category: 'technicalTeam',
        image: '../../../../../assets/images/mem/santosh.jpg'
      }
    ];
    
    this.filteredMembers = [...this.allMembers];
  }

  filterMembers(searchTerm: string) {
    if (!searchTerm) {
      this.filteredMembers = [...this.allMembers];
      return;
    }
    
    const term = searchTerm.toLowerCase();
    this.filteredMembers = this.allMembers.filter(member => 
      member.name.toLowerCase().includes(term) ||
      member.organization.toLowerCase().includes(term) ||
      member.country.toLowerCase().includes(term) ||
      member.title.toLowerCase().includes(term)
    );
  }

  filterByCategory(category: string) {
    this.showCategory = category;
    
    if (category === 'all') {
      this.filteredMembers = [...this.allMembers];
    } else {
      this.filteredMembers = this.allMembers.filter(member => member.category === category);
    }
  }
}