import { Component, OnInit, Input } from '@angular/core';
import { IEmployee } from '../models/employee.model';
import { Manager } from '../models/manager.model';

@Component({
  selector: 'app-sub-group',
  templateUrl: './sub-group.component.html',
  styleUrls: ['./sub-group.component.scss']
})
export class SubGroupComponent implements OnInit {
  @Input() employee: IEmployee | Manager | any;

  constructor() { }

  ngOnInit() {
  }

}
