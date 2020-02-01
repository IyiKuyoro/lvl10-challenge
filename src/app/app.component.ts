import { Component } from '@angular/core';
import { AllocationService } from './services/allocation.service';
import { EmployeeGroup } from './models/employeeGroup.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'level-ten-challenge';

  constructor(private allocationService: AllocationService) {}

  getRoot(): EmployeeGroup {
    return this.allocationService.rootGroup;
  }
}
