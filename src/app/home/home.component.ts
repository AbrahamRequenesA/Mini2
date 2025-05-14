import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { VideoComponent } from '../video/video.component';
export interface Listing {
  imgSrc: string;
  titulo: string;
  pais: string;
  fechas: string;
  precio: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, VideoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  listings: Listing[] = [
    {
      imgSrc: '/img/Pavavi/img2.jpg',
      titulo: 'Guerrero',
      pais: 'Mexico',
      fechas: '2-7 de jun.',
      precio: '$6,000 MXN noche'
    },
    {
      imgSrc: '/img/Villa Rica/img3.jpg',
      titulo: 'Veracruz',
      pais: 'Mexico',
      fechas: '14-19 de may.',
      precio: '$2,300 MXN noche'
    },
    {
      imgSrc: '/img/Playa Virgen/img5.jpg',
      titulo: 'Acapulco',
      pais: 'Mexico',
      fechas: '26- 31 de may.',
      precio: '$1,599 MXN noche'
    },
    {
      imgSrc: '/img/Lujoso Preciosa vista/img3.jpg',
      titulo: 'Riva',
      pais: 'Italia',
      fechas: '15-17 de may.',
      precio: '$2,194 noche'
    },
    {
      imgSrc: '/img/Breckenridge, Colorado, Refugio de montaña/img1.jpg',
      titulo: 'Breckenridge',
      pais: 'Estados Unidos',
      fechas: '5- 10 de may.',
      precio: '$11,533 MXN noche'
    },
    {
      imgSrc: '/img/Breckenridge, Colorado/img5.jpg',
      titulo: 'Breckenridge',
      pais: 'Estados Unidos',
      fechas: '1- 6 de may.',
      precio: '$39,060 MXN noche'
    },
    {
      imgSrc: '/img/Cabaña en Balian Beach, Indonesia/img1.jpg',
      titulo: 'Balian Beach',
      pais: 'Indonesia',
      fechas: '26- 1 de jul.',
      precio: '$1,737 MXN noche'
    },
    {
      imgSrc: '/img/Sunset Cave/img2.jpg',
      titulo: 'Oia',
      pais: 'Grecia',
      fechas: '15- 20 de may.',
      precio: '$11,571 MXN noche'
    }
  ];
    
}
