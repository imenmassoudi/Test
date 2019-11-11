import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
  dateJour:string;
films=[
  {titre:'Anges & Démons', affiche:'../assets/ange.jpg',duree:120},
  {titre:'Coco', affiche:'../assets/coco.jpg',duree:120},
  {titre:'Anges & Démons', affiche:'../assets/nomade.bmp',duree:120}

];
  constructor() { }

  ngOnInit() {
  }

}
