import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormReactivoComponent } from '../form-reactivo/form-reactivo.component';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [RouterModule, FormReactivoComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

}
