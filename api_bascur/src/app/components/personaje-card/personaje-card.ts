import { Component, Input } from '@angular/core';
import { Personaje } from '../../models/personaje';
@Component({
selector: 'app-personaje-card',
imports: [],
templateUrl: './personaje-card.html',
styleUrl: './personaje-card.css',
})
export class PersonajeCard {
@Input() personaje!: Personaje;
}