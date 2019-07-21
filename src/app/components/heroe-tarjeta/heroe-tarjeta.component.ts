import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})


export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe: any = {};


  constructor(private heroeTarjetaRouter: Router) {
   }

  ngOnInit() {
  }

  verHeroe() {
    this.heroeTarjetaRouter.navigate(['/heroe', this.heroe.id]);
  }

}
