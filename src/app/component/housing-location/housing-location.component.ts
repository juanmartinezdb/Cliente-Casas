import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import {RouterModule} from '@angular/router';
import { HousingLocation } from '../../model/housinglocation';


@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
