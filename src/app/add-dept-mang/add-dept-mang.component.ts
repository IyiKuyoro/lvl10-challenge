import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-dept-mang',
  templateUrl: './add-dept-mang.component.html',
  styleUrls: ['./add-dept-mang.component.scss']
})
export class AddDeptMangComponent implements OnInit {
  plus = faPlus;

  constructor() { }

  ngOnInit() {
  }

}
