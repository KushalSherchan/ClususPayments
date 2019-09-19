import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { AuthService } from '../services/auth.service';


@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    MainPageComponent
  ],
  exports: [
    HeaderComponent,
    LoginComponent,
    MainPageComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  providers: [AuthService]
})
export class LayoutModule {}
