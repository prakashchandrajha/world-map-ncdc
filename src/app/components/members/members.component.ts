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
        name: 'Mr. Marcio Lopes de Freitas',
        title: 'Mentor of ICA-CCH WG',
        // description: 'Longtime leader in the Brazilian cooperative movement. Anchors the group\'s guidance and strategic direction.Strong advocate for the defense of cooperative heritage worldwide. Guides the group\'s mission to elevate cooperative cultural heritage.',
        organization: 'President, Organization of Brazilian Cooperatives, Brazil',
        country: '',
        category: 'workingGroup',
        image: '../../../../../assets/images/m1.jpg'
      },
      {
        name: 'Ms. Aicha Errifaai',
        title: 'Director General',
        // description: 'Provides overall leadership and authority to the Working Group. Ensures alignment with the ICA\'s global mission and policies.Brings the ICA\'s international perspective to cooperative heritage.Supports the strategic growth of cooperative cultural recognition.',
        organization: 'Office of Cooperation Development, Morocco',
        country: '',
        category: 'workingGroup',
        image: '../../../../../assets/images/ladya.jpg'
      },
      {
        name: 'Dr. Andreas Wieg',
        title: 'Head of Department',
        // description: 'Leads Nigeria\'s cooperative development agenda. Ensures the inclusion of African heritage in the ICA\'s global representation. Brings expertise from one of Africa\'s most vibrant cooperative sectors.Supports the recognition of African cooperative traditions.',
        organization: 'DGRV - Deutscher Genossenschafts- und Raiffeisenverband e.V., Germany',
        country: '',
        category: 'workingGroup',
        image: '../../../../../assets/images/m3.jpg'
      },
      {
        name: 'Ms. Ebun Akin-Falaiye',
        title: 'Executive Secretary',
        // description: 'Leads Nigeria\'s cooperative development agenda. Ensures the inclusion of African heritage in ICA\'s global representation. Brings expertise from one of Africa\'s most vibrant cooperative sectors. Supports the recognition of African cooperative traditions.',
        organization: 'Cooperative Federation of Nigeria',
        country: '',
        category: 'workingGroup',
        image: '../../../../../assets/images/m4.jpg'
      },
      {
        name: 'Mr. Rohit Gupta',
        title: 'Deputy Managing Director',
        // description: 'Senior official in India\'s cooperative development corporation. Connects Indian cooperative heritage to international heritage mapping. Brings expertise in cooperative policy and infrastructure.Ensures that India\'s cooperative history is represented globally.',
        organization: 'National Cooperative Development Corporation, India',
        country: '',
        category: 'workingGroup',
        image: '../../../../../assets/images/m5.jpg'
      },
      {
        name: 'Mr. Osamu Nakano',
        title: 'Secretary General',
        // description: 'Director of International Relations for JWCU and President of CICOPA Asia-Pacific.Led significant legislative advocacy, including Japan\'s Workers\' Co-operative Law.Expert in cooperative governance and international relations.Represents Asia-Pacific in global cooperative heritage.',
        organization: 'Japan Workers’ Cooperative Union, Japan',
        country: '',
        category: 'workingGroup',
        image: '../../../../../assets/images/m6.jpg'
      },
      {
        name: 'Ms. Liz McIvor',
        title: 'Manager and Lead',
        // description: 'Oversees cooperative heritage narrative and preservation.Anchors cooperative history through education and museum work. Represents UK heritage methods in the Working Group. Connects the legacy of the Rochdale Pioneers with modern cooperative movements.',
        organization: 'The Co-operative Heritage Trust, United Kingdom',
        country: '',
        category: 'workingGroup',
        image: '../../../../../assets/images/m7.jpg'
      },
      {
        name: 'Mr. Tiago Luiz Schmidt',
        title: 'President',
        // description: 'Leads one of Brazil\'s oldest credit unions. Adds the perspective of legacy financial heritage to the group\'s work. Promotes cooperative financing as a cultural and social force. Connects local cooperative history to global networks.',
        organization: 'Sicredi Pioneira, Brazil',
        country: '',
        category: 'workingGroup',
        image: '../../../../../assets/images/m8.jpg'
      },
      {
        name: 'Mr. Erbin Crowell',
        title: 'Board of Directors of DotCoop & NCBA CLUSA, and Executive Director',
        // description: 'Active in US cooperative governance and digital infrastructure. Amplifies North American cooperative heritage globally. Links local cooperative narratives to international recognition.Strengthens cooperative identity through advocacy and education.',
        organization: 'NFCA, United States of America',
        country: '',
        category: 'workingGroup',
        image: '../../../../../assets/images/mem/ErbinCrowell.png'
      },
       {
        name: 'Mr. Jeroen Douglas',
        title: '(Ex-officio) Director General, ',
        // description: 'Active in US cooperative governance and digital infrastructure. Amplifies North American cooperative heritage globally. Links local cooperative narratives to international recognition.Strengthens cooperative identity through advocacy and education.',
        organization: 'International Cooperative Alliance CCH-WG Technical Team',
        country: '',
        category: 'workingGroup',
        image: '../../../../../assets/images/Picture3qq.jpg'
      },



      
      
      // Technical Team Members
      {
        name: 'Ms. Fabíola da Silva Nader Motta',
        title: 'General Manager',
        // description: 'Coordinates operations within Brazil\'s national cooperative federation. Supports the logistical and organizational functions of the Working Group. Provides management expertise for cooperative advocacy. Connects organizational support with the CCH WG\'s goals.',
        organization: 'Organization of Brazilian Cooperatives, Brazil',
        country: '',
        category: 'technicalTeam',
        image: '../../../../../assets/images/mem/rrr.png'
      },
      {
        name: 'Mr. João Pinheiro Valadares Penna',
        title: 'Coordinator of International Relations',
        // description: 'Manages cross-border liaison and cooperation for ICA efforts.Facilitates international heritage collaboration and outreach. Connects Brazilian cooperatives to global platforms.Strengthens cultural exchange within cooperative heritage.',
        organization: 'Organization of Brazilian Cooperatives, Brazil',
        country: '',
        category: 'technicalTeam',
        image: '../../../../../assets/images/mem/mtv.jpg'
      },
      {
        name: 'Mr. Lucas Badú',
        title: 'Analyst and Graphic Designer Organization of Brazilian Cooperatives, Brazil',
        // description: 'Provides analytical and design support for the Working Group\'s communications and visual materials.',
        organization: 'Organization of Brazilian Cooperatives',
        country: '',
        category: 'technicalTeam',
        image: '../../../../../assets/images/mem/baduu.png'
      },
      {
        name: 'Mr. Iago Carvalho',
        title: 'Digital Platforms Analyst, Organization of Brazilian Cooperatives, Brazil',
        // description: 'Manages digital platforms and technical infrastructure for the Working Group\'s online presence and collaboration tools.',
        organization: 'Organization of Brazilian Cooperatives',
        country: '',
        category: 'technicalTeam',
        image: '../../../../../assets/images/mem/i.jpeg'
      },
      {
        name: 'Ms. Meenu Bhaskar',
        title: 'Deputy Director',
        // description: 'Supports cooperative development initiatives and heritage documentation efforts in India.',
        organization: 'National Cooperative Development Corporation, India',
        country: '',
        category: 'technicalTeam',
        image: '../../../../../assets/images/mem/meenu.jpeg'
      },
      {
        name: 'Ms. Prachi Rathi',
        title: 'Media and Communication',
        // description: 'Handles media relations and communication strategies for cooperative heritage promotion and awareness.',
        organization: 'National Cooperative Development Corporation, India ',
        country: '',
        category: 'technicalTeam',
        image: '../../../../../assets/images/mem/prachi.jpeg'
      },
      
      {
        name: 'Mr. Prakash Chandra Jha',
        title: 'Web Developer',
        // description: 'Supports cooperative development initiatives and heritage documentation efforts in India.',
        organization: 'National Cooperative Development Corporation, India',
        country: '',
        category: 'technicalTeam',
        image: '../../../../../assets/images/mem/prakash.jpeg'
      },
      {
        name: 'Mr. Santosh Kumar Padmanabhan',
        title: 'Director of Legislation, International Cooperative Alliance',
        // description: 'Leads legislative functions at the ICA Global Office. Provides legal expertise for standards development. Coordinates global cooperative law and outreach efforts. Ensures that international law alignment on heritage processes is respected.',
        organization: 'Staff Coordinator, ICA-CCH Working Group. ',
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