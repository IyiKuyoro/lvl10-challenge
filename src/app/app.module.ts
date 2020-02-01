import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddDeptMangComponent } from './add-dept-mang/add-dept-mang.component';
import { AllocationService } from './services/allocation.service';
import { AddRootModalComponent } from './add-root-modal/add-root-modal.component';
import { RootGroupComponent } from './root-group/root-group.component';
import { SubGroupComponent } from './sub-group/sub-group.component';
import { AddEmployeeModalComponent } from './add-employee-modal/add-employee-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddDeptMangComponent,
    AddRootModalComponent,
    RootGroupComponent,
    SubGroupComponent,
    AddEmployeeModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  providers: [
    AllocationService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AddRootModalComponent,
    AddEmployeeModalComponent,
  ],
})
export class AppModule {
}
