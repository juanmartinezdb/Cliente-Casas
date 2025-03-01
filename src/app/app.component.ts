import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { HousingLocationComponent } from './component/housing-location/housing-location.component';
import {RouterModule} from '@angular/router';
import { MapComponent } from './component/map/map.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, RouterLink, MapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'homes';
}
