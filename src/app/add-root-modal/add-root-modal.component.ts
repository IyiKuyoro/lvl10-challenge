import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-root-modal',
  templateUrl: './add-root-modal.component.html',
  styleUrls: ['./add-root-modal.component.scss']
})
export class AddRootModalComponent implements OnInit {
  rootType: 'Manager' | 'Department';

  constructor() { }

  ngOnInit() {
    this.rootType = 'Manager';
  }

  switchRootType(): void {
    if (this.rootType === 'Manager') {
      this.rootType = 'Department';
    } else {
      this.rootType = 'Manager';
    }
  }
}
