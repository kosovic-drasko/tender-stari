import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { PonudeComponent } from './list/ponude.component';
import { PonudeUpdateComponent } from './update/ponude-update.component';
import { PonudeDeleteDialogComponent } from './delete/ponude-delete-dialog.component';
import { PonudeRoutingModule } from './route/ponude-routing.module';
import { MatTableExporterModule } from 'mat-table-exporter';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { JhMaterialModule } from 'app/shared/jh-material.module';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [
    MatSidenavModule,
    SharedModule,
    PonudeRoutingModule,
    MatPaginatorModule,
    JhMaterialModule,
    MatTableExporterModule,
    MatSortModule,
  ],
  declarations: [PonudeComponent, PonudeUpdateComponent, PonudeDeleteDialogComponent],
  entryComponents: [PonudeDeleteDialogComponent],
  exports: [PonudeComponent],
})
export class PonudeModule {}
