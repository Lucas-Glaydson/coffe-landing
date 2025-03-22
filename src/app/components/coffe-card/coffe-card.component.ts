import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-coffe-card',
  imports: [],
  templateUrl: './coffe-card.component.html',
  styleUrl: './coffe-card.component.scss'
})
export class CoffeCardComponent {
  @Input() title: string = "Cappuccino"
  @Input() imageUrl: string = "capuccino.svg"
}
