import { Component, ElementRef, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { slideInFromRight } from '../../Animations/animations';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-chance-setion',
  imports: [],
  templateUrl: './chance-setion.component.html',
  styleUrl: './chance-setion.component.scss',
  animations: [slideInFromRight]
})
export class ChanceSetionComponent implements OnInit{
  isVisivle = false;

  constructor(
    private el: ElementRef, @Inject(PLATFORM_ID) private plataformId: object
  ){

  }

  ngOnInit(){
    if(isPlatformBrowser(this.plataformId)){
      const observer = new IntersectionObserver(([entry]) => {
        this.isVisivle = entry.isIntersecting;
      }, {threshold: 0.3});

      observer.observe(this.el.nativeElement);
    }
  }
}
