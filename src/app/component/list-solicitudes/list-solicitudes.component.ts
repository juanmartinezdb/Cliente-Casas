import { HousingService } from './../../service/housing.service';
import { HousingLocation } from './../../model/housinglocation';
import { Component, inject, OnInit } from '@angular/core';
import { Solicitud } from '../../model/solicitud';
import { FormService } from '../../service/form.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-solicitudes',
  imports: [RouterLink],
  templateUrl: './list-solicitudes.component.html',
  styleUrl: './list-solicitudes.component.css'
})
export class ListSolicitudesComponent implements OnInit {
  solicitudes: Solicitud[] = [];
  houses: HousingLocation[] = [];
  formService = inject(FormService);
  houseService = inject(HousingService);

  ngOnInit(): void {
    this.houseService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.houses = housingLocationList;
    });


    this.formService.solicitud$.subscribe(s => {
      this.solicitudes = [...s].sort((a, b) => a.houseid - b.houseid);
    });
  }

  houseById(id: number): HousingLocation | undefined {
    return this.houses.find(h => h.id === id);
  }
}
