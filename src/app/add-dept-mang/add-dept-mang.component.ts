import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {MatDialog} from '@angular/material/dialog';

import { AddRootModalComponent } from '../add-root-modal/add-root-modal.component';

@Component({
  selector: 'app-add-dept-mang',
  templateUrl: './add-dept-mang.component.html',
  styleUrls: ['./add-dept-mang.component.scss']
})
export class AddDeptMangComponent implements OnInit {
  plus = faPlus;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddRootModalComponent, {
      width: '90%',
      maxWidth: '650px',
      data: {},
    });
  }
}
