import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';

import { VrednovanjeRoutingModule } from './route/vrednovanje-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { JhMaterialModule } from 'app/shared/jh-material.module';
import { MatTableExporterModule } from 'mat-table-exporter';
import { MatSidenavModule } from '@angular/material/sidenav';
import { VrednovanjeComponent } from './list/vrednovanje.component';

@NgModule({
  imports: [
    MatSidenavModule,
    SharedModule,
    VrednovanjeRoutingModule,
    MatPaginatorModule,
    JhMaterialModule,
    MatTableExporterModule,
    MatSortModule,
  ],
  declarations: [VrednovanjeComponent],
  exports: [VrednovanjeComponent],
})
export class VrednovanjeModule {}
