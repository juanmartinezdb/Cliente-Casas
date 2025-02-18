import { BehaviorSubject } from 'rxjs';
import { Solicitud } from './../model/solicitud';
import { inject, Injectable } from '@angular/core';
import { LocalStorageHandlerService } from './local-storage-handler.service';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  local = inject(LocalStorageHandlerService);
private solicitudesSubject = new BehaviorSubject<Solicitud[]>(this.cargarSolicitudes());
solicitud$ = this.solicitudesSubject.asObservable();

  constructor() {  }

  actualizarSolicitudes(): void {
    this.solicitudesSubject.next(this.local.get('solicitudes', []))
  }

  cargarSolicitudes(): Solicitud[] {
    return this.local.get('solicitudes', []);
  }

  guardarSolicitudes(solicitudes: Solicitud[]): void {
    this.local.set('solicitudes', solicitudes);
  }
  
  submitApplication(sol: Solicitud) {
    this.local.add('solicitudes', sol);
    this.actualizarSolicitudes();
  }
}
