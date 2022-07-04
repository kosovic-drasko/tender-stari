import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { PomocComponent } from './list/pomoc.component';
import { PomocRoutingModule } from './route/pomoc-routing.module';
import { VgCoreModule } from '@videogular/ngx-videogular/core';

@NgModule({
  imports: [SharedModule, PomocRoutingModule, VgCoreModule],
  declarations: [PomocComponent],
})
export class PomocModule {}
