import { Component, OnInit } from '@angular/core';
import { CriteriaAndNominationsService, Criterion } from '../../services/criteria-and-nominations.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Banner } from "../../shared/banner/banner";

@Component({
  selector: 'app-criteria-and-nominations',
  imports: [CommonModule, RouterLink, Banner],
  templateUrl: './criteria-and-nominations.component.html',
  styleUrl: './criteria-and-nominations.component.css'
})
export class CriteriaAndNominationsComponent implements OnInit {
  criteria: Criterion[] = [];

  constructor(private criteriaService: CriteriaAndNominationsService) {}

  ngOnInit(): void {
    this.criteria = this.criteriaService.getCriteria();
  }

  trackByCriterionId(index: number, criterion: Criterion): number {
    return criterion.id;
  }
}