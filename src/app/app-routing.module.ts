import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageUrl } from 'src/core/utils/constants';

const routes: Routes = [
  {
    path: PageUrl.AUTH,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
