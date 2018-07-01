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
    path: 'combat',
    component: AttackViewComponent,
  },
  {
    path: 'inventory',
    component: AttributesComponent,
  },
  {
    path: 'misc',
    component: AttributesComponent,
  },
  { path: '**',   redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule {
}

