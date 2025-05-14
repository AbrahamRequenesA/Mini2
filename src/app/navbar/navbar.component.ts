import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, LoginComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  @ViewChild('searchInput') searchInput!: ElementRef;

  adminLogueado: any = null;

  constructor(private router: Router) {}

  ngOnInit() {
    const admin = localStorage.getItem('adminLogueado');
    if (admin) {
      this.adminLogueado = JSON.parse(admin);
    }
  }

  logout() {
    localStorage.removeItem('adminLogueado');
    this.adminLogueado = null;
    this.router.navigate(['/login']);
  }

  onSearch(searchTerm: string) {
    localStorage.setItem('searchTerm', searchTerm);
    this.router.navigate(['/search']);
  }
}
