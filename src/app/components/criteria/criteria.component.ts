import { Component } from '@angular/core';
import { Banner } from '../../shared/banner/banner';
import { CommonModule } from '@angular/common';
import { CriteriaService } from '../../services/criteria.service';

@Component({
  selector: 'app-criteria',
  imports: [Banner,CommonModule],
  templateUrl: './criteria.component.html',
  styleUrl: './criteria.component.css'
})
export class CriteriaComponent {
  COOPERATIVE_PRINCIPLES: any[] = [];
  icaCchCriteria: any[] = [];

  constructor(private criteriaService: CriteriaService) {
    this.COOPERATIVE_PRINCIPLES = this.criteriaService.getCooperativePrinciples();
    this.icaCchCriteria = this.criteriaService.getIcaCchCriteria();
  }
}