import { Component } from '@angular/core';
import { Banner } from "../../shared/banner/banner";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-the-list',
  imports: [Banner,RouterLink],
  templateUrl: './the-list.html',
  styleUrl: './the-list.css'
})
export class TheList {

}
