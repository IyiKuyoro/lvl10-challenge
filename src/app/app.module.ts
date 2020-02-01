import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddDeptMangComponent } from './add-dept-mang/add-dept-mang.component';
import { AllocationService } from './services/allocation.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddDeptMangComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [
    AllocationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
