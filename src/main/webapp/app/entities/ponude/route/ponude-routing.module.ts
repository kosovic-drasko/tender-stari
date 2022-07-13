import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { PonudeComponent } from '../list/ponude.component';

const ponudeRoute: Routes = [
  {
    path: '',
    component: PonudeComponent,
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'unos',
    component: PonudeComponent,
    canActivate: [UserRouteAccessService],
    data: {
      oznaka: 'unosi',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(ponudeRoute)],
  exports: [RouterModule],
})
export class PonudeRoutingModule {}
