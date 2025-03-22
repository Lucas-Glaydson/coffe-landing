import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { DiscoverSectionComponent } from "../../components/discover-section/discover-section.component";
import { EnjoySectionComponent } from "../../components/enjoy-section/enjoy-section.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, DiscoverSectionComponent, EnjoySectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
