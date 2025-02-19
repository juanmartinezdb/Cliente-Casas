import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HousingLocation } from '../../model/housinglocation';
import { HousingService } from '../../service/housing.service';

@Component({
  selector: 'app-formulario-nuevas-casas',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-nuevas-casas.component.html',
  styleUrl: './formulario-nuevas-casas.component.css'
})
export class FormularioNuevasCasasComponent {
sistemasSeguridad: string[] = ['alarma', 'camara', 'puerta_reforzada', 'detectores_humo'];
formNewHouse!: FormGroup;
houses: HousingLocation[] = [];
housingService: HousingService = inject(HousingService);

constructor(private fb: FormBuilder) {
  this.housingService.getAllHousingLocations().subscribe( houseList =>{
    this.houses = houseList;
  })
  this.formNewHouse = this.fb.group({
    id: 0,
    name: ["", [Validators.required]],
    city: ["", [Validators.required]],
    state: ["", [Validators.required]],
    photo: "",
    availableUnits: ["", [Validators.required]],
    wifi: false,
    laundry: false,
    longitude: "",
    latitude: "",
    sistemasSeguridad: [],
  });
}


submitHouse(){
  if (this.formNewHouse.valid){
    console.log(this.houses);
console.log(this.houses[this.houses.length-1]);

      let newHouse: HousingLocation = {
        id : Number(this.houses[this.houses.length-1].id)+1,
        name: this.formNewHouse.value.name,
        city: this.formNewHouse.value.city,
        state: this.formNewHouse.value.state,
        photo: this.formNewHouse.value.photo,
        availableUnits: this.formNewHouse.value.availableUnits,
        wifi: this.formNewHouse.value.wifi,
        laundry: this.formNewHouse.value.laundry,
        coordinate: {
          latitude: this.formNewHouse.value.longitude,
          longitude: this.formNewHouse.value.latitude,
        },
        sistemasSeguridad: this.formNewHouse.value.sistemasSeguridad
      }
      console.log(newHouse);
      this.housingService.addHouse(newHouse).subscribe(() => {
        this.formNewHouse.reset();
        alert("formulario enviado con exito");
      });
    } else {
      alert('algun campo no es valido');
    }
  }
}

