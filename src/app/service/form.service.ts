import { Solicitud } from './../model/solicitud';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
solicitudes: Solicitud[]= [];

  constructor() { }
  submitApplication(sol: Solicitud) {
this.cargaSolicitudes();
this.agegarSolicitud(sol);
this.cargaSolicitudes();
console.log(this.solicitudes);

  }

  cargaSolicitudes(){
    const solicitudesString = localStorage.getItem('solicitudes');
    this.solicitudes = solicitudesString?JSON.parse(solicitudesString) as Solicitud[]:[];
  }
  agegarSolicitud(sol : Solicitud){
    this.solicitudes.push(sol);
    localStorage.setItem('solicitudes', JSON.stringify(this.solicitudes));
  }
}
