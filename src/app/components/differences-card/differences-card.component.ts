import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-differences-card',
  imports: [],
  templateUrl: './differences-card.component.html',
  styleUrl: './differences-card.component.scss'
})
export class DifferencesCardComponent {
  @Input() imgUrl:string = "";
  @Input() title:string = "";
  @Input() description:string = "";
  @Input() class:string = "";


}
