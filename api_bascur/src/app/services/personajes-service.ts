import { Injectable } from '@angular/core';
import { Personaje, RespuestaPersonajes } from '../models/personaje';
@Injectable({
providedIn: 'root',
})
export class PersonajesService {
private readonly url = 'https://rickandmortyapi.com/api/character';
async obtenerPersonajes(): Promise<Personaje[]> {
const respuesta = await fetch(this.url);
const datos: RespuestaPersonajes = await respuesta.json();
return datos.results;
}
async buscarPorNombre(nombre: string): Promise<Personaje[]> {
const respuesta = await fetch(this.url + '?name=' + nombre);
if (!respuesta.ok) {
return [];
}
const datos: RespuestaPersonajes = await respuesta.json();
return datos.results;
}
}
