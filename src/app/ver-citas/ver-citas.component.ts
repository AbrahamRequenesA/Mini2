import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-ver-citas',
  templateUrl: './ver-citas.component.html',
  styleUrls: ['./ver-citas.component.css']
})
export class VerCitasComponent implements OnInit {
  citas: any[] = [];
  citasFuturas: any[] = [];
  citasPasadas: any[] = [];
  mostrarFuturas: boolean = true;
 
  constructor() { 
    this.separarFechas();
  }

  ngOnInit(): void {
    this.obtenerCitasGuardadas();
    this.separarFechas();
  }

  obtenerCitasGuardadas() {
    if (typeof localStorage !== 'undefined') {
      console.log('LocalStorage está definido.');
      const citasGuardadas = localStorage.getItem('reservas');
      if (citasGuardadas) {
        console.log('Citas guardadas encontradas en localStorage:', citasGuardadas);
        this.citas = JSON.parse(citasGuardadas);
      } else {
        console.log('No se encontraron citas guardadas en localStorage.');
      }
    } else {
      console.log('LocalStorage no está definido.');
    }
  }
  separarFechas() {
    console.log('Cita Futura:');
    const today = new Date();
    for (let cita of this.citas) {
      
      const fechaCita = new Date(cita.fecha);
      if (fechaCita > today) {
        this.citasFuturas.push(cita);
        console.log('Cita Futura:', cita);
      } else {
        this.citasPasadas.push(cita);
        console.log('Cita Pasad:', cita);
      }
    }
  }
  editarCita(cita: any) {
    cita.correo = prompt('Nuevo correo:', cita.correo) || cita.correo;
    localStorage.setItem('reservas', JSON.stringify(this.citas));
  }

  eliminarCita(cita: any) {
    this.citas = this.citas.filter(c => c !== cita);
    localStorage.setItem('reservas', JSON.stringify(this.citas));
  }

  
  
}
