import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material';

import {AppComponent} from './app.component';
import {OverviewComponent} from './components/overview/overview.component';
import {OverlayComponent} from './components/top-view/overlay/overlay.component';
import {PlayerDisplayComponent} from './components/top-view/player-display/player-display.component';
import {NavbarComponent} from './components/top-view/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    OverlayComponent,
    PlayerDisplayComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
