import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { PrvorangiraniComponent } from './list/prvorangirani.component';
import { PrvorangiraniRoutingModule } from './route/prvorangirani-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { JhMaterialModule } from '../../shared/jh-material.module';
import { MatTableExporterModule } from 'mat-table-exporter';
import { MatSortModule } from '@angular/material/sort';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [
    SharedModule,
    PrvorangiraniRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    JhMaterialModule,
    MatTableExporterModule,
    MatSortModule,
    MatSidenavModule,
  ],
  declarations: [PrvorangiraniComponent],
  entryComponents: [],
  exports: [PrvorangiraniComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class PrvorangiraniModule {}
