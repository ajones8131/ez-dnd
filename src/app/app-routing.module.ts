import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OverviewComponent} from './components/overview/overview.component';
import {AttackViewComponent} from './components/attack-view/attack-view.component';
import {InventoryComponent} from './components/inventory/inventory.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home',
    component: OverviewComponent
  },
  {
    path: 'combat',
    component: AttackViewComponent
  },
  {
    path: 'inventory',
    component: InventoryComponent
  },
  {
    path: 'misc',
    component: InventoryComponent
  },
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule {
}

