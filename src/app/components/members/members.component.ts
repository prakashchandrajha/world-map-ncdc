import { Component } from '@angular/core';
import { Banner } from '../../shared/banner/banner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-members',
  imports: [Banner, CommonModule],
  templateUrl: './members.component.html',
  styleUrl: './members.component.css'
})
export class MembersComponent {
 members = [
  {
    name: 'Mr Marcio Lopes de Freitas',
    title: 'Mentor of ICA-CCH WG, President',
    organization: 'Organization of Brazilian Cooperatives, Brazil',
    image: '../../../../../assets/images/m1.jpg'
  },
  {
    name: 'Ms Aicha Errifaai',
    title: 'Director General',
    organization: 'Office of Cooperation Development, Morocco',
    image: '../../../../../assets/images/m2.jpg'
  },
  {
    name: 'Dr Andreas Wieg',
    title: 'Head of Department',
    organization: 'DGRV - Deutscher Genossenschafts- und Raiffeisenverband e.V., Germany',
    image: '../../../../../assets/images/m3.jpg'
  },
  {
    name: 'Ms Ebun Akin-Falaiye',
    title: 'Executive Secretary',
    organization: 'Cooperative Federation of Nigeria',
    image: '../../../../../assets/images/m4.jpg'
  },
  {
    name: 'Mr Rohit Gupta',
    title: 'Deputy Managing Director',
    organization: 'National Cooperative Development Corporation, India',
    image: '../../../../../assets/images/m5.jpg'
  },
  {
    name: 'Mr Osamu Nakano',
    title: 'Secretary General',
    organization: 'Japan Workers\' Cooperative Union, Japan',
    image: '../../../../../assets/images/m6.jpg'
  },
  {
    name: 'Ms Liz McIvor',
    title: 'Manager and Lead',
    organization: 'The Co-operative Heritage Trust, United Kingdom',
    image: '../../../../../assets/images/m7.jpg'
  },
  {
    name: 'Mr Tiago Luiz Schmidt',
    title: 'President',
    organization: 'Sicredi Pioneira, Brazil',
    image: '../../../../../assets/images/m8.jpg'
  },
  {
    name: 'Mr Erbin Crowell',
    title: 'Board of Directors of DotCoop & NCBA CLUSA, and Executive Director',
    organization: 'NFCA, United States of America',
    image: '../../../../../assets/images/m9.jpg'
  },
  {
    name: 'Mr Jeroen Douglas',
    title: '(Ex-officio) Director General',
    organization: 'International Cooperative Alliance',
    image: '../../../../../assets/images/m10.jpg'
  },
  {
    name: 'Ms Fabíola da Silva Nader Motta',
    title: 'General Manager',
    organization: 'Organization of Brazilian Cooperatives, Brazil',
    image: '../../../../../assets/images/ladye.jpg'
  },
  {
    name: 'Mr João Pinheiro Valadares Penna',
    title: 'Coordinator of International Relations',
    organization: 'Organization of Brazilian Cooperatives, Brazil',
    image: '../../../../../assets/images/m11.jpg'
  },
  {
    name: 'Mr. Lucas Badú',
    title: 'Analyst and Graphic Designer',
    organization: 'Organization of Brazilian Cooperatives, Brazil',
    image: '../../../../../assets/images/m13.jpg'
  },
  {
    name: 'Mr. Iago Carvalho',
    title: 'Digital Platforms Analyst',
    organization: 'Organization of Brazilian Cooperatives, Brazil',
    image: '../../../../../assets/images/m14.jpg'
  },
  {
    name: 'Ms. Prachi Rathi',
    title: 'Media and Communication',
    organization: 'National Cooperative Development Corporation, India',
    image: '../../../../../assets/images/m15.jpg'
  },
  {
    name: 'Ms. Meenu ____',
    title: 'Deputy Director',
    organization: 'National Cooperative Development Corporation, India',
    image: ''
  },
  {
    name: 'Mr Santosh Kumar Padmanabhan',
    title: 'Director of Legislation, International Cooperative Alliance; Staff Coordinator, ICA-CCH Working Group.',
    organization: '',
    image: '../../../../../assets/images/m16.jpg'
  }
];

}