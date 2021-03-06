import { Component, OnInit } from '@angular/core';
import { Item } from './items.modelo';
import { _DATOS_ } from './service/constans';
import {
  fadeInOnEnterAnimation, fadeOutOnLeaveAnimation,
  zoomInAnimation,
  zoomInDownAnimation,
  zoomInLeftAnimation,
  zoomInRightAnimation,
  zoomInUpAnimation,
  zoomOutAnimation,
  zoomOutDownAnimation,
  zoomOutLeftAnimation,
  zoomOutRightAnimation,
  zoomOutUpAnimation,
  rubberBandAnimation
} from 'angular-animations';
import { ProductServiceService } from './service/product-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fadeInOnEnterAnimation(),
    rubberBandAnimation(),
    fadeOutOnLeaveAnimation(),
    zoomInAnimation(),
    zoomInDownAnimation(),
    zoomInLeftAnimation(),
    zoomInRightAnimation(),
    zoomInUpAnimation(),
    zoomOutAnimation(),
    zoomOutDownAnimation(),
    zoomOutLeftAnimation(),
    zoomOutRightAnimation(),
    zoomOutUpAnimation()
  ]
})
export class AppComponent implements OnInit  {
  title = 'sudotacion';
  items: Item[] = [];
  condition = false;
  itemSelected: Item = null;
  __DATOS__;


  constructor( private readonly service: ProductServiceService  ) {
    this.__DATOS__= _DATOS_;
  }

  ngOnInit(): void {
    this.service.cargarProductos()
    .subscribe(
      (items: Item[]) => {
        this.items = items;
      }
    )
  }

}
