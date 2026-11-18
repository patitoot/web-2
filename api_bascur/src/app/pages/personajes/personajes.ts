import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonajeCard } from '../../components/personaje-card/personaje-card';
import { Personaje } from '../../models/personaje';
import { PersonajesService } from '../../services/personajes-service';
@Component({
selector: 'app-personajes',
imports: [FormsModule, PersonajeCard],
templateUrl: './personajes.html',
styleUrl: './personajes.css',
})
export class Personajes {
private readonly servicio = inject(PersonajesService);
personajes = signal<Personaje[]>([]);
cargando = signal(true);
busqueda = '';
constructor() {
this.cargar();
}
async cargar() {
this.cargando.set(true);
const datos = await this.servicio.obtenerPersonajes();
this.personajes.set(datos);
this.cargando.set(false);
}
async buscar() {
this.cargando.set(true);
const datos = await this.servicio.buscarPorNombre(this.busqueda);
this.personajes.set(datos);
this.cargando.set(false);
}
}