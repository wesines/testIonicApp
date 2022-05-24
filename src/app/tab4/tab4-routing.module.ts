import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab4Page } from './tab4.page';
import { Tab2Page } from '../tab2/tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab4Page,
  },
    { path: 'cameraPage', component:  Tab2Page,
 },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
