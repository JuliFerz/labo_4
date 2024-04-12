import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edades',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edades.component.html',
  styleUrl: './edades.component.css'
})
export class EdadesComponent {
  public edadUno!: number;
  public edadDos!: number;
  public edadTotal: number = 0;
  public edadPromedio: number = 0;
  public mostrarResults: boolean = false;

  public calcularPromedioSuma(): void {
    if (!this.edadUno || !this.edadDos) return;
    this.edadTotal = this.edadUno + this.edadDos;
    this.edadPromedio = this.edadTotal / 2;
    this.mostrarResults = true;
  }

  public limpiar(): void {
    this.edadUno = 0;
    this.edadDos = 0;
    this.edadTotal = 0
    this.edadPromedio = 0
    this.mostrarResults = false;
  }
}
