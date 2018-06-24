import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {OverviewComponent} from "./components/overview/overview.component";
import {AttackViewComponent} from "./components/attack-view/attack-view.component";
import {AttributesComponent} from "./components/attributes/attributes.component";

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: OverviewComponent,
  },
  {
    path: 'attack',
    component: AttackViewComponent,
  },
  {
    path: 'attributes',
    component: AttributesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule {
}

