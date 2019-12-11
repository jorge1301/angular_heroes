import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroeService } from '../../servicios/heroe.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
 heroe: any = {};
 dato: any;

 constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroeService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.dato = params.termino;
      this.heroe = this.heroesService.buscarHeroe(params.termino);
    });
  }

  verHeroeBuscar() {
   console.log(this.heroe);
   this.router.navigate(['/heroe', this.heroe[0].id] );
  }

}
