import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private admins = [
    { username: 'admin1', password: '1234', fullName: 'Abraham Requenes' },
    { username: 'admin2', password: '1234', fullName: 'Admin Dos' },
    { username: 'admin3', password: '5678', fullName: 'Admin Tres' }
  ];
  private currentAdmin: any = null;

  login(username: string, password: string): Observable<void> {
  const admin = this.admins.find(a => a.username === username && a.password === password);
  if (admin) {
    this.currentAdmin = admin;
    localStorage.setItem('currentAdmin', JSON.stringify(admin));
    return of(void 0); 
  } else {
    return throwError(() => new Error('Usuario o contraseña incorrectos'));
  }
}

  logout() {
    this.currentAdmin = null;
    localStorage.removeItem('currentAdmin');
  }

  isLoggedIn(): boolean {
    return !!this.currentAdmin || !!localStorage.getItem('currentAdmin');
  }

  getCurrentAdmin(): any {
    return this.currentAdmin || JSON.parse(localStorage.getItem('currentAdmin') || 'null');
  }
}