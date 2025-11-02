import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CooperativeService, CooperativeDetails } from '../../services/cooperative.service';

@Component({
  selector: 'app-cooperative-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cooperative-detail.component.html',
  styleUrls: ['./cooperative-detail.component.css']
})
export class CooperativeDetailComponent implements OnInit {
  cooperative: CooperativeDetails | undefined;

  constructor(
    private route: ActivatedRoute,
    private cooperativeService: CooperativeService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.cooperativeService.getCooperativeDetails(id).subscribe(coop => {
        this.cooperative = coop;
      });
    }
  }
}