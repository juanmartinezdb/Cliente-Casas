import { FormularioComponent } from './../formulario/formulario.component';
import { Component, inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import { HousingService } from '../../service/housing.service';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { HousingLocation } from '../../model/housinglocation';
import { MapComponent } from '../map/map.component';


  @Component({
  selector: 'app-details',
  imports: [CommonModule, ReactiveFormsModule, FormularioComponent, MapComponent],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);

    this.housingService.getHousingLocationById(housingLocationId).subscribe (houseList=> this.housingLocation = houseList);
    // this.housingService.getHousingLocationById(housingLocationId).then((housingLocation) => {
    //   this.housingLocation = housingLocation;
    // });
  }


}
