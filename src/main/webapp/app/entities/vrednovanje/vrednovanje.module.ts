import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { VrednovanjeComponent } from './list/vrednovanje.component';

import { VrednovanjeRoutingModule } from './route/vrednovanje-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { JhMaterialModule } from 'app/shared/jh-material.module';
import { MatTableExporterModule } from 'mat-table-exporter';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [
    SharedModule,
    VrednovanjeRoutingModule,
    MatPaginatorModule,
    JhMaterialModule,
    MatTableExporterModule,
    MatSortModule,
    MatSidenavModule,
  ],
  declarations: [VrednovanjeComponent],
})
export class VrednovanjeModule {}
