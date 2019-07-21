import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeService } from '../../servicios/heroe.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroe: any = {};
  constructor(private activatedRoute: ActivatedRoute, private heroeService: HeroeService) {
    this.activatedRoute.params.subscribe(params => {
      // tslint:disable-next-line: radix
      const dato: number = parseInt(params.id);
      this.heroe = this.heroeService.getHeroe(dato);
    });
  }



  ngOnInit() {
  }

}
