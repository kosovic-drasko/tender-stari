import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { VrednovanjeComponent } from '../list/vrednovanje.component';

const vrednovanjeRoute: Routes = [
  {
    path: '',
    component: VrednovanjeComponent,
    canActivate: [UserRouteAccessService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(vrednovanjeRoute)],
  exports: [RouterModule],
})
export class VrednovanjeRoutingModule {}
