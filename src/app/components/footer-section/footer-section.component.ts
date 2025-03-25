import { Component } from '@angular/core';
import { FooterTopComponent } from "../footer-top/footer-top.component";
import { FooterBottonComponent } from "../footer-botton/footer-botton.component";

@Component({
  selector: 'app-footer-section',
  imports: [FooterTopComponent, FooterBottonComponent],
  templateUrl: './footer-section.component.html',
  styleUrl: './footer-section.component.scss'
})
export class FooterSectionComponent {

}
