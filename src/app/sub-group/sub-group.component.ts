import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';

import { IEmployee } from '../models/employee.model';
import { Manager } from '../models/manager.model';
import { AddEmployeeModalComponent } from '../add-employee-modal/add-employee-modal.component';

@Component({
  selector: '[app-sub-group]',
  templateUrl: './sub-group.component.html',
  styleUrls: ['./sub-group.component.scss']
})
export class SubGroupComponent implements OnInit {
  plus = faPlus;
  @Input() employee: IEmployee | Manager | any;
  private el: HTMLElement;

  constructor(
    elRef: ElementRef,
    public dialog: MatDialog,
  ) {
    this.el = elRef.nativeElement;
  }

  ngOnInit() {
  }

  openModal(): void {
    const dialogRef = this.dialog.open(AddEmployeeModalComponent, {
      width: '90%',
      maxWidth: '650px',
      data: {
        rootSave: false,
        manager: this.employee,
      },
    });
  }

}
