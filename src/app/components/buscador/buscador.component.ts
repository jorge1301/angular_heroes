import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroeService } from '../../servicios/heroe.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
 heroes: any = {};
 dato: any;
  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroeService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.dato = params.termino;
      this.heroes = this.heroesService.buscarHeroe(params.termino);
    });
  }

  verHeroe() {
    this.router.navigate( ['/heroe', this.heroes.id] );
  }

}
