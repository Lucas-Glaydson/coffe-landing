import { Component, ElementRef, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { slideInFromLeft } from '../../Animations/animations';

@Component({
  selector: 'app-discover-section',
  templateUrl: './discover-section.component.html',
  styleUrls: ['./discover-section.component.scss'],
  animations: [slideInFromLeft]
})
export class DiscoverSectionComponent implements OnInit {
  isVisible = false;

  constructor(private el: ElementRef, @Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver(([entry]) => {
        this.isVisible = entry.isIntersecting;
      }, { threshold: 0.2 });

      observer.observe(this.el.nativeElement);
    }
  }
}
