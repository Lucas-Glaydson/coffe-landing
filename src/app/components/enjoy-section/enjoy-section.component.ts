import { Component, ElementRef, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { slideIn } from '../../Animations/animations';
import { CoffeCardComponent } from "../coffe-card/coffe-card.component";

@Component({
  selector: 'app-enjoy-section',
  imports: [CoffeCardComponent],
  templateUrl: './enjoy-section.component.html',
  styleUrls: ['./enjoy-section.component.scss'],
  animations: [slideIn]
})
export class EnjoySectionComponent implements OnInit {
  isVisible = false;

  constructor(private el: ElementRef, @Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver(([entry]) => {
        this.isVisible = entry.isIntersecting; // Atualiza visibilidade do elemento
      }, { threshold: 0.3 });

      observer.observe(this.el.nativeElement);
    }
  }
}
