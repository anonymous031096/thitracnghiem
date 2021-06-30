import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';

const antdModule = [
  NzInputModule,
  NzButtonModule,
  NzCheckboxModule,
  NzFormModule,
  NzIconModule,
  NzGridModule,
  NzAlertModule,
];

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    ...antdModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
