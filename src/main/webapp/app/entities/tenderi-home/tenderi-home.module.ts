import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';
import { TenderiHomeComponent } from './list/tenderi-home.component';
import { TenderiHomeRoutingModule } from './route/tenderi-home-routing.module';
// import { MatTabsModule } from '@angular/material/tabs';

import { JhMaterialModule } from '../../shared/jh-material.module';

import { MatTabsModule } from '@angular/material/tabs';
import { HideMeDirective } from './hide-me.directive';
import { PonudeModule } from '../ponude/ponude.module';
import { SpecifikacijeModule } from '../specifikacije/specifikacije.module';
import { DecimalPipe } from '@angular/common';
import { HvalePonudeComponent } from '../hvale-ponude/list/hvale-ponude.component';

@NgModule({
  imports: [SharedModule, TenderiHomeRoutingModule, MatTabsModule, JhMaterialModule, SpecifikacijeModule, PonudeModule],
  declarations: [TenderiHomeComponent, HideMeDirective, HvalePonudeComponent],
  providers: [DecimalPipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TenderiHomeModule {}
