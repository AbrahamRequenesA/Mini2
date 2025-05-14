import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-reactivo',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-reactivo.component.html',
  styleUrl: './form-reactivo.component.css'
})
export class FormReactivoComponent {
  contactForm: FormGroup;
  submitted = false;
  loading = false;

  contactReasons = [
    { value: 'consulta', label: 'Consulta general' },
    { value: 'reserva', label: 'Problema con reserva' },
    { value: 'pago', label: 'Problema con pago' },
    { value: 'otro', label: 'Otro motivo' }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.pattern(/^[0-9]{10}$/)]],
      motivo: ['consulta', Validators.required],
      mensaje: ['', [Validators.required, Validators.minLength(10)]],
      notificaciones: [true]
    });
  }

  onSubmit() {
    this.submitted = true;
    
    if (this.contactForm.valid) {
      this.loading = true;
      
      setTimeout(() => {
        console.log('Formulario enviado:', this.contactForm.value);
        this.loading = false;
        this.showSuccessAlert();
        this.contactForm.reset();
        this.submitted = false;
      }, 1500);
    }
  }

  showSuccessAlert() {
    alert('¡Mensaje enviado con éxito! Nos contactaremos pronto.');
  }

  get f() { return this.contactForm.controls; }
}


