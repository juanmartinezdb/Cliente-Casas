import { BehaviorSubject } from 'rxjs';
import { Solicitud } from './../model/solicitud';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
private solicitudesSubject = new BehaviorSubject<Solicitud[]>(this.cargarSolicitudes());
solicitud$ = this.solicitudesSubject.asObservable();

  constructor() {  }

  cargarSolicitudes(): Solicitud[] {
    const solicitudesString = localStorage.getItem('solicitudes');
    return solicitudesString ? JSON.parse(solicitudesString) as Solicitud[] : [];
  }

  guardarSolicitudes(solicitudes: Solicitud[]): void {
    localStorage.setItem('solicitudes', JSON.stringify(solicitudes));
  }

  submitApplication(sol: Solicitud) {
    const solicitudesActuales = this.solicitudesSubject.getValue();
    const nuevasSolicitudes = [...solicitudesActuales, sol];
    this.solicitudesSubject.next(nuevasSolicitudes);
    this.guardarSolicitudes(nuevasSolicitudes);
  }
}
