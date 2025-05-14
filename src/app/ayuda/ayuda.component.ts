import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';



@Component({
  selector: 'app-ayuda',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './ayuda.component.html',
  styleUrl: './ayuda.component.css'
})
export class AyudaComponent {

  preguntasRespuestas = `
  <div class="pregunta-respuesta">
  <button (click)="mostrarRespuesta = !mostrarRespuesta">
  <h4>Pregunta</h4>
    {{ mostrarRespuesta ? 'Ocultar respuesta' : 'Mostrar respuesta' }}
  </button>
  @if (mostrarRespuesta) {
      <p>Respuesta</p>
    }
</div>

  `;

  mostrarRespuesta = false;
  mostrarRespuesta2 = false;
  mostrarRespuesta3 = false;
  mostrarRespuesta4 = false;
  mostrarRespuesta5 = false;
  mostrarRespuesta6 = false;
  mostrarRespuesta7 = false;
  mostrarRespuesta8 = false;
  mostrarRespuesta9 = false;
  mostrarRespuesta10 = false;

}
