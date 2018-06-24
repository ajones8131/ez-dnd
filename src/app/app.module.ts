import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {OverviewComponent} from './components/overview/overview.component';
import {OverlayComponent} from './components/top-view/overlay/overlay.component';
import { PlayerDisplayComponent } from './components/top-view/player-display/player-display.component';
import { NavbarComponent } from './components/top-view/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    OverlayComponent,
    PlayerDisplayComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
