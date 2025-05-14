import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './reserva.component.html',
  styleUrl: './reserva.component.css'
})

export class ReservaComponent {

  constructor() { }

  registrarReserva(nombre: string, numero: string, correo: string, fecha: string, hora: string) {
    // Validar que se haya ingresado una fecha y hora válidas
    if (!fecha || !hora) {
      alert('Por favor, ingrese una fecha y hora válidas.');
      return;
    }

    // Verificar si la fecha es futura
    const fechaSeleccionada = new Date(fecha + 'T' + hora);
    const fechaActual = new Date();
    if (fechaSeleccionada <= fechaActual) {
      alert('Por favor, seleccione una fecha y hora futura.');
      return;
    }

    const reservas = JSON.parse(localStorage.getItem('reservas') || '[]');
    for (const reserva of reservas) {
      if (reserva.fecha === fecha) {
        alert('Esta fecha ya ha sido reservada. Por favor, seleccione otra fecha.');
        return;
      }
    }

    const nuevaReserva = {
      nombre: nombre,
      numero: numero,
      correo: correo,
      fecha: fecha,
      hora: hora
    };
    reservas.push(nuevaReserva);
    localStorage.setItem('reservas', JSON.stringify(reservas));

    alert('Reserva registrada exitosamente!');
  }
}