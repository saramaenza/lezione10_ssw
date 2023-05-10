import { Component, OnInit } from '@angular/core';

//@component è una direttiva
@Component({
  //nome del componente, identificatore creato in maniera automatica
  selector: 'app-ricerca',
  //url del template html
  templateUrl: './ricerca.component.html',
  //url del foglio di stile
  styleUrls: ['./ricerca.component.css'],
})
export class RicercaComponent implements OnInit {
  //spesso è vuoto e serve per inizializzare dei valori
  constructor() {}

  //funzionalità che viene eseguita nel momento in cui parte l'esecuzione del nostro componente
  ngOnInit() {}
}
