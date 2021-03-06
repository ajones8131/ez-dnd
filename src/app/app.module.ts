import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatIconModule, MatCardModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {OverviewComponent} from './components/overview/overview.component';
import {OverlayComponent} from './components/overlay/overlay.component';
import {PlayerDisplayComponent} from './components/overlay/player-display/player-display.component';
import {NavbarComponent} from './components/overlay/navbar/navbar.component';
import {AttackViewComponent} from './components/attack-view/attack-view.component';
import {InventoryComponent} from './components/inventory/inventory.component';
import {SettingsComponent} from './components/settings/settings.component';
import {AppRoutingModule} from './app-routing.module';
import {DataService} from './services/data.service';
import {HttpClientModule} from '@angular/common/http';
import {ClickEditComponent} from './components/materials/click-edit/click-edit.component';
import {FormsModule} from '@angular/forms';
import {BaseStatsComponent} from './components/overlay/base-stats/base-stats.component';
import {BaseStatComponent} from './components/overlay/base-stats/base-stat/base-stat.component';
import {ListComponent} from './components/materials/list/list.component';
import {ListItemComponent} from './components/materials/list/list-item/list-item.component';
import { CharacterSelectorComponent } from './components/character-selector/character-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    OverlayComponent,
    PlayerDisplayComponent,
    NavbarComponent,
    AttackViewComponent,
    InventoryComponent,
    SettingsComponent,
    ClickEditComponent,
    BaseStatsComponent,
    BaseStatComponent,
    ListComponent,
    ListItemComponent,
    CharacterSelectorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
