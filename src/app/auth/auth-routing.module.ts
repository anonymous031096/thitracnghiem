import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageUrl } from 'src/core/utils/constants';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: PageUrl.LOGIN,
    component: LoginComponent,
  },
  {
    path: PageUrl.REGISTER,
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
