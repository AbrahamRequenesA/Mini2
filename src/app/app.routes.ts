import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ReservaComponent } from './reserva/reserva.component';
import { VerCitasComponent } from './ver-citas/ver-citas.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    
    {path: 'home', component: HomeComponent},
    {path: 'ayuda', component: AyudaComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'nosotros', component: NosotrosComponent},
    {path: 'reserva', component: ReservaComponent},
    {path: 'citas', component: VerCitasComponent},
    {path: 'login', component: LoginComponent},
    {path: 'search', component: SearchComponent},
];
