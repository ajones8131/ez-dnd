import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material';

import {AppComponent} from './app.component';
import {OverviewComponent} from './components/overview/overview.component';
import {OverlayComponent} from './components/overlay/overlay.component';
import {PlayerDisplayComponent} from './components/overlay/player-display/player-display.component';
import {NavbarComponent} from './components/overlay/navbar/navbar.component';
import {AttackViewComponent} from './components/attack-view/attack-view.component';
import {AttributesComponent} from './components/attributes/attributes.component';
import {SettingsComponent} from './components/settings/settings.component';
import {AppRoutingModule} from './app-routing.module';
import {DataService} from './services/data.service';
import {HttpClientModule} from '@angular/common/http';
import {ClickEditComponent} from './components/materials/click-edit/click-edit.component';
import {FormsModule} from '@angular/forms';
import { EnterDirective } from './directives/eventing/enter.directive';
import { BaseStatsComponent } from './components/overlay/base-stats/base-stats.component';
import { BaseStatComponent } from './components/overlay/base-stats/base-stat/base-stat.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    OverlayComponent,
    PlayerDisplayComponent,
    NavbarComponent,
    AttackViewComponent,
    AttributesComponent,
    SettingsComponent,
    ClickEditComponent,
    EnterDirective,
    BaseStatsComponent,
    BaseStatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
