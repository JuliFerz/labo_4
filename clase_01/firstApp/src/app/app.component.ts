import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';
import { EdadesComponent } from './componentes/edades/edades.component';

@Component({
  selector: 'app-root',
  standalone: true, // para module-less. Para que no dependa de un modulo
  imports: [
    RouterOutlet, // es el imports que antes estaba en el modulo
    FormsModule,
    CommonModule,
    EdadesComponent,
    BienvenidoComponent,
    LoginComponent,
    ErrorComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
