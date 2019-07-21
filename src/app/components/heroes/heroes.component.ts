import { Component, OnInit, Output } from '@angular/core';
import { HeroeService, Heroe } from '../../servicios/heroe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})



export class HeroesComponent implements OnInit {
  @Output() heroe: Heroe[] = [];


  constructor(private heroeService: HeroeService, private heroeRouter: Router) { }

  ngOnInit() {
    this.heroe = this.heroeService.getHeroes();
  }

}
