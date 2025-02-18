import { HousingService } from './../../service/housing.service';
import { HousingLocation } from './../../model/housinglocation';
import { Component, inject, OnInit } from '@angular/core';
import { Solicitud } from '../../model/solicitud';
import { FormService } from '../../service/form.service';
import { RouterLink } from '@angular/router';
import { LocalStorageHandlerService } from '../../service/local-storage-handler.service';

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
  local = inject(LocalStorageHandlerService);

  ngOnInit(): void {
    this.houseService.getAllHousingLocations().subscribe(houseList => this.houses=houseList);
    // this.houseService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
    //   this.houses = housingLocationList;
    // });
this.chargeSolicitudes();
  }

chargeSolicitudes(){
  this.formService.solicitud$.subscribe(s => {
    this.solicitudes = [...s].sort((a, b) => a.houseid - b.houseid);
  });
}

delete(sol: Solicitud){
  console.log(sol);
this.local.remove('solicitudes', sol);
this.formService.actualizarSolicitudes();

}
  houseById(id: number): HousingLocation | undefined {
    return this.houses.find(h => h.id === id);
  }
}
