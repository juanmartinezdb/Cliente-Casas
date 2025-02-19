import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { DetailsComponent } from './component/details/details.component';
import { ListSolicitudesComponent } from './component/list-solicitudes/list-solicitudes.component';
import { FormularioNuevasCasasComponent } from './component/formulario-nuevas-casas/formulario-nuevas-casas.component';

export const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page',
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Home details',
    },
    {
      path: 'solicitudes',
      component: ListSolicitudesComponent,
      title: 'Solicitudes actuales',
    },
    {
      path: 'newHouse',
      component: FormularioNuevasCasasComponent,
      title: 'Solicitudes actuales',
    },
  ];
