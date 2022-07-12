import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { VrednovanjeComponent } from './list/vrednovanje.component';

import { VrednovanjeRoutingModule } from './route/vrednovanje-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
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
  exports: [VrednovanjeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class VrednovanjeModule {}
