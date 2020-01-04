import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ChangeLogFormComponent} from './change-log-form/change-log-form.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Portfolio';
  constructor( public dialog: MatDialog ) {}

  openExample(component) {
    this.dialog.open(
      ChangeLogFormComponent
    );
  }
}
