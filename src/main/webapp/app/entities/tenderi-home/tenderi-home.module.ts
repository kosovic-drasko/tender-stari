import { PrvorangiraniModule } from './../prvorangirani/prvorangirani.module';
import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';
import { TenderiHomeComponent } from './list/tenderi-home.component';
import { TenderiHomeRoutingModule } from './route/tenderi-home-routing.module';
import { JhMaterialModule } from '../../shared/jh-material.module';

import { MatTabsModule } from '@angular/material/tabs';
import { HideMeDirective } from './hide-me.directive';
import { PonudeModule } from '../ponude/ponude.module';
import { SpecifikacijeModule } from '../specifikacije/specifikacije.module';
import { DecimalPipe } from '@angular/common';
import { HvalePonudeComponent } from '../hvale-ponude/list/hvale-ponude.component';
import { VrednovanjeModule } from '../vrednovanje/vrednovanje.module';

@NgModule({
  imports: [
    SharedModule,
    TenderiHomeRoutingModule,
    MatTabsModule,
    JhMaterialModule,
    SpecifikacijeModule,
    PonudeModule,
    VrednovanjeModule,
    PrvorangiraniModule,
  ],
  declarations: [TenderiHomeComponent, HideMeDirective, HvalePonudeComponent],
  providers: [DecimalPipe],
})
export class TenderiHomeModule {}
