import { Component } from '@angular/core';
import { WorldMapComponent } from "../world-map/world-map.component";

@Component({
  selector: 'app-home',
  imports: [WorldMapComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
