import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SitesService, Site } from '../../services/sites.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-world-map',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.css']
})
export class WorldMapComponent implements OnInit {
private map: L.Map | undefined;
private markers: L.Marker[] = [];
private sites: Site[] = [];
selectedContinents: string[] = [];
isFilterExpanded: boolean = false;
selectedSite: Site | null = null;
isModalOpen: boolean = false;

constructor(private router: Router, private sitesService: SitesService) {}

  ngOnInit() {
    this.initMap();
  }

  private filterMarkers(): void {
    this.markers.forEach((marker, index) => {
      const site = this.sites[index];
      if (this.selectedContinents.length === 0 || this.selectedContinents.includes(site.continent)) {
        if (!this.map!.hasLayer(marker)) {
          marker.addTo(this.map!);
        }
      } else {
        if (this.map!.hasLayer(marker)) {
          this.map!.removeLayer(marker);
        }
      }
    });
  }

  onContinentFilterChange(continent: string, checked: boolean): void {
    if (checked) {
      if (!this.selectedContinents.includes(continent)) {
        this.selectedContinents.push(continent);
      }
    } else {
      this.selectedContinents = this.selectedContinents.filter(c => c !== continent);
    }
    this.filterMarkers();
  }

  toggleFilter(): void {
    this.isFilterExpanded = !this.isFilterExpanded;
  }

  openModal(site: Site): void {
    this.selectedSite = site;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedSite = null;
  }

  viewDetails(): void {
    if (this.selectedSite) {
      const route = this.selectedSite.type === 'tangible' ? '/aboutTangiblePage' : '/aboutInTangiblePage';
      this.router.navigate([route, this.selectedSite.id]);
      this.closeModal();
    }
  }

  onContinentClick(continent: string): void {
    const continentCenters: { [key: string]: [number, number] } = {
      'Africa': [-8.7832, 34.5085],
      'Asia': [34.0479, 100.6197],
      'Europe': [54.5260, 15.2551],
      'North America': [54.5260, -105.2551],
      'South America': [-8.7832, -55.4915]
    };

    const center = continentCenters[continent];
    if (center && this.map) {
      this.map.setView(center, 3);
    }
  }

  private initMap(): void {
    // Create map instance
    this.map = L.map('map', {
      center: [20, 0], // Center on world
      zoom: 2,
      minZoom: 2,
      maxZoom: 18
    });

    // Add base tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      // attribution: '© OpenStreetMap contributors',
      maxZoom: 18,
      errorTileUrl: 'https://tile.openstreetmap.org/0/0/0.png'
    }).addTo(this.map);

    // Add satellite layer
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      // attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
      maxZoom: 18
    }).addTo(this.map);

    // Add layer control
    const baseMaps = {
      // "Street Map": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'),
      "Satellite": L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}')
    };
    L.control.layers(baseMaps).addTo(this.map);

    // Custom icon for markers
    const customIcon = L.icon({
      iconUrl: 'assets/images/i2.png',
      iconSize: [12, 15],
      iconAnchor: [12, 41],
      popupAnchor: [0, -25],
      shadowSize: [41, 41]
    });

    // Load sites from service
    this.sites = this.sitesService.getSites();

    // Add markers with click handlers
    this.sites.forEach(site => {
      const marker = L.marker([site.lat, site.lng], { icon: customIcon })
        .on('click', () => {
          this.openModal(site);
        });

      this.markers.push(marker);
    });

    this.filterMarkers();
  }
} 