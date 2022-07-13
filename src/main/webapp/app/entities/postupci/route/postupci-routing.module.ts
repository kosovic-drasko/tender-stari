import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { PostupciComponent } from '../list/postupci.component';

const postupciRoute: Routes = [
  {
    path: '',
    component: PostupciComponent,
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'unos',
    component: PostupciComponent,
    canActivate: [UserRouteAccessService],
    data: {
      oznaka: 'unosi',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(postupciRoute)],
  exports: [RouterModule],
})
export class PostupciRoutingModule {}
