import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-world-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.css']
})
export class WorldMapComponent implements OnInit {
  private map: L.Map | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
    this.initMap();
  }

  private initMap(): void {
    // Create map instance
    this.map = L.map('map', {
      center: [20.5937, 78.9629], // Center on India
      zoom: 4,
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
      iconUrl: 'assets/images/Ellipse 32.png',
      iconSize: [10, 15],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    // Add markers for various locations
    const locations = [
  { id: 'maison-alphonse-desjardins', name: 'Maison Alphonse-Desjardins', lat: 46.80942, lng: -71.18206, country: 'Canada' },
  { id: 'amal-cooperative-tamanar', name: 'Amal Cooperative (Women’s cooperatives in the Argan sector)', lat: 31.4000, lng: -9.7000, country: 'Morocco' },
  { id: 'amul-dairy', name: 'Amul Dairy (Kaira District Milk Union)', lat: 22.55267, lng: 72.9715, country: 'India' },
  { id: 'americas-credit-union-museum', name: 'America’s Credit Union Museum', lat: 42.9933, lng: -71.4758, country: 'USA' },
  { id: 'greenbelt-museum', name: 'Greenbelt Museum & Housing Cooperative', lat: 38.998318, lng: -76.896332, country: 'USA' },
  { id: 'moshi-cooperative-university', name: 'Moshi Cooperative University (MoCU)', lat: -3.3400, lng: 37.3500, country: 'Tanzania' },
  { id: 'sunchales-monumento-cooperativismo', name: 'Sunchales – Monumento Nacional al Cooperativismo', lat: -31.633, lng: -61.500, country: 'Argentina' },
  { id: 'theodor-amstad-monument', name: 'Theodor Amstad Square and Monument to Cooperativism', lat: -29.3804, lng: -51.1087, country: 'Brazil' },
  { id: 'national-cooperative-museum', name: 'National Co-operative Museum', lat: 51.9156, lng: 4.3970, country: 'Netherlands' },
  { id: 'samuel-jurkovic-museum', name: 'The Co-operative Museum of Samuel Jurkovič', lat: 48.4917, lng: 17.7050, country: 'Slovak Republic' },
  { id: 'obisesan-building', name: 'Obisesan Building/Hall', lat: 7.3964, lng: 3.9167, country: 'Nigeria' },
  { id: 'naruto-toyohiko-memorial-museum', name: 'Naruto City Kagawa Toyohiko Memorial Museum', lat: 34.1633, lng: 134.4988, country: 'Japan' },
  { id: 'maktab-koperasi-malaysia', name: 'Maktab Koperasi Malaysia (Alor Setar branch)', lat: 6.1179, lng: 100.3669, country: 'Malaysia' },
  { id: 'cooperative-university-kenya', name: 'The Co-operative University of Kenya', lat: -1.2804, lng: 36.8163, country: 'Kenya' },
  { id: 'adamant-food-coop', name: 'Adamant Food Co-op', lat: 44.3341, lng: -72.7790, country: 'USA' },
  { id: 'uralungal-labour-contract-cooperative', name: 'Uralungal Labour Contract Cooperative Headquarters', lat: 11.6094, lng: 75.6150, country: 'India' },
  { id: 'workers-assembly-halls-denmark', name: 'Workers’ Assembly Halls', lat: 55.684833, lng: 12.570250, country: 'Denmark' },
  { id: 'levigliani-village', name: 'The Village of Levigliani', lat: 44.0722, lng: 10.2387, country: 'Italy' },
  { id: 'marinaleda-cooperative', name: 'Marinaleda Cooperative', lat: 37.3292, lng: -5.0161, country: 'Spain' },
  { id: 'rochdale-pioneer-museum', name: 'Rochdale Pioneer Museum and Heritage Trust', lat: 53.6141, lng: -2.1561, country: 'UK' },
  { id: 'kibbutz-degania-alef', name: 'Kibbutz Degania Alef', lat: 32.8154, lng: 35.5630, country: 'Israel' }
];

    // Add markers with popups and click handlers
    locations.forEach(location => {
      const marker = L.marker([location.lat, location.lng], { icon: customIcon })
        .addTo(this.map!)
        .bindPopup(`
         <div class=\"custom-popup bg-white p-4 rounded-lg shadow-lg max-w-sm\">
  <h3 class=\"text-xl font-semibold text-gray-800 mb-2\">${location.name}</h3>
  <p class=\"text-sm text-gray-600 mb-1\"><span class=\"font-medium text-gray-700\">Country:</span> ${location.country}</p>

  <p class=\"text-sm text-gray-600 mb-4\">
    <span class=\"font-medium text-gray-700\">Coordinates:</span> 
    ${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}
  </p>
  <button 
    class=\"view-details-btn mt-4 bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out\"
    data-id=\"${location.id}\"
  >
    View Details
  </button>
</div>
        `);

      // Add click handler to the popup
      marker.on('popupopen', () => {
        setTimeout(() => {
          const button = document.querySelector(`[data-id="${location.id}"]`);
          if (button) {
            button.addEventListener('click', () => {
              this.router.navigate(['/heritage-site', location.id]);
            });
          }
        }, 100);
      });
    });
  }
} 